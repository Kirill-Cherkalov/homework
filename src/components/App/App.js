import React, { Component } from 'react';
import './App.css';
import { Grid } from '../Grid/Grid';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { mainReducer } from '../../reducers/mainReducer';

function middleware({dispatch, getState}) {
  return next => action => {
      if (typeof action === 'function') {
          return action(dispatch, getState);
      }
      return next(action);
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  mainReducer,
  undefined,
  composeEnhancers(
      applyMiddleware(middleware)
  )
);

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className='App'>
          <Grid />
      </div>
    </Provider>
    );
  }
}

export default App;
