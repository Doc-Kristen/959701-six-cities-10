import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortingType, cities } from '../../const';
import { OfferProcess } from '../../types/state';

const initialState: OfferProcess = {
  city: cities[0],
  sortingType: SortingType.Popular,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.city = action.payload;
    },
    selectDefaultSortyngType: (state, action) => {
      state.sortingType = action.payload;
    },
  },
});

export const { selectCity, selectDefaultSortyngType } = offerProcess.actions;
