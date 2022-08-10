import { createAction } from '@reduxjs/toolkit';

const Action = {
  SET_DATA_LOADED_STATUS: 'SET_DATA_LOADED_STATUS',
  SELECT_CITY: 'SELECT_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SORT_OFFERS: 'SORT_OFFERS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  GET_USER_DATA: 'GET_USER_DATA'
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

const getUserData = createAction(Action.GET_USER_DATA, (value) => (
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
  getUserData
};
