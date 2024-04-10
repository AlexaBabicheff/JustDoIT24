import React, { useState } from 'react';
import styles from './Mind_map.module.css'

const Mind_map = ({ currentPage, navigateToMainPage }) => {
  return (
    <div>
      {currentPage !== 'Main page' && (
        <div className={styles.mind_map}>
          <div className={styles.btn}>
            <button onClick={navigateToMainPage}><a href="#">Main page</a></button>
            <hr />
            <button><a>{currentPage}</a></button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Mind_map;