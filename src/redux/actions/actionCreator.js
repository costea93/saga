import {
  SET_LATEST_NEWS,
  SET_LOGIN_USER,
  SET_POPULAR_NEWS,
  SET_AUTH_USER
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setLoginUser = (payload) => ({
  type: SET_LOGIN_USER,
  payload,
});

export const setAuthUser= (payload) => ({
  type: SET_AUTH_USER,
  payload,
});
