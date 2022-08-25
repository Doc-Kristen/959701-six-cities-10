import { api } from '../store';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '.';
import { checkAuthAction, fetchFavoritesAction, fetchOffersAction } from '../store/api-actions';
import { Offer } from '../types/offers';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { updateSelectedOffer } from '../store/action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type ResultUseFavoriteStatus = [
  changeStatusFavoriteAction: () => void,
];

export const useFavoriteStatus = (offer: Offer | undefined): ResultUseFavoriteStatus => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const statusNumber = offer && offer.isFavorite ? 0 : 1;

  const nameFailedAction = statusNumber === 1 ? 'create' : 'remove';

  const handleButtonClick = async () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return navigate(AppRoute.Login);
    }
    try {
      const { data } = await api.post(`${APIRoute.Favorites}/${offer && offer.id}/${statusNumber}`, statusNumber);
      dispatch(fetchOffersAction());
      dispatch(fetchFavoritesAction());
      dispatch(updateSelectedOffer(data));
      dispatch(checkAuthAction());
    } catch {
      toast.warn(`Failed to ${nameFailedAction} a bookmark. Try again later.`);
    }
  };

  return [handleButtonClick];
};
