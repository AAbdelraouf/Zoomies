import {createAction} from '@reduxjs/toolkit';

export const DOGLIST = 'SAGA/dogList_type';
export const DOGLIST_SUCCESS = 'SAGA/dogList_type_success';
export const DOGLIST_ERROR = 'SAGA/dogList_type_error';

export const dogListSagaAction = createAction(DOGLIST);
export const dogListSagaAction_Success = createAction(DOGLIST_SUCCESS);
export const dogListSagaAction_Error = createAction(DOGLIST_ERROR);
