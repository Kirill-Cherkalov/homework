import React, { Component } from 'react';
import './App.css';
import { Grid } from '../Grid/Grid';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { mainReducer } from '../../reducers/mainReducer'
// import { Example } from '../Example/Example'

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
          {/* <Example /> */}
      </div>
    </Provider>
    );
  }
}

//  function requre() {
//   return fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=5', {
//     method: "GET",
//     credentials: 'same-origin',
//   });
// }
// requre()
//  .then((info) => {
//   return info.json(); 
//    console.log('clock', info)
//  })
//  .then((data) => {
//    console.log('data', data)
//  })

export default App;
