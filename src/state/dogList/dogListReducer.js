import {
  dogListSagaAction,
  dogListSagaAction_Success,
  dogListSagaAction_Error,
} from './dogListActions';
import {createReducer} from '@reduxjs/toolkit';

const dogListInitialState = {
  data: null,
  loading: false,
  error: null,
};

export default createReducer(dogListInitialState, {
  [dogListSagaAction.type]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [dogListSagaAction_Success.type]: (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
  }),
  [dogListSagaAction_Error.type]: (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }),
});
