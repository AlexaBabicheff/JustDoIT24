import { configureStore } from '@reduxjs/toolkit';
import BasketReducer from './../components/BasketComponent/BasketReducer';
// import { serverUrl } from '../Config';


const store = configureStore({
    reducer:{
        basket: BasketReducer,
    },
    devTools: true,
});

export default store;