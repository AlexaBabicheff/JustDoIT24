import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './../components/ThemeSwitcher/reducers/ui';
import productsReducer from './../components/ThemeSwitcher/reducers/products';
import BasketReducer from './../components/BasketComponent/BasketReducer';
import FavoriteReducer from '../components/Favorites/FavoriteReducer';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        products: productsReducer,
        basket: BasketReducer,
        favorites: FavoriteReducer,
    },
    devTools: true,
});

export default store;