import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'App';
import reportWebVitals from './reportWebVitals';
import {Provider, RootStateOrAny} from 'react-redux';
import {store} from "./store";

ReactDOM.render(
  <Provider store={{store} as RootStateOrAny}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
