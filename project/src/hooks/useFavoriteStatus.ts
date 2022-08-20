import { api } from '../store';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFavoritesAction, fetchOffersAction } from '../store/api-actions';
import { Offer } from '../types/offers';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { redirectToRoute, updateSelectedOffer } from '../store/action';
import { toast } from 'react-toastify';

type ResultUseFavoriteStatus = [
  changeStatusFavoriteAction: () => void,
];

export const useFavoriteStatus = (offer: Offer | undefined): ResultUseFavoriteStatus => {

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const statusNumber = offer && offer.isFavorite ? 0 : 1;

  const nameFailedAction = statusNumber === 1 ? 'create' : 'remove';

  const buttonClickHandle = async () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return dispatch(redirectToRoute(AppRoute.Login));
    }
    try {
      const { data } = await api.post(`${APIRoute.Favorites}/${offer && offer.id}/${statusNumber}`, statusNumber);
      dispatch(fetchOffersAction());
      dispatch(fetchFavoritesAction());
      dispatch(updateSelectedOffer(data));
    } catch {
      toast.warn(`Failed to ${nameFailedAction} a bookmark. Try again later.`);
    }
  };

  return [buttonClickHandle];
};
