import { createAction } from '@reduxjs/toolkit';

const Action = {
  SET_DATA_LOADED_STATUS: 'SET_DATA_LOADED_STATUS',
  SELECT_CITY: 'SELECT_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SET_ERROR: 'SET_ERROR',
  SORT_OFFERS: 'SORT_OFFERS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE'
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

const setError = createAction(Action.SET_ERROR, (value) => (
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

export {
  selectCity,
  filterOffers,
  loadOffers,
  requireAuthorization,
  setError,
  setDataLoadedStatus,
  sortOffers,
  redirectToRoute };
