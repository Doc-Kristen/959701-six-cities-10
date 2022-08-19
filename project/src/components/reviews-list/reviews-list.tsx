import ReviewItem from '../review-item/review-item';
import { Reviews } from '../../types/reviews';

type ReviewsListProps = {
  reviews: Reviews | undefined,
}

const ReviewList = ({ reviews }: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews && reviews.map((review) => (
      <ReviewItem
        key={review.id}
        review={review}
      />
    ))}
  </ul>
);

export default ReviewList;
