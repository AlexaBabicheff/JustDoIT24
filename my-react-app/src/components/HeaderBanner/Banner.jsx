import React from 'react';
import banner from '../HeaderBanner/BannerImg/banner.svg';
import styles from '../HeaderBanner/Banner.module.css';


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
          <div className="check_out">
            <button>Check out</button>
          </div>
        </div>
        <div className="btn_banner_img">
          <img src={banner} alt="" />
        </div>
      </banner>
    </>
  );
};

export default Banner;
