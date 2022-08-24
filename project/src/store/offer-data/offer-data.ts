import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferData } from '../../types/state';
import { updateSelectedOffer } from '../action';
import { fetchNearOffersAction, fetchReviewsAction, fetchSelectedOfferAction, fetchOffersAction, fetchFavoritesAction } from '../api-actions';

const initialState: OfferData = {
  offers: [],
  isDataLoaded: false,
  isServerError: false,
  reviews: [],
  nearOffers: [],
  favoritesOffers: []
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
        state.isServerError = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoaded = false;
        state.isServerError = true;
      })
      .addCase(fetchSelectedOfferAction.pending, (state, action) => {
        state.selectedOffer = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(updateSelectedOffer, (state, action) => {
        state.selectedOffer = action.payload;
      });
  }
});
