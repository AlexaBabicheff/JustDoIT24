import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconHeart from "./HeaderImg/heart.svg";
import iconBag from "./HeaderImg/icons.png";
import { serverUrl } from "./../../Config.js";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ThemeSwitcher from "./../ThemeSwitcher/components/ThemeSwitcher";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${serverUrl}products/1`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[0]);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const Modal = ({ showModal, setShowModal, product }) => {
    console.log(product);
    return (
      showModal && (
        <div className={styles.modal}>
          <div>
            <span className="close_button" onClick={() => setShowModal(false)}>
              x
            </span>
            <p>50% discount on product of the day!</p>
            <div className={styles.modal_content}>
              <div className="cardProd">
                {product && (
                  <img
                    src={`${serverUrl}/${product.image}`}
                    alt={product.title}
                  />
                )}
                <h3>{product.title}</h3>
                <div className={styles.strikethrough}>
                  <p>${product.price}</p>
                </div>
                <p>${product.price / 2}</p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <div className={styles.logo_image}>
          <img id="lg" src={logoImg} alt="Logo" />
          <ThemeSwitcher />
        </div>
        <nav className="header__nav">
          <ul
            className={
              nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
            }
          >
            <li>
              <NavLink to="/">Main Page</NavLink>
            </li>
            <li>
              <NavLink to="/categories-review">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/all_products">All products</NavLink>
            </li>
            <li>
              <NavLink to="/all_sales">All sales</NavLink>
            </li>
            <div className={styles.discount}>
              <button onClick={() => setShowModal(true)}>
                1 day discount!
              </button>
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                product={product}
              />
            </div>
          </ul>
          {/* Бургер-меню */}
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </nav>
        <div className="header_icons">
          <div className="iconHeart">
            <NavLink to="/favorites">
              <img src={iconHeart} alt="favorites" />
            </NavLink>
            {/* корзина */}
            <NavLink to="/basket">
              <img src={iconBag} alt="shopping_cart" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
