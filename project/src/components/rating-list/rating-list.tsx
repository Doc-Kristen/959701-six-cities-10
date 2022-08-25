import RatingItem from '../../components/rating-item/rating-item';
import { ratingValues } from '../../const';

type RatingListProps = {
  currentRating: number,
  radioChangeHandle: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isFormDisabled: boolean,
}

const RatingList = ({ currentRating, radioChangeHandle, isFormDisabled }: RatingListProps): JSX.Element => (
  <div className='reviews__rating-form form__rating'>
    {
      ratingValues.map((rating) => (
        <RatingItem key={rating.Value}
          valueStar={rating.Value}
          currentRating={currentRating}
          radioChangeHandle={radioChangeHandle}
          isFormDisabled={isFormDisabled}
          titleRating={rating.Title}
        />
      ))
    }
  </div>
);

export default RatingList;
