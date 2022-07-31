import { createReducer } from '@reduxjs/toolkit';
import { selectCity, filterOffers } from './action';
import { offers } from '../mocks/offers';
import { getOffersByCity } from '../utils';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersByCity(offers, DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.offers = getOffersByCity(offers, state.city);
    });
});

export { reducer };
