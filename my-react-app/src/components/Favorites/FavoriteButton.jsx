import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { addItemToFavorites, removeItemFromFavorites } from "./FavoriteReducer";
import iconHeart1 from './../Navigation/HeaderImg/heart1.svg'; 
import iconHeart2 from './../Navigation/HeaderImg/heart2.svg'; 

const FavoriteButton = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  console.log('favorites', favorites);
  const isItemInFavorites = (favorites.find(favorite => favorite.id === id)) ? true : false;

  console.log('isItemInFavorites', isItemInFavorites);

//  const [isButtonClicked, setIsButtonClicked] = useState(isItemInFavorites);

  const handleClick = () => {
    console.log(id);
    if (isItemInFavorites) {
      dispatch(removeItemFromFavorites(id));
    } else {
      const item = { id };
      dispatch(addItemToFavorites(item));
    }
//    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <button onClick={handleClick}>
      <img src={isItemInFavorites ? {iconHeart1} : {iconHeart2}} alt="favorites" />
    </button>
  );
};

export default FavoriteButton;
