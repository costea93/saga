import { SET_USER_LOGIN } from "../constants";

const initialState = {
  userLogin: false,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        userLogin: payload,
      };

    default:
      return state;
  }
};

export default user;
