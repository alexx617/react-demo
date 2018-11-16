import { fork, all } from 'redux-saga/effects';
import getDogSaga from './getDogSaga';

export default function* rootSaga() {
    yield all([
        fork(getDogSaga),
    ]);
}