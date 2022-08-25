import { useState } from 'react';
import { api } from '../store';
import { toast } from 'react-toastify';
import { APIRoute } from '../const';
import { useAppDispatch } from '../hooks';
import { fetchReviewsAction } from '../store/api-actions';
import { UserReview } from '../types/reviews';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../const';

type ResultUseReviewForm = [
  UserReview,
  string,
  boolean,
  boolean,
  (evt: React.MouseEvent<HTMLFormElement>) => void,
  (evt: React.ChangeEvent<HTMLInputElement>) => void,
  (evt: React.ChangeEvent<HTMLTextAreaElement>) => void];

export const useReviewForm = (formContentDefault: UserReview, urlId: number): ResultUseReviewForm => {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(formContentDefault);

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const isFormValid = formData.rating > 0 && formData.comment.length >= MIN_COMMENT_LENGTH && formData.comment.length <= MAX_COMMENT_LENGTH;

  const [formClassName, setFormClassName] = useState('reviews__form form');

  const sendReview = async () => {
    try {
      setFormClassName('reviews__form form');
      setIsFormDisabled(true);
      await api.post(`${APIRoute.Reviews}/${urlId}`,
        formData
      );
      dispatch(fetchReviewsAction(urlId));
      setFormData(formContentDefault);
      setIsFormDisabled(false);
    } catch {
      setFormClassName('reviews__form form elem');
      toast.warn('The comment has not been sent. Please, try again later.');
      setIsFormDisabled(false);
    }
  };

  const handleFormSubmit = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendReview();
  };

  const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(evt.target.value) });
  };

  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: evt.target.value });
  };

  return [formData, formClassName, isFormDisabled, isFormValid, handleFormSubmit, handleRadioChange, handleTextAreaChange];
};
