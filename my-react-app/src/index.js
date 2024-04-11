import './index.css';
import App from "./App.jsx";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import initialState from './components/SortingFilteringPanel/store/initialState.jsx';
import checkboxReducer from './components/SortingFilteringPanel/reducers/checkboxReducer.jsx';



const store = configureStore({
  reducer: checkboxReducer,
  preloadedState: initialState
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);





