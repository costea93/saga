import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import news from "./news";
import errors from "./errors";
import loader from "./loader";
import login from "./login";
import register from "./register";

export const history = createBrowserHistory();

const reducer = combineReducers({
  news,
  errors,
  loader,
  login,
  register,
  router: connectRouter(history),
});

export default reducer;
