import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Navigate } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from './pages/home/home';
import LatestNews from './pages/latest-news/latest-news';
import PopularNews from './pages/popular-news/popular-news';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { history } from './redux/reducers/index';

import RouteGuard from "./components/RouteGuard";
import Login from './pages/login';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <RouteGuard path='/latest-news'>
              <LatestNews />
            </RouteGuard>
            <RouteGuard path='/popular-news'>
              <PopularNews />
            </RouteGuard>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
