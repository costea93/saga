import { SET_REGISTERED_USER } from "../constants";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const register = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGISTERED_USER:
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        password: payload.password,
      };
    default:
      return state;
  }
};

export default register;
