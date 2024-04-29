import React, { useState, useEffect } from "react";
import Navigation from "../../Navigation/Navigation";
import Sale from "../../Sale/Sale";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import SaleProducts from "../../SaleProducts/SaleProducts";
import classes from "./AllSales.module.css";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../BreadCrumbs/ButtonsAllSales"
const AllSales = () => (
  <div className={classes.pageBody}>
    {/* <div className={style}> */}
    <Navigation />
    {/* <ButtonsAllSales /> */}
    <BreadCrumbs />
      <SaleProducts />

      {/* <div className="contact_componentSale"> */}
        {/* <Contact /> */}
      {/* </div>
      <div className="map_component"> */}
        {/* <Map /> */}
      {/* </div> */}
    {/* </div> */}
  </div>
);

export default AllSales;
