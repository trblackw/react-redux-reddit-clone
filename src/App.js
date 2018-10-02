import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Post from './components/Post'
const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/discover" component={Browse} />
            <Route path="/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
