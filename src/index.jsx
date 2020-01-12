import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/app';
import flatsReducer from './reducers/flat_reducer';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  flats: flatsReducer
});

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  root
);
