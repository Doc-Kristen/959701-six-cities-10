import Map from '../../components/map/map';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import OffersList from '../../components/offers-list/offers-list';
import { Offers, Offer, City } from '../../types/offers';
import { useState } from 'react';

type MainScreenProps = {
  offers: Offers
  city: City;
}

const MainScreen = ({ offers, city }: MainScreenProps): JSX.Element => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const handleOfferMouseOver = (id: number) => {
    const currentOffer = offers.find((offer) => offer.id === id);
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
          <div className="cities__places-container container">
            <OffersList
              offers={offers}
              offerMouseOverHandle={handleOfferMouseOver}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  offers={offers}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
