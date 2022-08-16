import { useLocation } from 'react-router-dom';
import { useReviewForm } from '../../hooks/useReviewForm';
import RatingList from '../rating-list/rating-list';
import '../review-form/review-form.css';

const ReviewForm = (): JSX.Element => {

  const location = useLocation();

  const urlId = Number(location.pathname.split('/').slice(-1));

  const formContentDefault = {
    rating: 0,
    comment: '',
  };

  const [
    formData,
    formClassName,
    isButtonDisabled,
    isFormDisabled,
    formSubmitHandle,
    radioChangeHandle,
    textAreaChangeHandle,
    formChangeHandle] = useReviewForm(formContentDefault, urlId);

  return (
    <form
      className={formClassName}
      action='#'
      method='post'
      onChange={formChangeHandle}
      onSubmit={formSubmitHandle}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <RatingList
        currentRating={formData.rating}
        radioChangeHandle={radioChangeHandle}
        isFormDisabled={isFormDisabled}
      />
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={formData.comment}
        onChange={textAreaChangeHandle}
        disabled={isFormDisabled}
        required
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={isButtonDisabled}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
