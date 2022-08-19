import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import ReviewList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { AuthorizationStatus } from '../../const';
import { getNearOffers, getReviews, getSelectedOffer } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useFavoriteStatus } from '../../hooks/useFavoriteStatus';

const RoomScreen = (): JSX.Element => {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const selectedOffer = useAppSelector(getSelectedOffer);
  const [buttonClickHandle] = useFavoriteStatus(selectedOffer);
  const reviews = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearOffers);
  const favoriteButtonStyle = selectedOffer?.isFavorite ? '#4481c3' : 'none';
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {selectedOffer && selectedOffer.images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="  studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {selectedOffer && selectedOffer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {selectedOffer && selectedOffer.title}
                </h1>
                <button
                  className={
                    selectedOffer?.isFavorite ?
                      'property__bookmark-button property__bookmark-button--active button' :
                      'property__bookmark-button button'
                  }
                  type='button'
                  onClick={buttonClickHandle}
                >
                  <svg
                    style={{ fill: favoriteButtonStyle }} className='property__bookmark-icon' width='31' height='33'
                  >
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
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
                  {selectedOffer && selectedOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {selectedOffer && selectedOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {selectedOffer && selectedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{selectedOffer && selectedOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    selectedOffer && selectedOffer.goods.map((good) => (
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
                    <img className="property__avatar user__avatar" src={selectedOffer && selectedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {selectedOffer && selectedOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {selectedOffer && selectedOffer.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {selectedOffer && selectedOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews && reviews.length}</span>
                </h2>
                <ReviewList
                  reviews={reviews}
                />
                {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              selectedOffer={selectedOffer}
              offers={selectedOffer && [...nearOffers, selectedOffer]}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearOffers}
              cardType={'near-places'}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default RoomScreen;
