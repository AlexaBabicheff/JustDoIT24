import React from "react";
import classes from "./ButtonsAllSales.module.css";
import { Link } from "react-router-dom";

const ButtonsAllSales = () => {
  return (
    <>
      <div className={classes.btns}>
        <div className={classes.btn_mainPage}>
          <button>
            <Link to="/">Main Page</Link>
          </button>
        </div>
        <div className={classes.line__MinePageToCategories}>
          <hr />
        </div>
        <div className={classes.btn_categories}>
          <button>
            <Link to="/categories-review">Categories</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonsAllSales
