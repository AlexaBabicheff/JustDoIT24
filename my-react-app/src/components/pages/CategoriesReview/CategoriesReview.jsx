import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from "./CategoriesReview.module.css";
import ButtonsCategories from "../../ButtonsCategories/ButtonsCategories";
// import Mind_map from "../../Min_map/Mind_map";

const CategoriesReview = () => {
  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
      <Navigation />
      {/* <ButtonsCategories /> */}
      <div>
      <Categories showAllCategories={true} />
      </div>
      <div className={classes.contact_map}>
      <Contact />
      <Map />
      </div>
    </div>
    </div>
  );
};

export default CategoriesReview;