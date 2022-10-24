import { SET_AUTH } from "../constants";

const initialState = {
    userLogged: false
};

const setUserAuth = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTH:
            return {
                userLogged: payload
            }
        default:
            return state;
    }
};

export default setUserAuth;
