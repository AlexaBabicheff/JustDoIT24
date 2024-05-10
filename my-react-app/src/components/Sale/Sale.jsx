import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sale.module.css";
import whiteBag from "../../components/Navigation/HeaderImg/bag_white.png";
import greenHeart from "../../components/Navigation/HeaderImg/heart_green.png";
import whiteHeart from "../../components/Navigation/HeaderImg/heart_white.png";
import { serverUrl } from "../../Config";

const Sale = () => {
  const [products, setProducts] = useState([]);
  const saleURL = `${serverUrl}products/all`;
  useEffect(() => {
    fetch(saleURL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter(
    (product) => product.discont_price !== null
  );
  const calculateDiscountPercentage = (price, discountPrice) => {
    const discount = price - discountPrice;
    const discountPercentage = Math.round((discount / price) * 100);
    return discountPercentage;
  };

  return (
    <div className={classes.saleContainer}>
      <div className={classes.saleContainerHeader}>
        <div>
          <h7>Sale</h7>
        </div>
        <div className={classes.line}>
          <hr />
        </div>
        <div className={classes.saleButton}>
          <button>
            <NavLink to="/all_sales">All sales</NavLink>
          </button>
        </div>
      </div>
      <div className={classes.saleCardsContainer}>
        {filteredProducts.slice(0, 4).map((product) => (
          <NavLink key={product.id} to={`/all_sales/`}>
            <div
              className={classes.saleCard}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img src={`${serverUrl}` + product.image} alt={product.title} />
              <div className={classes.discountLabel}>
                -{" "}
                {calculateDiscountPercentage(
                  product.price,
                  product.discont_price
                )}
                %
              </div>
              <img
                className={classes.likedProduct}
                src={whiteHeart}
                alt="favorites"
              />
              <NavLink to="/basket">
                <img
                  className={classes.basketProduct}
                  src={whiteBag}
                  alt="shopping_cart"
                />
              </NavLink>

              <div className={classes.description}>
                <div className={classes.title}>{product.title}</div>
                <div className={classes.priceInfo}>
                  <div className={classes.price}>${product.price}</div>
                  <div className={classes.dicountPrice}>
                    ${product.discont_price}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Sale;
