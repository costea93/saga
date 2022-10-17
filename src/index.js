import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from './pages/home/home';
import LatestNews from './pages/latest-news/latest-news';
import PopularNews from './pages/popular-news/popular-news';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { history } from './redux/reducers/index';
import Preauth from "./pages/preauth/Preauth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Page401 from "./pages/401/Page401";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
             <ProtectedRoute path='/latest-news'>
                <LatestNews />
             </ProtectedRoute>
            <ProtectedRoute path='/popular-news'>
                <PopularNews />
             </ProtectedRoute>
            <Route path="/preauth">
              <Preauth />
            </Route>
              <Route path="/401">
                  <Page401 />
              </Route>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
