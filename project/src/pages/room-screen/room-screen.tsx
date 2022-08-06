import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import ReviewList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import { Reviews } from '../../types/reviews';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { PlaceCardClass } from '../../const';
import { Offer } from '../../types/offers';
import { useLocation } from 'react-router-dom';

type RoomScreenProps = {
  reviews: Reviews,
}

const RoomScreen = ({ reviews }: RoomScreenProps): JSX.Element => {

  const location = useLocation();

  const urlId = Number(location.pathname.split('/').slice(-1));

  const { offersByCity } = useAppSelector((state) => state);

  const offer: Offer | undefined = offersByCity && offersByCity.find((offerByCity) => offerByCity.id === urlId);

  const offerNeighbourhood = offersByCity?.slice(0, 3);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer && offer.images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="  studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer && offer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer && offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer && offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer && offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer && offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer && offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer && offer.goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer && offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer && offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer && offer.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer && offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList
                  reviews={reviews}
                />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              selectedOffer={offer}
              offers={offerNeighbourhood}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={offerNeighbourhood}
                offersListClass={PlaceCardClass.NearPlacesCardListClass}
                offerClass={PlaceCardClass.NearPlacesCardClass}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RoomScreen;

