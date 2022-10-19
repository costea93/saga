import { SET_SIGNUP_STATUS } from "../constants";

const initialState = {
  isSigned: false,
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIGNUP_STATUS:
      return {
        ...state,
        isSigned: payload,
      };
    default:
      return state;
  }
};

export default login;
