import { ClassNameCardType } from '../../const';
import { ClassNameCard, Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers | undefined,
  offerMouseOverHandle?: (id: number | undefined) => void,
  cardType: ClassNameCard;
}

const OffersList = ({ offers, offerMouseOverHandle, cardType }: OffersListProps): JSX.Element => (

  <div className={`${ClassNameCardType[cardType].list} places__list tabs__content`}>
    {offers && offers.map((offer) => (
      <OfferCard key={offer.id}
        offer={offer}
        cardType={cardType}
        offerMouseOverHandle={offerMouseOverHandle}
      />
    ))}
  </div>
);

export default OffersList;
