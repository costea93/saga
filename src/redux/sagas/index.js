import { put, call, takeLatest, select, all } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import {
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  SET_LOADING_DATA,
  SET_SIGNUP_STATUS,
  SET_REGISTERED_USER,
} from "../constants";
import {
  setLatestNews,
  setPopularNews,
  setSignUpStatus,
  setRegisteredUser,
} from "../actions/actionCreator";
import { getLatestNews, getPopularNews } from "../../api/index";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits));
  } catch {
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: "Error fetching latest news",
    });
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch {
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: "Error fetching popular news",
    });
  }
}

export function* handleRegister({ payload }) {
  const localUser = yield JSON.parse(localStorage.getItem("user"));
  if (localUser) {
    yield alert("You are already registered");
  } else {
    yield localStorage.setItem("user", JSON.stringify(payload));
  }
}

export function* handleSignIn({ payload }) {
  yield localStorage.setItem("isSigned", JSON.stringify(payload));
}

export function* watchNewsSaga() {
  yield put({ type: SET_LOADING_DATA, payload: true });
  const path = yield select(({ router }) => router.location.pathname);

  if (path === "/popular-news") {
    yield call(handlePopularNews);
  }
  if (path === "/latest-news") {
    yield call(handleLatestNews);
  }
  yield put({ type: SET_LOADING_DATA, payload: false });
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOCATION_CHANGE, watchNewsSaga),
    takeLatest(SET_REGISTERED_USER, handleRegister),
    takeLatest(SET_SIGNUP_STATUS, handleSignIn),
  ]);
}
