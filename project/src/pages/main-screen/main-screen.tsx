import Map from '../../components/map/map';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offers';
import { useState } from 'react';
import { cities } from '../../const';
import { useAppSelector } from '../../hooks';
import Sorting from '../../components/sorting/sorting';

const MainScreen = (): JSX.Element => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  const { offersByCity, city, offers } = useAppSelector((state) => state);

  const handleOfferMouseOver = (id: number) => {
    const currentOffer = offers && offers.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Filter
            cities={cities}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity && offersByCity.length} places to stay in {city}</b>
              <Sorting offers={offersByCity} />
              <OffersList
                offers={offersByCity}
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
