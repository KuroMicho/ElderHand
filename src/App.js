import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/userSlice";
import { auth } from "./firebase";
import { Redirect, Route, Switch } from "react-router";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import Clases from "./views/Clases";
import Comunidades from "./views/Comunidades";
import Contenido from "./views/Contenido";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // logout
        dispatch(logout());
      }
    });

    return unsuscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/clases">
          {user ? <Clases /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/comunidades">
          {user ? <Comunidades /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/comunidades/arte">
          <Contenido />
        </Route>
        <Route exact path="/register">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
