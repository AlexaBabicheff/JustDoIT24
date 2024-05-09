import React from 'react';
import BannerImg from '../HeaderBanner/BannerImg/banner.svg';
import styles from '../HeaderBanner/Banner.module.css';
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <banner className={styles.pageBody}>
        <div className="text">
          <h1>
            Amazing Discounts
            <br />
            on Garden Products!
          </h1>
          <div className={styles.check_out}>
            <button><NavLink to="/all_sales">Check out</NavLink></button>
          </div>
        </div>
        <div className="btn_banner_img">
          <img src={BannerImg} alt="" />
        </div>
      </banner>
    </>
  );
};

export default Banner;
