import React from 'react';
import classes from "./ButtonsCategories.module.css";
import {Link } from "react-router-dom";


const ButtonsCategories = () => {
  return (
      <>
      hallo
      <div className={classes.line}>
        <hr />
      </div>
     
        <div className={classes.main_page}>
          <button6>
            <Link to="/">Main Page</Link>
          </button6>
        </div>
        <div className={classes.categories_page}>
          <button6>Categories</button6>
        </div>
      {/* </div> */}
      </>
  );
};

export default ButtonsCategories;