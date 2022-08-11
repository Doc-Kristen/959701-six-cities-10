import { createAction } from '@reduxjs/toolkit';

const Action = {
  SET_DATA_LOADED_STATUS: 'SET_DATA_LOADED_STATUS',
  SELECT_CITY: 'SELECT_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SORT_OFFERS: 'SORT_OFFERS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  SET_SELECTED_OFFER: 'SET_SELECTED_OFFER',
  SET_USER_DATA: 'SET_USER_DATA',
  SET_REVIEWS: 'SET_REVIEWS',
  SET_NEAR_OFFERS: 'SET_NEAR_OFFERS',
};

const selectCity = createAction(Action.SELECT_CITY, (value) => (
  {
    payload: value,
  }
));

const filterOffers = createAction(Action.FILTER_OFFERS);

const loadOffers = createAction(Action.LOAD_OFFERS, (value) => (
  {
    payload: value,
  }));

const requireAuthorization = createAction(Action.REQUIRE_AUTHORIZATION, (value) => (
  {
    payload: value,
  }));

const setDataLoadedStatus = createAction(Action.SET_DATA_LOADED_STATUS, (value) => (
  {
    payload: value,
  }));

const sortOffers = createAction(Action.SORT_OFFERS, (value) => (
  {
    payload: value,
  }));

const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => (
  {
    payload: value,
  }));

const setUserData = createAction(Action.SET_USER_DATA, (value) => (
  {
    payload: value,
  }));

const setSelectedOffer = createAction(Action.SET_SELECTED_OFFER, (value) => (
  {
    payload: value,
  }));

const setReviews = createAction(Action.SET_REVIEWS, (value) => (
  {
    payload: value,
  }));

const setNearOffers = createAction(Action.SET_NEAR_OFFERS, (value) => (
  {
    payload: value,
  }));

export {
  Action,
  selectCity,
  filterOffers,
  loadOffers,
  requireAuthorization,
  setDataLoadedStatus,
  sortOffers,
  redirectToRoute,
  setUserData,
  setSelectedOffer,
  setReviews,
  setNearOffers
};
