const mockReviews = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Wed Aug 03 2022 22:49:23 GMT+0300 (Москва, стандартное время)',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 1,
      'isPro': false,
      'name': 'Anna'
    },
  },
  {
    'comment': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'date': 'Wed May 15 2022 22:49:23 GMT+0300 (Москва, стандартное время)',
    'id': 2,
    'rating': 3,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Victor'
    }
  }
];

const mockOffer =
{
  'bedrooms': 5,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10
    },
    'name': 'Amsterdam'
  },
  'description': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'goods': [
    'Heating', 'Washing machine', 'Coffee machine'
  ],
  'host': {
    'avatarUrl': 'img/avatar-max.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Max'
  },
  'id': 1,
  'images': [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
  ],
  'isFavorite': true,
  'isPremium': true,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'maxAdults': 3,
  'previewImage': 'img/1.png',
  'price': 199,
  'rating': 4.8,
  'title': 'Lorem ipsum dolor sit amet',
  'type': 'apartment'
};

export { mockReviews, mockOffer };
