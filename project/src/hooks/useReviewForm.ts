import { useState } from 'react';
import { api } from '../store';
import { toast } from 'react-toastify';
import { APIRoute } from '../const';
import { useAppDispatch } from '../hooks';
import { setReviews } from '../store/action';
import { UserReview } from '../types/reviews';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../const';

type ResultUseReviewForm = [
    UserReview,
    string,
    boolean,
    boolean,
    (evt: React.MouseEvent<HTMLFormElement>) => void,
    (evt: React.ChangeEvent<HTMLInputElement>) => void,
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => void,
    (evt: React.MouseEvent<HTMLFormElement>) => void];

export const useReviewForm = (formContentDefault: UserReview, urlId: number): ResultUseReviewForm => {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(formContentDefault);

  const [isButtonDisabled, setButtonIsDisabled] = useState(true);

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [formClassName, setFormClassName] = useState('reviews__form form');

  const sendReview = async () => {
    try {
      setFormClassName('reviews__form form');
      setButtonIsDisabled(true);
      setIsFormDisabled(true);
      const { data } = await api.post(`${APIRoute.Reviews}/${urlId}`,
        formData
      );
      dispatch(setReviews(data));
      setFormData(formContentDefault);
      setButtonIsDisabled(false);
      setIsFormDisabled(false);
    } catch {
      setFormClassName('reviews__form form elem');
      toast.warn('The comment has not been sent. Please, try again later.');
      setButtonIsDisabled(false);
      setIsFormDisabled(false);
    }
  };

  const formSubmitHandle = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendReview();
  };

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

  return [formData, formClassName, isButtonDisabled, isFormDisabled, formSubmitHandle, radioChangeHandle, textAreaChangeHandle, formChangeHandle];
};
