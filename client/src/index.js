import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import "flowbite-react";
import thunk from "redux-thunk"; 
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import {Provider} from "react-redux"
import allReducers from "./reducers"
import App from "./App";

const enhancer = compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
  allReducers, enhancer
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </Provider>
);

console.log(React.version);
