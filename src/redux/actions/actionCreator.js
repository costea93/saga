import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_USER_LOGIN,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setUserLoginState = (payload) => ({
  type: SET_USER_LOGIN,
  payload,
});
