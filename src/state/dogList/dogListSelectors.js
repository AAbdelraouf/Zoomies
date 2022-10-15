import {createSelector} from 'reselect';
import {values as _values} from 'lodash';

export const selectDogList = state => state.zoomies;
export const selectDogListData = createSelector(selectDogList, list =>
  _values(list?.data),
);
export const selectDogListLoading = createSelector(
  selectDogList,
  list => list.loading,
);
