import React, { useEffect, useState } from "react";
import Navigation from "../../../Navigation/Navigation.jsx";
import classes from "./AllProducts.module.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../actions/favoritesActions.jsx";
import { addToCart, removeFromCart } from "../actions/cartActions.jsx";
import { serverUrl } from "../../../../Config.js";
import Contact from "../../../Contact/Contact.jsx";
import Map from "../../../Map/Map.jsx";
import iconBag from "../../../Navigation/HeaderImg/bag_white.png";
import iconHeart from "../../../Navigation/HeaderImg/heart_white.png";
import { NavLink } from "react-router-dom";
import PanelComponent from "../../../SortingFilteringPanel/components/PanelComponent.jsx";

const AllProducts = () => {
  // const { all } = useParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);
  const [showDiscounted, setShowDiscounted] = useState(false);

  const allProductsURL = `${serverUrl}products/all`;
  useEffect(() => {
    fetch(allProductsURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
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
              <button2>
                <Link to="/">Main Page</Link>
              </button2>
            </div>
            <div className={classes.line__MinePageToCategories}>
              <hr />
            </div>
            <div className={classes.btn_categories}>
              <button2>
                <Link to="/categories-review">All Products</Link>
              </button2>
            </div>
          </div>
          <h5>All products</h5>
          <PanelComponent />
          <div className={classes.productsList}>
            {getFilteredAndSortedProducts().map((product) => (
              <div key={product.id} className={classes.productCard}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => dispatch(addToFavorites(product.id))}>
                  Add to favorites
                </button>
                <button onClick={() => dispatch(addToCart(product.id))}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;