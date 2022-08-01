import { createReducer } from '@reduxjs/toolkit';
import { selectCity, filterOffers, loadOffers, requireAuthorization, setError, setDataLoadedStatus } from './action';
import { getOffersByCity } from '../utils';
// import { AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';

const DEFAULT_CITY = 'Paris';

type InitalState = {
  city: string,
  offers: Offers | undefined,
  offersByCity: Offers | undefined,
  // authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean,
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  offersByCity: [],
  // authorizationStatus: AuthorizationStatus.Auth,
  error: null,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = getOffersByCity(action.payload, DEFAULT_CITY);
    })
    .addCase(filterOffers, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.city);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export { reducer };
