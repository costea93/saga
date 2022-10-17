import {SET_AUTH} from "../constants";

const initialState = {
    auth: false
};

const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_AUTH:
            return {
                auth: payload
            }
        default:
            return state;
    }
};

export default auth;
