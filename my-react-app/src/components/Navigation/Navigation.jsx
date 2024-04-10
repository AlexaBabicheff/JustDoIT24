import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconHeart from "./HeaderImg/heart.svg";
import iconBag from "./HeaderImg/icons.png";
import BtnDarkMode from "./btnDarkMode/BtnDarkMode";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navigation = () => {
//   return (
//     <header className={styles}>
//       <div className="discount">
//       <button1>1 day discount!</button1>
//       </div>
//       <div className="logo&toggle">
//         <img id="lg" src={logoImg} alt="Logo" />
//       </div>
//       <div className="dark&light">
//         <BtnDarkMode />
//       </div>
//       <nav className="header__nav">
//         <ul>
//           <li><NavLink to="/">Main Page</NavLink></li>
//           <li><NavLink to="/categories-review">Categories</NavLink></li>
//           <li><NavLink to="/all_products">All products</NavLink></li>
//           <li><NavLink to="/all_sales">All sales</NavLink></li>
//           {/* <li className="burger">☰</li> */}
//         </ul>
//       </nav>
//       <div className="header_icons">
//         <div className="iconHeart">
//           <img src={iconHeart} alt="Icon" />
//           <img src={iconBag} alt="Icon" />
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navigation;

const Navigation = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.header}>
      <div className="discount">
        <button1>1 day discount!</button1>
      </div>

      <div className={styles.box}>
        <div className={styles.logo_image}>
          <img id="lg" src={logoImg} alt="Logo" />
        </div>
        <div className="dark&light">
          <BtnDarkMode />
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
           </ul>
          {/* Бургер-меню */}
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </nav>
        <div className="header_icons">
          <div className="iconHeart">
          <NavLink to="/favorites"><img src={iconHeart} alt="favorites" /></NavLink>
            {/* корзина */}
            <NavLink to="/basket"><img src={iconBag} alt="shopping_cart" /></NavLink>
            {/* <img src={iconBag} alt="Icon" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
