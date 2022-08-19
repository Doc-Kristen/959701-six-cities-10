import { useAppDispatch } from '.';
import { fetchNearOffersAction, fetchReviewsAction, fetchSelectedOfferAction } from '../store/api-actions';

type ResultUseFavoriteScreen = [
    changeStatusFavoriteAction: () => void,
];

export const UseFavoriteScreen = (offerId: number): ResultUseFavoriteScreen => {

  const dispatch = useAppDispatch();

  const offerCardClickHandle = () => {
    dispatch(fetchSelectedOfferAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchNearOffersAction(offerId));
  };

  return [offerCardClickHandle];
};
