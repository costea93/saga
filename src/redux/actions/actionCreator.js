import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_USER_AUTH,
  SET_AUTH,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setUserAuth = (payload) => ({
  type: SET_USER_AUTH,
  payload
})

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload
})