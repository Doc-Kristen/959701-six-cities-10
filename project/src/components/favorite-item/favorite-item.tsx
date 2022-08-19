import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useFavoriteStatus } from '../../hooks/useFavoriteStatus';
import { fetchNearOffersAction, fetchReviewsAction, fetchSelectedOfferAction } from '../../store/api-actions';
import { Offer } from '../../types/offers';

type FavoriteItemProps = {
  offer: Offer
}

const FavoriteItem = ({ offer }: FavoriteItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const maxRating = 5;
  const currentRating = `${Math.round(offer.rating) * 100 / maxRating}%`;
  const [buttonClickHandle] = useFavoriteStatus(offer);
  const offerClickHandle = (offerId: number) => {
    dispatch(fetchSelectedOfferAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchNearOffersAction(offerId));
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`/offer/${offer.id}`}>
            <span>{offer.city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <article
          className="favorites__card place-card"
          onClick={(evt) => {
            evt.preventDefault();
            offerClickHandle(offer.id);
          }}
        >
          {offer.isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> : null}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${offer.id}`}>
              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt={offer.title} />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className={offer.isFavorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
                type="button"
                onClick={buttonClickHandle}
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: currentRating }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${offer.id}`}>
                {offer.title}
              </Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      </div>
    </li>
  );
};

export default FavoriteItem;
