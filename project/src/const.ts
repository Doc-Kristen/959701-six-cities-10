const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/hotels',
  Review = '/comments',
  Login = '/login',
  Logout = '/logout',
}

const ClassNameCardType = {
  'places': {
    card: 'cities__card',
    list: 'cities__places-list',
  },
  'near-places': {
    card: 'near-places__card',
    list: 'near-places__list',
  }
} as const;

enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  cities,
  SortingType,
  ClassNameCardType
};
