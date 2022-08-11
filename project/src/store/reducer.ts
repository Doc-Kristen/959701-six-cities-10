import { createReducer } from '@reduxjs/toolkit';
import { selectCity, filterOffers, loadOffers, requireAuthorization, setDataLoadedStatus, sortOffers, getUserData } from './action';
import { getOffersByCity, sortPriceDown, sortPriceUp, sortTopRatedFirst } from '../utils';
import { SortingType, AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';
import { UserData } from '../types/user-data';

const DEFAULT_CITY = 'Paris';

type InitalState = {
  city: string,
  offers: Offers | undefined,
  offersByCity: Offers | undefined,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  sortingType: string,
  userData: UserData | undefined,
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  offersByCity: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: true,
  sortingType: SortingType.Popular,
  userData: undefined,
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
      state.authorizationStatus = action.payload;
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
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
