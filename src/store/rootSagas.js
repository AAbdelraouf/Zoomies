import {all, fork} from 'redux-saga/effects';
import * as dogListSaga from '../state/dogList/dogListSagas';

export default function* rootSagas() {
  yield all([...Object.values(dogListSaga)].map(fork));
}
