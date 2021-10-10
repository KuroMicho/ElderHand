import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

import CardForm from './components/LoginResgister/CardForm'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CardForm placeHolder="Ingrese su nombre" labelText="ingrese su nombre en el campo que se le indica."></CardForm>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
