import { Link } from 'react-router-dom';
import { selectCity, filterOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

type FilterProps = {
  cities: string[];
}

const Filter = ({ cities }: FilterProps): JSX.Element => {
  const selectedCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city) => (
            <li className="locations__item"
              key={city}
            >
              <Link className={selectedCity === city ?
                'locations__item-link tabs__item tabs__item--active' :
                'locations__item-link tabs__item'} to="/"
              onClick={() => {
                dispatch(selectCity(city));
                dispatch(filterOffers());
              }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Filter;
