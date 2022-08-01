import { Offers } from './types/offers';

const getOffersByCity = (offers: Offers | undefined, cityName: string) => offers && offers.filter((offer) => offer.city.name === cityName);

const getCityData = (offers: Offers | undefined, cityName: string) => {
  if (offers) {
    const offersByCity = offers.filter((offer) => offer.city.name === cityName);
    return offersByCity.length && offersByCity[0].city;
  }
};
export { getOffersByCity, getCityData };
