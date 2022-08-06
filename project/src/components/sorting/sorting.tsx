import { SortingType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../store/action';
import { useState } from 'react';

const Sorting = (): JSX.Element => {

  const [IsSortingListOpen, setIsSortingListOpen] = useState<boolean>(
    false
  );

  const { sortingType } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleSortingClick = () => {
    setIsSortingListOpen(() => !IsSortingListOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        onClick={() => handleSortingClick()}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          IsSortingListOpen ?
            Object.values(SortingType).map((type) => (
              <li
                className={type === sortingType ?
                  'places__option places__option--active' :
                  'places__option'}
                tabIndex={0}
                key={type}
                onClick={() => {
                  dispatch(sortOffers(type));
                  handleSortingClick();
                }}
              >
                {type}
              </li>
            )) : null
        }
      </ul>
    </form>
  );
};

export default Sorting;


