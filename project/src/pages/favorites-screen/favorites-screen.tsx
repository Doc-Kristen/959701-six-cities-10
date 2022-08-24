import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import FavoriteOffersByCity from '../../components/favorite-offers-by-city/favorite-offers-by-city';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { useAppSelector } from '../../hooks';
import { getDataLoadedStatus, getFavoritesOffers } from '../../store/offer-data/selectors';
import LoadingScreen from '../../components/loading/loading';
import { Offers } from '../../types/offers';

const FavoritesScreen = (): JSX.Element => {

  const favoritesOffers = useAppSelector(getFavoritesOffers);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);

  const cities: {
    [city: string]: Offers,
  } = {};
  favoritesOffers && favoritesOffers.forEach((offer) => {
    const city = offer.city.name;
    if (!cities[city]) {
      cities[city] = [offer];
    } else {
      cities[city].push(offer);
    }
  });

  const citiesOffers: [string, Offers][] = Object.entries(cities);

  let keyValue = 0;

  if (
    isDataLoaded ||
    !favoritesOffers
  ) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesOffers && favoritesOffers.length > 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  citiesOffers.map((offersByCity) => {
                    keyValue++;
                    return (
                      <FavoriteOffersByCity key={keyValue} offers={offersByCity} />
                    );
                  })
                }
              </ul>
            </section> : <FavoritesEmpty />}

        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

export default FavoritesScreen;
