import { ClassNameCard } from '../../const';
import { ClassNameCardType, Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
import { getSortingType } from '../../store/offer-process/selectors';
import { sortOffers } from '../../utils';

type OffersListProps = {
  offers: Offers | undefined,
  offerMouseOverHandle?: (id: number | undefined) => void,
  cardType: ClassNameCardType;
}

const OffersList = ({ offers, offerMouseOverHandle, cardType }: OffersListProps): JSX.Element => {

  const sortingType = useAppSelector(getSortingType);
  const sortedOffers = sortOffers(offers, sortingType);

  return (

    <div className={`${ClassNameCard[cardType].List} places__list tabs__content`}>
      {sortedOffers && sortedOffers.map((offer) => (
        <OfferCard key={offer.id}
          offer={offer}
          cardType={cardType}
          offerMouseOverHandle={offerMouseOverHandle}
        />
      ))}
    </div>
  );
};

export default OffersList;
