import { SortingType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState } from 'react';
import { getSortingType } from '../../store/offer-process/selectors';
import { selectDefaultSortyngType } from '../../store/offer-process/offer-process';

const Sorting = (): JSX.Element => {

  const [IsSortingListOpen, setIsSortingListOpen] = useState<boolean>(
    false
  );

  const sortingType = useAppSelector(getSortingType);

  const dispatch = useAppDispatch();

  const handleSortingClick = () => setIsSortingListOpen(!IsSortingListOpen);

  const styleSortingIcon = IsSortingListOpen ? 'rotate(180deg) translateY(50%)' : 'rotate(0deg) translateY(-50%)';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type"
        onClick={() => handleSortingClick()}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}
          style={{
            transform: styleSortingIcon
          }}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          IsSortingListOpen ?
            Object.values(SortingType).map((sortingTypeItem) => (
              <li
                className={sortingTypeItem === sortingType ?
                  'places__option places__option--active' :
                  'places__option'}
                tabIndex={0}
                key={sortingTypeItem}
                onClick={() => {
                  dispatch(selectDefaultSortyngType(sortingTypeItem));
                  handleSortingClick();
                }}
              >
                {sortingTypeItem}
              </li>
            )) : null
        }
      </ul>
    </form>
  );
};

export default Sorting;
