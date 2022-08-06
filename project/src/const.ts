const TIMEOUT_SHOW_ERROR = 2000;

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

enum PlaceCardClass {
    PlaceCardClass = 'cities__card place-card',
    NearPlacesCardClass = 'near-places__card place-card',
    PlacesCardListClass = 'cities__places-list places__list tabs__content',
    NearPlacesCardListClass = 'near-places__list places__list',
}

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
  TIMEOUT_SHOW_ERROR,
  cities,
  PlaceCardClass,
  SortingType
};
