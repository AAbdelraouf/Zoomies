import {call, put, takeLatest} from 'redux-saga/effects';
import {
  dogListSagaAction_Success,
  dogListSagaAction_Error,
  DOGLIST,
} from './dogListActions';
import {dogListApi} from './dogListApi';

// Result of dogListSagaAction dispatched //
function* dogListSagaWorker() {
  try {
    const data = yield call(dogListApi);
    yield put(dogListSagaAction_Success(data));
  } catch (error) {
    yield put(dogListSagaAction_Error(error));
  }
}

export function* dogListSagaWatcher() {
  yield takeLatest(DOGLIST, dogListSagaWorker);
}
