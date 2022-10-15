import {combineReducers} from 'redux';
import {default as dogListReducer} from '../state/dogList/dogListReducer';

export const rootReducers = combineReducers({
  zoomies: dogListReducer,
});
