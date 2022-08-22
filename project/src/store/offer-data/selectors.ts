import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Offers, Offer } from '../../types/offers';
import { createSelector } from '@reduxjs/toolkit';
import { getOffersByCity } from '../../utils';
import { getSelectedCity } from '../offer-process/selectors';
import { Reviews } from '../../types/reviews';

export const getOffers = (state: State): Offers | undefined => state[NameSpace.Data].offers;

export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const filterOffers = createSelector(
  [getOffers, getSelectedCity],
  (offers, selectedCity) => getOffersByCity(offers, selectedCity)
);

export const getSelectedOffer = (state: State): Offer | undefined => state[NameSpace.Data].selectedOffer;

export const getReviews = (state: State): Reviews | undefined => state[NameSpace.Data].reviews;

export const getNearOffers = (state: State): Offers => state[NameSpace.Data].nearOffers;

export const getFavoritesOffers = (state: State): Offers => state[NameSpace.Data].favoritesOffers;
