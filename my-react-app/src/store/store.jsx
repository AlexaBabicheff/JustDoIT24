import { configureStore } from '@reduxjs/toolkit';
import BasketReducer from './../components/BasketComponent/BasketReducer';
import FavoriteReducer from '../components/Favorites/FavoriteReducer';
// import { serverUrl } from '../Config';


const store = configureStore({
    reducer:{
        basket: BasketReducer,
        favorites: FavoriteReducer,
    },
    devTools: true,
});

export default store;