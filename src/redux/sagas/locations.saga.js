import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getLocations(action) {
  try {
    yield put({ type: "CLEAR_LOCATIONS" });

    const response = yield axios.get("/api/data");

    yield put({ type: "SET_LOCATIONs", payload: response.data });
  } catch (error) {
    console.error("ERROR setting locations:", err);
  }
}

function* locationsSaga() {
  yield takeLatest("GET_LOCATIONS", getLocations);
}

export default locationsSaga;
