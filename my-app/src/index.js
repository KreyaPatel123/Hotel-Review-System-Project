import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './reducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import { configureStore } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer:rootReducer,
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
      <Toaster/>
    </BrowserRouter>
  </Provider>
)

