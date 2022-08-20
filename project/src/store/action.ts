import { createAction } from '@reduxjs/toolkit';

const Action = {
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  UPDATE_SELECTED_ROUTE: 'UPDATE_SELECTED_ROUTE'
};

const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => (
  {
    payload: value,
  }));

const updateSelectedOffer = createAction(Action.UPDATE_SELECTED_ROUTE, (value) => (
  {
    payload: value,
  }));

export {
  redirectToRoute,
  updateSelectedOffer,
  Action
};
