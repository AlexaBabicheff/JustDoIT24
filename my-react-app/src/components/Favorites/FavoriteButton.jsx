import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToFavorites, removeItemFromFavorites } from "./FavoriteReducer";
import iconHeart1 from './../Navigation/HeaderImg/heart1.svg'; 
import iconHeart2 from './../Navigation/HeaderImg/heart2.svg'; 

const FavoriteButton = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  const isItemInFavorites = favorites.some(favorite => favorite.id === item.id);

  const [isButtonClicked, setIsButtonClicked] = useState(isItemInFavorites);

  const handleClick = () => {
    if (isButtonClicked) {
      dispatch(removeItemFromFavorites(item.id));
    } else {
      dispatch(addItemToFavorites(item));
    }
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <button onClick={handleClick}>
      <img src={isButtonClicked ? {iconHeart1} : {iconHeart2}} alt="favorites" />
    </button>
  );
};

export default FavoriteButton;
