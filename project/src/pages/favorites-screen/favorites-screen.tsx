import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { Offers } from '../../types/offers';

type FavoriteScreenComponentProps = {
  offers: Offers | undefined,
};

const FavoritesScreen = ({ offers }: FavoriteScreenComponentProps): JSX.Element => (
  <div className="page">
    <Header />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {offers && offers.length > 0 ?
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                offers.map((offer) => (
                  <FavoriteItem key={offer.id}
                    offer={offer}
                  />
                ))
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

export default FavoritesScreen;
