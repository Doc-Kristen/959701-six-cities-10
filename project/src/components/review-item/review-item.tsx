// import { Link } from 'react-router-dom';
import { Review } from '../../types/reviews';
import { humanizeHeaderDueDate } from '../../utils';
// import { AppRoute } from '../../const';

type ReviewItemProps = {
  review: Review,
}

const ReviewItem = ({ review }: ReviewItemProps): JSX.Element => {
  const maxRating = 5;
  const currentRating = `${Math.round(review.rating) * 100 / maxRating}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: currentRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{humanizeHeaderDueDate(review.date)}</time>
      </div>
    </li>
  );
};

export default ReviewItem;
