import {
    SET_LATEST_NEWS,
    SET_POPULAR_NEWS,
    USER_AUTHENTIFICATE,
} from "../constants";

export const setLatestNews = (payload) => ({
    type: SET_LATEST_NEWS,
    payload,
});

export const setPopularNews = (payload) => ({
    type: SET_POPULAR_NEWS,
    payload,
});

export const setAuthentification = (payload) => ({
    type: USER_AUTHENTIFICATE,
    payload,
});
