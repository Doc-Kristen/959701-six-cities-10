import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers | undefined,
  offerMouseOverHandle: (id: number) => void;
}

const OffersList = ({ offers, offerMouseOverHandle }: OffersListProps): JSX.Element => (

  <div className="cities__places-list places__list tabs__content">
    {offers && offers.map((offer) => (
      <OfferCard key={offer.id}
        offer={offer}
        offerMouseOverHandle={offerMouseOverHandle}
      />
    ))}
  </div>
);

export default OffersList;
