import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedCity } from '../../store/offer-process/selectors';
import {selectCity, filterOffers} from '../../store/offer-process/offer-process';
import { cities, SortingType } from '../../const';

const Filter = (): JSX.Element => {
  const selectedCity = useAppSelector(getSelectedCity);

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
                dispatch(filterOffers(SortingType.Popular));
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
