import { Offer, Offers } from './types/offers';
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

export {
  getOffersByCity,
  getCityData,
  humanizeHeaderDueDate,
  sortPriceDown,
  sortPriceUp,
  sortTopRatedFirst
};
