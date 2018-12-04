import { Observable } from "rxjs";
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import { ajax } from 'rxjs/observable/dom/ajax'


import { 
  FETCH_STORY,
  fetchStorySuccess,
  fetchStoryFailure
} from "../actions/dbActions";

const url = '/api/story/all'

const fetchEpic = action$ => 
  action$
    .ofType(FETCH_STORY)
    .switchMap(() => {
      return ajax
        .getJSON(url)
        .map(results => results.data)
        .map(story => story.map(item => ({
          id: item.id,
          username: item.username,
          title: item.title,
          body: item.body
        })))
    })
    .map(story => fetchStorySuccess(story))
    .catch(err => Observable.of(fetchStoryFailure(err.message)))


export default fetchEpic;