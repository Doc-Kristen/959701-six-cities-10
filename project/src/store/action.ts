import { createAction } from '@reduxjs/toolkit';

const Action = {
  SET_DATA_LOADED_STATUS: 'SET_DATA_LOADED_STATUS',
  SELECT_CITY: 'SELECT_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SET_ERROR: 'SET_ERROR'
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

export { selectCity, filterOffers, loadOffers, requireAuthorization, setError, setDataLoadedStatus };
