import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers | undefined,
  offerMouseOverHandle?: (id: number | undefined) => void,
  offersListClass: string,
  offerClass: string,
}

const OffersList = ({ offers, offerMouseOverHandle, offersListClass, offerClass }: OffersListProps): JSX.Element => (

  <div className={offersListClass}>
    {offers && offers.map((offer) => (
      <OfferCard key={offer.id}
        offer={offer}
        offerClass={offerClass}
        offerMouseOverHandle={offerMouseOverHandle}
      />
    ))}
  </div>
);

export default OffersList;
