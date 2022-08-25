const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

const MIN_COMMENT_LENGTH = 50;

const MAX_COMMENT_LENGTH = 300;

const MAX_REVIEWS_COUNT = 10;

const MAX_PHOTO_COUNT = 6;

const MAX_RATING = 5;

const MAX_NEAR_OFFERS = 3;

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

const ClassNameCard = {
  'places': {
    Card: 'cities__card',
    List: 'cities__places-list',
    Wrapper: 'cities__image-wrapper',
    Info: ''
  },
  'near-places': {
    Card: 'near-places__card',
    List: 'near-places__list',
    Wrapper: 'near-places__image-wrapper',
    Info: ''
  },
  'favorite-places': {
    Card: 'favorites__card',
    List: 'favorites__list',
    Wrapper: 'favorites__image-wrapper',
    Info: 'favorites__card-info'
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

const RatingValues =
  [
    {
      Title: 'perfect',
      Value: 5
    },
    {
      Title: 'good',
      Value: 4
    },
    {
      Title: 'not bad',
      Value: 3
    },
    {
      Title: 'badly',
      Value: 2
    },
    {
      Title: 'terribly',
      Value: 1
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
  ClassNameCard,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  RatingValues as ratingValues,
  MAX_REVIEWS_COUNT,
  MAX_PHOTO_COUNT,
  MAX_RATING,
  MAX_NEAR_OFFERS,
  passwordRegExp,
  ImageSize
};
