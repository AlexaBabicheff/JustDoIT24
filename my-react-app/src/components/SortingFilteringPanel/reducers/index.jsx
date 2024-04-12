import { combineReducers } from '@reduxjs/toolkit';
import products from './products';
import cartReducer from '../../Cart/cart.reducer';

export default combineReducers({
    products,
    cart: cartReducer
});