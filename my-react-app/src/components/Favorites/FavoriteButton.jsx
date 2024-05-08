import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToFavorites, removeItemFromFavorites } from "./FavoriteReducer";
import iconHeart1 from "./../Navigation/HeaderImg/heart_white.png";
import iconHeart2 from "./../Navigation/HeaderImg/heart_green.png";

const FavoriteButton = () => {
  const [count, setCount] = useState(0); // Инициализируем счетчик понравившихся товаров

  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isItemInFavorites = favorites.some((favorite) => favorite.id === id);

  const updateFavoriteCount = () => {
    const count = favorites.length; // Получаем количество понравившихся товаров
    setCount(count); // Обновляем счетчик
  };

  useEffect(() => {
    updateFavoriteCount(); // Вызываем функцию для обновления счетчика при загрузке компонента
  }, [favorites]); // Отслеживаем изменения в избранных товарах

  const handleClick = () => {
    if (isItemInFavorites) {
      dispatch(removeItemFromFavorites(id));
    } else {
      const item = { id };
      dispatch(addItemToFavorites(item));
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={isItemInFavorites ? iconHeart2 : iconHeart1} alt="favorites" />
      </button>
      <p>Количество понравившихся товаров: {count}</p>
    </div>
  );
};

export default FavoriteButton;
