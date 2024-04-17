import React from "react";
import Navigation from "../../Navigation/Navigation";
import HeaderBanner from "../../HeaderBanner/Banner";
import Categories from "../../Categories/Categories";
import DiscountCard from "../../DiscountCard/Discount";
import Sale from "../../Sale/Sale";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";

const MainPage = () => (
  <div className="pageBody">
    <Navigation />
    <HeaderBanner /> 
    <div>
      <Categories showAllCategories={false} />
    </div>
    <DiscountCard />
    <Sale />
    <Contact />
    <Map />
  </div>
);

export default MainPage;
