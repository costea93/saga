import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_SIGNUP_STATUS,
  SET_REGISTERED_USER,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setSignUpStatus = (payload) => ({
  type: SET_SIGNUP_STATUS,
  payload,
});
export const setRegisteredUser = (payload) => ({
  type: SET_REGISTERED_USER,
  payload,
});
