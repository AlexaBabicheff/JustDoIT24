import React from 'react';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Navigation from '../../Navigation/Navigation';
import Section from '../../Section/Section';
import Map from '../../Map/Map';
import Contact from '../../Contact/Contact';


const errorPage = () => (
  <div className="pageBody">
    <Navigation />
    <ErrorPage />
    {/* <Section /> */}
    <Contact />
    <Map />
  </div>
);

export default errorPage;