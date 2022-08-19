import { Link } from 'react-router-dom';
import { ClassNameCardType } from '../../const';
import { ClassNameCard, Offer } from '../../types/offers';
import { useFavoriteStatus } from '../../hooks/useFavoriteStatus';
import { UseFavoriteScreen } from '../../hooks/useFavoriteScreen';

type OfferCardProps = {
  offer: Offer,
  cardType: ClassNameCard;
  offerMouseOverHandle?: (id: number | undefined) => void;
}

const OfferCard = ({ offer, cardType, offerMouseOverHandle }: OfferCardProps): JSX.Element => {

  const maxRating = 5;
  const currentRating = `${Math.round(offer.rating) * 100 / maxRating}%`;

  const [buttonClickHandle] = useFavoriteStatus(offer);
  const [offerCardClickHandle] = UseFavoriteScreen(offer.id);

  return (
    <article
      className={`${ClassNameCardType[cardType].card} place-card`}
      onMouseOver={() => offerMouseOverHandle && offerMouseOverHandle(offer.id)}
      onClick={offerCardClickHandle}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
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
            onClick={buttonClickHandle}
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
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

export default OfferCard;
