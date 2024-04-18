import { combineReducers } from '@reduxjs/toolkit';
import products from './products';
import cartReducer from '../../Cart/cart.reducer';

const rootReducer = combineReducers({
    products,
    cart: cartReducer
});

export default rootReducer;