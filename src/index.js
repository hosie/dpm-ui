import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { fetchSamples } from './actions'
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware
  )
)
store.dispatch(fetchSamples()).then(() => console.log(store.getState()))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
