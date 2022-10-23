import { SET_AUTH_USER } from "../constants";

const initialState = {
  auth: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_USER: 

      return {
        auth: payload,
      };
    default: return state;
  }
};

export default auth;
