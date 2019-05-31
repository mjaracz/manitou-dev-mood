import {all} from "redux-saga/effects";
import storiesGenerator from "./storiesSaga";

function* rootSaga() {
    yield all([
        storiesGenerator()
    ])
}

export default rootSaga;
