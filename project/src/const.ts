const TIMEOUT_SHOW_ERROR = 2000;

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

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

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export { AppRoute, APIRoute, AuthorizationStatus, URL_MARKER_CURRENT, URL_MARKER_DEFAULT, TIMEOUT_SHOW_ERROR, cities, PlaceCardClass };
