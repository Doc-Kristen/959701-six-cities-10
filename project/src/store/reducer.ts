import { createReducer } from '@reduxjs/toolkit';
import { selectCity, filterOffers, loadOffers, requireAuthorization, setError, setDataLoadedStatus, sortOffers } from './action';
import { getOffersByCity, sortPriceDown, sortPriceUp, sortTopRatedFirst } from '../utils';
import { SortingType } from '../const';
import { Offers } from '../types/offers';

const DEFAULT_CITY = 'Paris';

type InitalState = {
  city: string,
  offers: Offers | undefined,
  offersByCity: Offers | undefined,
  // authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean,
  sortingType: string,
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  offersByCity: [],
  // authorizationStatus: AuthorizationStatus.Auth,
  error: null,
  isDataLoaded: true,
  sortingType: SortingType.Popular,
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
    })
    .addCase(sortOffers, (state, action) => {
      state.sortingType = action.payload;
      switch (state.sortingType) {
        case SortingType.Popular:
          state.offersByCity = getOffersByCity(state.offers, state.city);
          break;
        case SortingType.LowToHigh:
          state.offersByCity = state.offersByCity && state.offersByCity.sort(sortPriceUp);
          break;
        case SortingType.HighToLow:
          state.offersByCity = state.offersByCity && state.offersByCity.sort(sortPriceDown);
          break;
        case SortingType.TopRatedFirst:
          state.offersByCity = state.offersByCity && state.offersByCity.sort(sortTopRatedFirst);
          break;
        default:
          state.offersByCity = getOffersByCity(state.offers, state.city);
      }
    });
});

export { reducer };
