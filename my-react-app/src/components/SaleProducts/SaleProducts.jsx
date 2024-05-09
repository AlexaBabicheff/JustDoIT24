import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
// import ProductDetailsModal from './ProductDetailsModal';
import classes from "./SaleProducts.module.css";
import { serverUrl } from "../../Config";
import whiteBag from "../../components/Navigation/HeaderImg/bag_white.png";
import whiteHeart from "../../components/Navigation/HeaderImg/heart_white.png";

const formatPrice = (price) => `${price.toFixed(2)}$`;

const calculateDiscountPercent = (originalPrice, discountPrice) =>
  (((originalPrice - discountPrice) / originalPrice) * 100).toFixed(0);

const SaleProducts = () => {
  const { all } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const discountedProductsURL = `${serverUrl}products/all`;
  useEffect(() => {
    fetch(discountedProductsURL)
      .then((response) => response.json())
      .then((data) => {
        const discountedProducts = data.filter(
          (product) => product.discont_price > 0
        );
        setProducts(discountedProducts);
      })
      .catch((error) =>
        console.error("Ошибка загрузки данных о продуктах:", error)
      );
  }, []);
  const calculateDiscountPercentage = (price, discountPrice) => {
    const discount = price - discountPrice;
    const discountPercentage = Math.round((discount / price) * 100);
    return discountPercentage;
  };

  return (
    <>
      <div className={classes.containerSale}>
        <div className={classes.btns}>
          <div className={classes.btn_mainPage}>
            <button>
              <NavLink to="/">Main Page</NavLink>
            </button>
          </div>
          <div className={classes.line__MinePageToAllSales}>
            <hr />
          </div>
          <div className={classes.btn_allSales}>
            <button>
              <NavLink to="/categories-review">All Sales</NavLink>
            </button>
          </div>
        </div>

        <h5>Discounted items</h5>
        <div className={classes.saleProductContainer}>
          {products.map((product) => (
            <NavLink
              key={product.id}
              to={`/one-product/${product.id}`}
              className={classes.saleProductCard}
            >
              <img src={`${serverUrl}/${product.image}`} alt={product.title} />
              <div className={classes.discountLabel}>
                -{" "}
                {calculateDiscountPercentage(
                  product.price,
                  product.discont_price
                )}
                %
              </div>
              <div>
                <NavLink to="/favorites">
                  <img
                    className={classes.likedProduct1}
                    src={whiteHeart}
                    alt="favorites"
                  />
                </NavLink>
              </div>
              <div>
                <NavLink to="/basket">
                  <img
                    className={classes.basketProduct1}
                    src={whiteBag}
                    alt="shopping_cart"
                  />
                </NavLink>
              </div>
              <h3>{product.title}</h3>
              <div className={classes.priceInfo}>
                <p>Price: ${product.price}</p>
                <div className={classes.dicountPrice}>
                  ${product.discont_price}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SaleProducts;
