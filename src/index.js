import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import allReducers from './reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices'
import logger from 'redux-logger';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import SomeComponent from './SomeComponent';

const SomeComponent = lazy(() => import('./SomeComponent'));


// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
if (process.env.NODE_ENV !== "development")
  console.log = () => { };

const store = configureStore({
  reducer,

  middleware: (getDefaultMiddleware) => {
    return (process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware())
  },
  devTools: process.env.NODE_ENV !== 'production'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>loading..</div>} >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="ex" element={<SomeComponent />} />
            {/* <Route path="invoices" element={<Invoices />} /> */}
            {/* </Route> */}
          </Routes>
        </Suspense>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
