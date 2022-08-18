import { createAction } from '@reduxjs/toolkit';

const Action = {
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => (
  {
    payload: value,
  }));

export {
  redirectToRoute,
  Action
};
