import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";


import photoUser from "./assets/img/photoUser.png";
import PostForm from "./components/PostClassOrCommunity/PostForm/PostForm";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar photoUser={photoUser} />
        <PostForm/>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
