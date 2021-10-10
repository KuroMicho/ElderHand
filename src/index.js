import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import NavOptions from "./components/NavOptions/NavOptions";

import avatar from "./assets/img/photoUser.png";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar avatar={avatar} />
        <NavOptions />
        <App />
      </Router>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
