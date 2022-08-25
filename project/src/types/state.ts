import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offer, Offers } from './offers';
import { Reviews } from './reviews';
import { UserData } from './user-data';

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData | null,
}

type OfferData = {
  offers: Offers,
  isDataLoaded: boolean,
  selectedOffer?: Offer,
  isServerError: boolean,
  reviews: Reviews,
  nearOffers: Offers,
  favoritesOffers: Offers
};

type OfferProcess = {
  city: string,
  sortingType: string,
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { UserProcess, OfferData, OfferProcess, State, AppDispatch };
