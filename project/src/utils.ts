import { Offers } from './types/offers';
import dayjs from 'dayjs';

const getOffersByCity = (offers: Offers | undefined, cityName: string) => offers && offers.filter((offer) => offer.city.name === cityName);

const getCityData = (offers: Offers | undefined, cityName: string) => {
  if (offers) {
    const offersByCity = offers.filter((offer) => offer.city.name === cityName);
    return offersByCity.length && offersByCity[0].city;
  }
};

const humanizeHeaderDueDate = (dueDate : string) => dueDate ? dayjs(dueDate).format('MMMM YYYY') : '';

export { getOffersByCity, getCityData, humanizeHeaderDueDate };
