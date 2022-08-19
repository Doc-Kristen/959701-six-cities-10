
type RatingItemProps = {
    valueStar: number,
    currentRating: number,
    radioChangeHandle: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    isFormDisabled: boolean
    titleRating: string
}

const RatingItem = ({ valueStar, currentRating, radioChangeHandle, isFormDisabled, titleRating }: RatingItemProps): JSX.Element => (
  <>
    <input className='form__rating-input visually-hidden'
      name='rating'
      value={valueStar}
      id={`${valueStar}-stars`}
      type='radio'
      checked={currentRating === valueStar}
      onChange={radioChangeHandle}
      disabled={isFormDisabled}
    />
    <label htmlFor={`${valueStar}-stars`} className='reviews__rating-label form__rating-label' title={titleRating}>
      <svg className='form__star-image' width='37' height='33'>
        <use xlinkHref='#icon-star'></use>
      </svg>
    </label>
  </>
);

export default RatingItem;
