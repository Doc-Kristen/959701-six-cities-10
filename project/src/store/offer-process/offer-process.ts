import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortingType } from '../../const';
import { OfferProcess } from '../../types/state';

const DEFAULT_CITY = 'Paris';

const initialState: OfferProcess = {
  city: DEFAULT_CITY,
  sortingType: SortingType.Popular,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.city = action.payload;
    },
    filterOffers: (state, action) => {
      state.sortingType = action.payload;
    },
  },
});

export const { selectCity, filterOffers } = offerProcess.actions;
