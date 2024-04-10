import React, { useState, useEffect } from "react";
import Navigation from "../../Navigation/Navigation";
import Sale from "../../Sale/Sale";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import SaleProducts from "../../SaleProducts/SaleProducts";
import styles from "./AllSales.module.css";
import { Link } from "react-router-dom";

const AllSales = () => (
  <div className="pageBody">
    {/* <div className={style}> */}
    <Navigation />
    <div className="container">
      <div className="line">
        <hr />
      </div>
      <div className="btns">
        <div className="main_page">
          <button><Link to="/">Main Page</Link></button>
        </div>
        <div className="categories_page">
          <button>All sales</button>
        </div>
      </div>
      <h5>Discounted items</h5>
      <SaleProducts />

      <div className="contact_componentSale">
        <Contact />
      {/* </div>
      <div className="map_component"> */}
        <Map />
      </div>
    </div>
  </div>
);

export default AllSales;
