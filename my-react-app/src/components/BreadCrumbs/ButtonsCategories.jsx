import React from "react";
import classes from "./ButtonsCategories.module.css";
import { Link } from "react-router-dom";

const ButtonsCategories = () => {
  return (
    <>
      <div className={classes.btns}>
        <div className={classes.btn_mainPage}>
          <button2>
            <Link to="/">Main Page</Link>
          </button2>
        </div>
        <div className={classes.line__MinePageToCategories}>
          <hr />
        </div>
        <div className={classes.btn_categories}>
          <button2>
            <Link to="/categories-review">Categories</Link>
          </button2>
        </div>
      </div>
    </>
  );
};

export default ButtonsCategories;
