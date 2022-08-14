import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import allReducers from './reducers';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices'
import logger from 'redux-logger';

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
if (process.env.NODE_ENV !== "development")
    console.log = () => {};

const store =  configureStore({
  reducer,
  
  middleware: (getDefaultMiddleware) => {
    return  (process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware())},
  devTools: process.env.NODE_ENV !== 'production'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
