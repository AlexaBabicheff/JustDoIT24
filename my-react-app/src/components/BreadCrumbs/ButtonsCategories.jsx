import React from "react";
import classes from "./ButtonsCategories.module.css";
import { NavLink } from "react-router-dom";

const ButtonsCategories = () => {
  return (
    <>
      <div className={classes.btns}>
        <div className={classes.btn_mainPage}>
          <button>
            <NavLink to="/">Main Page</NavLink>
          </button>
        </div>
        <div className={classes.line__MinePageToCategories}>
          <hr />
        </div>
        <div className={classes.btn_categories}>
          <button>
            <NavLink to="/categories-review">Categories</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonsCategories;
