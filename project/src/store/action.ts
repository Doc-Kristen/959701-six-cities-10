import { createAction } from '@reduxjs/toolkit';

const Action = {
  SELECT_CITY: 'SELECT_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS'
};

const selectCity = createAction(Action.SELECT_CITY, (value) => (
  {
    payload: value,
  }
));

const filterOffers = createAction(Action.FILTER_OFFERS);

export { selectCity, filterOffers };
