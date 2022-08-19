import Map from '../../components/map/map';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offers';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Sorting from '../../components/sorting/sorting';
import { filterOffers } from '../../store/offer-data/selectors';
import { getSelectedCity } from '../../store/offer-process/selectors';
import MainEmpty from '../../components/main-empty/main-empty';

const MainScreen = (): JSX.Element => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  const city = useAppSelector(getSelectedCity);
  const offersByCity = useAppSelector(filterOffers);

  const handleOfferMouseOver = (id: number | undefined) => {
    const currentOffer = offersByCity && offersByCity.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Filter />
        </div>
        <div className="cities">
          {offersByCity && offersByCity?.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity && offersByCity.length} places to stay in {city}</b>
                <Sorting />
                <OffersList
                  offers={offersByCity}
                  cardType={'places'}
                  offerMouseOverHandle={handleOfferMouseOver}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offersByCity}
                    selectedOffer={selectedOffer}
                  />
                </section>
              </div>
            </div> :
            <MainEmpty />}
        </div>

      </main>
    </div>
  );
};

export default MainScreen;
