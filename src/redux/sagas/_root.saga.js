import { all } from "redux-saga/effects";
import locationsSaga from "./locations.saga";

export default function* rootSaga() {
  yield all([locationsSaga()]);
}
