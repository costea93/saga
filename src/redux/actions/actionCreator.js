import {
  SET_AUTH,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS, USER_LOGIN,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload
})

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload
})