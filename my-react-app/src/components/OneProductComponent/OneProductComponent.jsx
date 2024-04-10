import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./OneProductComponent.module.css";
import { serverUrl } from "../../Config";
import iconHeart from "../Navigation/HeaderImg/heart.svg";
import iconBag from "../Navigation/HeaderImg/icons.png";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Map from "../Map/Map";
import ProductCounter from '../ProductCounter/ProductCounter';
import { NavLink } from "react-router-dom";

const OneProductComponent = () => {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const oneProduct = `${serverUrl}products/${id}`;
    console.log(oneProduct);
    fetch(oneProduct)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data[0]);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product.data);
  return (
    <div className={classes.pageBody}>
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
          <div className={classes.line__CategoriesToProducts}>
            <hr />
          </div>
          <button2>
            <Link to="/categories-review">Categories</Link>
          </button2>
        </div>
        <div className={classes.btn_products}>
          <button2>
            <Link to="/categories/2">Products</Link>
          </button2>
        </div>
        <div className={classes.line__ProductsToOneProduct}>
          <hr />
        </div>
        
        {/* Добавление товара в корзину */}
        <div className={classes.btn_oneProduct}>
          <button2>One Product</button2>
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
            <div className="check_out">
            <ProductCounter />
            < NavLink to="/basket"><button src={iconHeart} alt="basket">Add to cart</button></NavLink>

              
            </div>
            <h6>Description</h6>
            <h3>{product.description}</h3>
            <link rel="stylesheet" href="" />
            <a href="">
              <h4>Read more</h4>
            </a>
          </div>
          <div className={classes.like}>
          < NavLink to="/favorites"><img src={iconHeart} alt="favorites" /></NavLink>
          </div>
        </div>
      </div>
      {/* <div className={classes.oneProduct_contactComponent}>
   <Contact />
   </div>
   <div className="map_component">
    <Map />
    </div> */}
    </div>

    
  );
};

export default OneProductComponent;
