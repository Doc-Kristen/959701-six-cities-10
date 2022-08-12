import { createReducer } from '@reduxjs/toolkit';
import { selectCity, filterOffers, loadOffers, requireAuthorization, setDataLoadedStatus, sortOffers, setUserData, setSelectedOffer, setReviews, setNearOffers } from './action';
import { getOffersByCity, sortPriceDown, sortPriceUp, sortTopRatedFirst } from '../utils';
import { SortingType, AuthorizationStatus } from '../const';
import { Offer, Offers } from '../types/offers';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews';

const DEFAULT_CITY = 'Paris';

type InitalState = {
  city: string,
  offers: Offers | undefined,
  offersByCity: Offers | undefined,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  sortingType: string,
  userData: UserData | null,
  selectedOffer: Offer | undefined,
  reviews: Reviews,
  nearOffers: Offers,
}

const initialState: InitalState = {
  city: DEFAULT_CITY,
  offers: [],
  offersByCity: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: true,
  sortingType: SortingType.Popular,
  userData: null,
  selectedOffer: undefined,
  reviews: [],
  nearOffers: [],
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
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    });
});

export { reducer };
