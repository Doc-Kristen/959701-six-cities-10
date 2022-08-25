import { Link } from 'react-router-dom';
import { ClassNameCard, OfferType, ImageSize } from '../../const';
import { ClassNameCardType, Offer } from '../../types/offers';
import { useFavoriteStatus } from '../../hooks/useFavoriteStatus';
import { calcRating } from '../../utils';

type OfferCardProps = {
  offer: Offer,
  cardType: ClassNameCardType;
  offerMouseOverHandle?: (id: number | undefined) => void;
  isSmall?: boolean;
}

const OfferCard = ({ offer, cardType, offerMouseOverHandle: onOfferMouseOverHandle, isSmall }: OfferCardProps): JSX.Element => {

  const currentRating = calcRating(offer.rating);

  const imageSize = isSmall
    ? ImageSize.SMALL
    : ImageSize.BIG;

  const [handleClickButton] = useFavoriteStatus(offer);

  return (
    <article
      className={`${ClassNameCard[cardType].Card} place-card`}
      onMouseOver={() => onOfferMouseOverHandle && onOfferMouseOverHandle(offer.id)}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className={`${ClassNameCard[cardType].Wrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={`${ClassNameCard[cardType].Info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={offer.isFavorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
            onClick={handleClickButton}
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
        <p className="place-card__type">{OfferType[offer.type]}</p>
      </div>
    </article>
  );
};

export default OfferCard;
