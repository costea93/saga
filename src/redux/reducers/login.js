import { USER_LOGIN } from "../constants";

const initialState = {
    isLoggedIn: false,
};

const login = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                isLoggedIn: payload,
            };
        default:
            return state;
    }
};

export default login;
