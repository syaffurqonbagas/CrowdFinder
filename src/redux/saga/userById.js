import axios from "axios";
import { GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_BEGIN, GET_USER_BY_ID_FAIL } from "../action/type";
import { GET_USER_DETAIL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";


function* getuserById(action) {
    const { id } = action;
    try {
        const res = yield axios.get(`https://crowdfinder.gabatch13.my.id/api/user/${id}`);
        yield console.log(res.data.data)
        yield put({
            type: GET_USER_BY_ID_SUCCESS,
            payload: res.data.data
        });
    }
    catch (error) {
        yield put({
            type: GET_USER_BY_ID_FAIL,
            error: error
        })
    }
}

export function* watchGetUserById() {
    yield takeEvery(GET_USER_BY_ID_BEGIN, getuserById)
}
