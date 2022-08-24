const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

const MIN_COMMENT_LENGTH = 50;

const MAX_COMMENT_LENGTH = 300;

const MAX_REVIEWS_COUNT = 10;

const MAX_PHOTO_COUNT = 6;

const MAX_RATING = 5;

const ImageSize = {
  BIG: {
    width: 260,
    height: 200
  },
  SMALL: {
    width: 150,
    height: 100
  }
} as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite'
}

const ClassNameCardType = {
  'places': {
    card: 'cities__card',
    list: 'cities__places-list',
    wrapper: 'cities__image-wrapper',
    info: ''
  },
  'near-places': {
    card: 'near-places__card',
    list: 'near-places__list',
    wrapper: 'near-places__image-wrapper',
    info: ''
  },
  'favorite-places': {
    card: 'favorites__card',
    list: 'favorites__list',
    wrapper: 'favorites__image-wrapper',
    info: 'favorites__card-info'
  }
} as const;

const SortingType = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}

const OfferType: { [char: string]: string } = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house': 'House',
  'hotel': 'Hotel',
} as const;

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const ratingValues =
  [
    {
      title: 'perfect',
      value: 5
    },
    {
      title: 'good',
      value: 4
    },
    {
      title: 'bad',
      value: 3
    },
    {
      title: 'badly',
      value: 2
    },
    {
      title: 'terribly',
      value: 1
    }
  ];

const passwordRegExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/);

export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  NameSpace,
  SortingType,
  OfferType,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  cities,
  ClassNameCardType,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  ratingValues,
  MAX_REVIEWS_COUNT,
  MAX_PHOTO_COUNT,
  MAX_RATING,
  passwordRegExp,
  ImageSize
};
