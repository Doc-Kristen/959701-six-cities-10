import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer, Offers } from '../types/offers';
import { redirectToRoute, updateSelectedOffer } from './action';
import { APIRoute, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data.js';
import { Reviews } from '../types/reviews.js';
import { toast } from 'react-toastify';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
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
      dispatch(updateSelectedOffer(data));
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      toast.warn('The selected offer was not found.');
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
      toast.warn('The reviews was not found.');
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
      toast.warn('The nerby offer was not found.');
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
      toast.warn('The favorites offers was not found.');
      return [];
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
    dispatch(fetchFavoritesAction());
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
  },
);
