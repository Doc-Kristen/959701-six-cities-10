import { Offers } from './types/offers';

const getOffersByCity = (offersArray: Offers, selectedCity: string) => {
  const result = offersArray.filter((offer) => offer.city.name === selectedCity);
  return result;
};

const getCityData = (offers: Offers, city: string) => {
  const offersByCity = getOffersByCity(offers, city);
  return offersByCity[0].city;
};

export { getOffersByCity, getCityData };
