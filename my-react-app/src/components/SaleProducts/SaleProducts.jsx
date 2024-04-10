import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import ProductDetailsModal from './ProductDetailsModal';
import styles from "./SaleProducts.module.css";
import { serverUrl } from "../../Config";
import iconBag from "../../components/Navigation/HeaderImg/icons.png";
import iconHeart from "../../components/Navigation/HeaderImg/heart.svg";
import { NavLink } from "react-router-dom";


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

  return (
    <>
      <div className={styles.pageBody}>
        <div className={styles.saleProductContainer}>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/one-product/${product.id}`}
              className={styles.saleProductCard}
            >
              <img
                  src={`${serverUrl}/${product.image}`}
                  alt={product.title}
                />
              {/* <div className={styles.likedAndBasket}> */}
                <div>
                < NavLink to="/favorites"><img className={styles.likedProduct1} src={iconHeart} alt="favorites" /></NavLink>
                </div>
                <div>

                 <NavLink to="/basket"><img className={styles.basketProduct1} src={iconBag} alt="shopping_cart" /></NavLink>
                   </div>
              {/* </div> */}
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </Link>
          ))}
          {/* <div className={styles.discountPercent}>
                  -{calculateDiscountPercent(product.price, product.discont_price)}%
                </div>
                <div className={styles.description}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.priceInfo}>
                    <div className={styles.price}>${product.price}</div>
                    <div className={styles.dicountPrice}>${product.discont_price}</div>
                </div>
            </div> */}
        </div>
        ))
      </div>
    </>
  );
};

export default SaleProducts;
