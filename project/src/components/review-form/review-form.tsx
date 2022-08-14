import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useLocation } from 'react-router-dom';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, APIRoute } from '../../const';
import { api } from '../../store';
import { setReviews } from '../../store/action';

const ReviewForm = (): JSX.Element => {

  const location = useLocation();

  const dispatch = useAppDispatch();

  const urlId = Number(location.pathname.split('/').slice(-1));

  const formContentDefault = {
    rating: 0,
    comment: '',
  };

  const [formData, setFormData] = useState(formContentDefault);

  const [isButtonDisabled, setButtonIsDisabled] = useState(true);

  const [isTextAreaDisabled, setIsFormDisabled] = useState(false);

  const radioChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(evt.target.value) });
  };

  const textAreaChangeHandle = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: evt.target.value });
  };

  const formChangeHandle = () => {
    if (formData.rating > 0 && formData.comment.length >= MIN_COMMENT_LENGTH && formData.comment.length <= MAX_COMMENT_LENGTH) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  };

  const sendReview = async () => {
    try {
      setButtonIsDisabled(true);
      setIsFormDisabled(true);
      const { data } = await api.post(`${APIRoute.Reviews}/${urlId}`,
        formData
      );
      dispatch(setReviews(data));
      setFormData(formContentDefault);
    } catch {
      setButtonIsDisabled(false);
      setIsFormDisabled(false);
    }
  };

  const formSubmitHandle = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendReview();
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onChange={formChangeHandle}
      onSubmit={formSubmitHandle}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
          checked={formData.rating === 5}
          onChange={radioChangeHandle}
          disabled={isTextAreaDisabled}
        />
        <label htmlFor='5-stars' className='reviews__rating-label form__rating-label' title='perfect'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
          checked={formData.rating === 4}
          onChange={radioChangeHandle}
          disabled={isTextAreaDisabled}
        />
        <label htmlFor='4-stars' className='reviews__rating-label form__rating-label' title='good'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
          checked={formData.rating === 3}
          onChange={radioChangeHandle}
          disabled={isTextAreaDisabled}
        />
        <label htmlFor='3-stars' className='reviews__rating-label form__rating-label' title='not bad'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
          checked={formData.rating === 2}
          onChange={radioChangeHandle}
          disabled={isTextAreaDisabled}
        />
        <label htmlFor='2-stars' className='reviews__rating-label form__rating-label' title='badly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
          checked={formData.rating === 1}
          onChange={radioChangeHandle}
          disabled={isTextAreaDisabled}
        />
        <label htmlFor='1-star' className='reviews__rating-label form__rating-label' title='terribly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={formData.comment}
        onChange={textAreaChangeHandle}
        disabled={isTextAreaDisabled}
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
