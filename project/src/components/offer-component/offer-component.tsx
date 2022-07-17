import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type OfferComponentProps = {
  offer: Offer
}

const ListingComponent = ({ offer }: OfferComponentProps): JSX.Element => {
  const maxRating = 5;
  const currentRating = `${Math.round(offer.rating) * 100 / maxRating}%`;
  return (
    <article className="cities__card place-card">
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer">
          <img className="place-card__image" src={offer.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={offer.isFavorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: currentRating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer">
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

export default ListingComponent;
