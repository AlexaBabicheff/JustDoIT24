import React, { useState, useEffect } from "react";
import Navigation from "../../Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import SaleProducts from "../../SaleProducts/SaleProducts";
import classes from "./AllSales.module.css";
const AllSales = () => (
  <div className={classes.pageBody}>
    <Navigation />
    <SaleProducts />

    {/* <div className="contact_componentSale"> */}
    <Contact />
    {/* </div>
      <div className="map_component"> */}
    <Map />
    {/* </div> */}
    {/* </div> */}
  </div>
);

export default AllSales;
