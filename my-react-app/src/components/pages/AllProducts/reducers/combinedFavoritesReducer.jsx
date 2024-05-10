import { combineReducers } from 'redux';
import FavoriteReducer from '../../../../components/Favorites/FavoriteReducer';
import favoritesReducer from './favoritesReducer';

const combinedFavoritesReducer = combineReducers({
    favoriteFromCard: FavoriteReducer,
    favoriteFromAllProducts: favoritesReducer,
});

export default combinedFavoritesReducer;