import { useParams } from 'react-router-dom';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import { useReviewForm } from '../../hooks/useReviewForm';
import RatingList from '../rating-list/rating-list';
import '../review-form/review-form.css';

const ReviewForm = (): JSX.Element => {

  const { id } = useParams();
  const offerId = Number(id);

  const formContentDefault = {
    rating: 0,
    comment: '',
  };

  const [
    formData,
    formClassName,
    isFormDisabled,
    isFormValid,
    handleFormSubmit,
    handleRadioChange,
    handleTextAreaChange] = useReviewForm(formContentDefault, offerId);

  return (
    <form
      className={formClassName}
      action='#'
      method='post'
      onSubmit={handleFormSubmit}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <RatingList
        currentRating={formData.rating}
        radioChangeHandle={handleRadioChange}
        isFormDisabled={isFormDisabled}
      />
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={formData.comment}
        onChange={handleTextAreaChange}
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
        disabled={isFormDisabled}
        required
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={!isFormValid || isFormDisabled}>{isFormDisabled ? 'Submiting...' : 'Submit'}</button>
      </div>
    </form>
  );
};

export default ReviewForm;
