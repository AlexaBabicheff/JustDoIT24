import React from 'react';
import css from "./Map.module.css";
import location from '../Map/img/map.png'

const Map = () => (
  <div className={css.map}>
    {/* <h2>Our Location</h2> */}
    {/* <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876543!3d40.7412345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDUwJzA3LjIiTiA3M8KwMTknMjMuMyJX!5e0!3m2!1sen!2sus!4v1624512345678!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe> */}
    {/* <div className='location'> */}
    <img  src={location} alt="Logo" />
    {/* </div> */}
    
  </div>
);

export default Map;