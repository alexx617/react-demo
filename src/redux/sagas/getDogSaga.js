import {
    CUTEIMG,
    CUTEIMG_SUCCESS
} from "../actions/actions_type";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

//Request
function fetchPhoto() {
    return axios({
        method: "get",
        url: `https://dog.ceo/api/breeds/image/random`
    });
}

export default function* watchSaga() {
    yield takeLatest(CUTEIMG, workerSaga)
}

function* workerSaga(action) {
    try{
        const res = yield call(fetchPhoto)
        const photo = res.data.message;
        yield put({type:CUTEIMG_SUCCESS,url:photo})
    }catch(err){
        console.log(err);
    }
}

// function* workerSaga() {
//     try {
//         const response = yield call(fetchPhoto);
//         const photo = response.data;
//         yield put({ type: API_SUCCESS_PHOTO, payload: photo });
//     } catch (error) {
//         yield put({
//             type: API_FAILURE_PHOTO,
//             payload: {
//                 code: error.response.status,
//                 message: error.response.statusText
//             }
//         });
//     }
// }

// export default function* watcherSagaPhoto() {
//     yield takeLatest(API_REQUEST_PHOTO, workerSaga);
// }

/**
 * De Redux saga
 * takeEvery: escucha la accion y ejecuta el creador de acciones
 */
