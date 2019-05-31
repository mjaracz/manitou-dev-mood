import {FETCH_ERROR, FETCH_STORIES, GET_STORIES} from "../actions/storiesActions";

import {call, takeEvery, put} from "redux-saga/effects";
import {get} from "../api";

function* sagaStories() {
    const url = 'http://localhost:3000/api/stories/all';
    try {
        const stories = yield call(get, url);
        yield put({type: FETCH_STORIES, payload: stories})
    }
    catch(e) {
        console.error("storiesSaga error: " + e);
        yield put({type: FETCH_ERROR, payload: e})
    }
}

function* storiesGenerator() {
    yield takeEvery(GET_STORIES, sagaStories)
}

export default storiesGenerator;
