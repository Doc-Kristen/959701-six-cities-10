import { Link } from 'react-router-dom';
import { AppRoute, SortingType } from '../../const';
import { useAppDispatch } from '../../hooks';
import { selectCity, selectDefaultSortyngType } from '../../store/offer-process/offer-process';
import { Offers } from '../../types/offers';
import OfferFavoriteCard from '../offer-favorite-card/offer-favorite-card';

type FavoriteItemProps = {
  offers: [string, Offers]
}

const FavoriteOffersByCity = ({ offers }: FavoriteItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link"
            to={AppRoute.Main}
            onClick={() => {
              dispatch(selectCity(offers[0]));
              dispatch(selectDefaultSortyngType(SortingType.Popular));
            }}
          >
            <span>{offers[0]}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers[1].map((offer) => (
          <OfferFavoriteCard key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

export default FavoriteOffersByCity;
