import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferData } from '../../types/state';
import { fetchNearOffersAction, fetchOffersAction, fetchReviewsAction, fetchSelectedOfferAction } from '../api-actions';

const initialState: OfferData = {
  offers: [],
  isDataLoaded: true,
  selectedOffer: undefined,
  reviews: [],
  nearOffers: []
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
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchSelectedOfferAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSelectedOfferAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});
