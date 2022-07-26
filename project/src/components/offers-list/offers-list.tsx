import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import Sorting from '../sorting/sorting';

type OffersListProps = {
  offers: Offers,
  offerMouseOverHandle: (id: number) => void;
}

const OffersList = ({ offers, offerMouseOverHandle }: OffersListProps): JSX.Element => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in Amsterdam</b>
    <Sorting offers={offers} />
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard key={offer.id}
            offer={offer}
            offerMouseOverHandle={offerMouseOverHandle}
          />
        ))
      }
    </div>
  </section>
);

export default OffersList;
