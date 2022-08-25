import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer, Offers } from '../types/offers';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute, cities, SortingType } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews';
import { toast } from 'react-toastify';
import { selectCity, selectDefaultSortyngType } from './offer-process/offer-process';

export const fetchOffersAction = createAsyncThunk<Offers, void, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchSelectedOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchSelectedOffer',
  async (offerId: number, { dispatch, extra: api }) => {

    try {
      const { data } = await api.get(`${APIRoute.Offers}/${offerId}`);
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerId: number, { extra: api }) => {

    try {
      const { data } = await api.get(`${APIRoute.Reviews}/${offerId}`);
      return data;
    } catch {
      toast.warn('Reviews were not found.');
      return [];
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearOffers',
  async (offerId: number, { extra: api }) => {
    try {
      const { data } = await api.get(`${APIRoute.Offers}/${offerId}/nearby`);
      return data;
    } catch {
      toast.warn('Nearby offers were not found.');
      return [];
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Favorites);
      return data;
    } catch {
      toast.warn('Favorite offers were not found.');
      return [];
    }
  },
);

export const checkAuthAction = createAsyncThunk<UserData, void, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
    dispatch(selectCity(cities[0]));
    dispatch(selectDefaultSortyngType(SortingType.Popular));
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
    dispatch(selectCity(cities[0]));
    dispatch(selectDefaultSortyngType(SortingType.Popular));
  },
);
