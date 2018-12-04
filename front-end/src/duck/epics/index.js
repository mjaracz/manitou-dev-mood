import { combineEpics } from 'redux-observable';
import  fetchEpic  from './fetchEpic';

export const rootEpic = combineEpics(
  fetchEpic
);