import { combineReducers } from 'redux';
import { storiesReducer } from './storiesReducer';

export const rootReducer = combineReducers({
  db: storiesReducer
});
