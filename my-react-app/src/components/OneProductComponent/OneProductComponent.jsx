import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import classes from "./OneProductComponent.module.css";
import { serverUrl } from "../../Config";
import ProductCounter from "../ProductCounter/ProductCounter";
import FavoriteButton from "../Favorites/FavoriteButton";

const OneProductComponent = () => {
  const [product, setProduct] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const { id } = useParams();

  const addToCart = (productData) => {
    console.log("Adding to cart:", productData);
  };

  useEffect(() => {
    const oneProduct = `${serverUrl}products/${id}`;
    fetch(oneProduct)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data[0]);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <div>No products</div>;
  }

  return (
    <div className={classes.pageBody}>
      <div className={classes.btns}>
        <div className={classes.btn_mainPage}>
          <button>
            <NavLink to="/">Main Page</NavLink>
          </button>
        </div>
        <div className={classes.line__MinePageToCategories}>
          <hr />
        </div>
        <div className={classes.btn_categories}>
          <div className={classes.line__CategoriesToProducts}>
            <hr />
          </div>
          <button>
            <NavLink to="/categories-review">Categories</NavLink>
          </button>
        </div>
        <div className={classes.btn_products}>
          <button>
            <NavLink to="/categories/">Products</NavLink>
          </button>
        </div>
        <div className={classes.line__ProductsToOneProduct}>
          <hr />
        </div>

        <div className={classes.btn_oneProduct}>
          <button>One Product</button>
        </div>
      </div>

      <div className={classes.OneProductContainer}>
        <div className={classes.OneProductsContainerHeader}>
          <div className={classes.OneProductImg}>
            <img src={`${serverUrl}/${product.image}`} alt={product.title} />
          </div>
          <div className={classes.OneProductDescription}>
            <h2>{product.title}</h2>
            <h5>$ {product.price}</h5>
            <div className={classes.check_out}>
              <ProductCounter
                product={product}
                itemCount={itemCount}
                setItemCount={setItemCount}
                addToCart={addToCart}
              />
            </div>
            <h6>Description</h6>
            <h3>{product.description}</h3>
            <link rel="stylesheet" href="" />
            <a href="">
              <h4>Read more</h4>
            </a>
          </div>
          <div className={classes.like}>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductComponent;
