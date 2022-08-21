import { Offer, Offers } from './types/offers';
import { Review } from './types/reviews';
import { MAX_RATING, SortingType } from './const';
import dayjs from 'dayjs';

// Фильтрация офферов

const getOffersByCity = (offers: Offers | undefined, cityName: string) => offers && offers.filter((offer) => offer.city.name === cityName);

const getCityData = (offers: Offers | undefined, cityName: string) => {
  if (offers) {
    const offersByCity = offers.filter((offer) => offer.city.name === cityName);
    return offersByCity.length && offersByCity[0].city;
  }
};

// Изменение формата даты

const humanizeHeaderDueDate = (dueDate: string) => dueDate ? dayjs(dueDate).format('MMMM YYYY') : '';

// Сортировка

const getWeightForPriceDown = (priceA: number, priceB: number) => priceB - priceA;
const getWeightForPriceUp = (priceA: number, priceB: number) => priceA - priceB;
const getWeightForTopRatedFirst = (ratedA: number, ratedB: number) => ratedB - ratedA;

const sortPriceDown = (offerA: Offer, offerB: Offer) => getWeightForPriceDown(offerA.price, offerB.price);
const sortPriceUp = (offerA: Offer, offerB: Offer) => getWeightForPriceUp(offerA.price, offerB.price);
const sortTopRatedFirst = (offerA: Offer, offerB: Offer) => getWeightForTopRatedFirst(offerA.rating, offerB.rating);
const sortReviewsDayDown = (reviewA: Review, reviewB: Review) => dayjs(reviewB.date).diff(dayjs(reviewA.date));

const sortOffers = (offers: Offers | undefined, sortingType: string) => {
  switch (sortingType) {
    case SortingType.Popular:
      return offers;
    case SortingType.LowToHigh:
      return offers && offers.slice().sort(sortPriceUp);
    case SortingType.HighToLow:
      return offers && offers.slice().sort(sortPriceDown);
    case SortingType.TopRatedFirst:
      return offers && offers.slice().sort(sortTopRatedFirst);
    default:
      return offers;
  }
};

// Расчет количества закрашенных звезд для рейтинга

const calcRating = (offerRating : number) => `${Math.round(offerRating) * 100 / MAX_RATING}%`;

export {
  getOffersByCity,
  getCityData,
  humanizeHeaderDueDate,
  sortPriceDown,
  sortPriceUp,
  sortTopRatedFirst,
  sortReviewsDayDown,
  sortOffers,
  calcRating
};
