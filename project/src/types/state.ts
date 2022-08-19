import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offer, Offers } from './offers';
import { Reviews } from './reviews';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData | null,
}

export type OfferData = {
  offers: Offers,
  isDataLoaded: boolean,
  selectedOffer: Offer | undefined,
  reviews: Reviews,
  nearOffers: Offers
};

export type OfferProcess = {
  city: string,
  sortingType: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
