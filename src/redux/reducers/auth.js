import { SET_AUTH } from "../constants";

const initialState = {
    isLogged: false
};

const userAuth = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTH:
            return {
                isLogged: payload
            }
        default:
            return state;
    }
};

export default userAuth;
