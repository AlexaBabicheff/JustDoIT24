import React, { useState } from "react";
import greenHeart from "../../components/Navigation/HeaderImg/heart_green.png";
import whiteHeart from "../../components/Navigation/HeaderImg/heart_white.png";
import classes from "./IconLike.module.css"
const IconLike = ({ classes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <img
        // className={isLiked ? classes.likedProduct1 : classes.unlikedProduct1}
        src={isLiked ? greenHeart : whiteHeart}
        alt="favorites"
        onClick={handleLike}
      />
    </div>
  );
};

export default IconLike;  