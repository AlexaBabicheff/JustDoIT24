import React, { useEffect, useState } from "react";
import Navigation from "../../Navigation/Navigation";
import classes from "./AllProducts.module.css";
import { useParams, Link } from "react-router-dom";
import { serverUrl } from './../../../Config.js';
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import iconBag from "../../Navigation/HeaderImg/icons.png";
import iconHeart from "../../Navigation/HeaderImg/heart.svg";
import { NavLink } from "react-router-dom";
import PanelComponent from "../../SortingFilteringPanel/components/PanelComponent";

const AllProducts = () => {
  // const { all } = useParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);

  const allProductsURL = `${serverUrl}products/all`;
  useEffect(() => {
    fetch(allProductsURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error\! status: $\{response\.status\}`);
      }
      return response.json();
    })
    .then((data) => setProducts(data))
    .catch((error) =>
      console.error("Ошибка загрузки данных продуктов:", error)
    );
  }, []);

  const openProductDetails = (product) => {};

  const getFilteredAndSortedProducts = () => {
    let sortedProducts = [...products];

    if (sort === "price_asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts.filter(
      (product) =>
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!filter || product.category === filter)
    );
  };

  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
        <Navigation />
        <div className={classes.container}>
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
                <Link to="/categories-review">All Products</Link>
              </button>
            </div>
          </div>
          <h5>All products</h5>
          <PanelComponent />
          <Contact />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
