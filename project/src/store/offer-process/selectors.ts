import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getSelectedCity = (state: State): string => state[NameSpace.Offer].city;
export const getSortingType = (state: State): string => state[NameSpace.Offer].sortingType;
