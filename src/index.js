import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import NavOptions from "./components/NavOptions/NavOptions";
import Post from "./components/PostClassOrCommunity/Post";

import photoUser from "./assets/img/photoUser.png";
import post1 from "./assets/img/post1.jpg";
import { PostContainer } from "./components/PostClassOrCommunity/style";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar photoUser={photoUser} />
      <NavOptions />
      <PostContainer>
        <Post
          title="Post Class #1"
          desc="Esta es una clase que trata de cosas de la vida porque asi es la vida cuando es la vida de la vida vamos a por todas"
          image={post1}
        /> <Post
          title="Post Class #1"
          desc="Esta es una clase que trata de cosas de la vida porque asi es la vida cuando es la vida de la vida vamos a por todas"
          image={post1}
        /> <Post
          title="Post Class #1"
          desc="Esta es una clase que trata de cosas de la vida porque asi es la vida cuando es la vida de la vida vamos a por todas"
          image={post1}
        />
        <Post
          title="Post Class #1"
          desc="Esta es una clase que trata de cosas de la vida porque asi es la vida cuando es la vida de la vida vamos a por todas"
          image={post1}
        />
        <Post
          title="Post Class #1"
          desc="Esta es una clase que trata de cosas de la vida porque asi es la vida cuando es la vida de la vida vamos a por todas"
          image={post1}
        />
      </PostContainer>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
