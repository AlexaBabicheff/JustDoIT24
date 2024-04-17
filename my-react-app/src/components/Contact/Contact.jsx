import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import Section from "../Section/Section";
import classes from "./Contact.module.css";

function Contact () {
  return (
    <>
    <Section>
      <div className={classes.container}>
      <h5 className={classes.title}>Contact</h5>

        <div className={classes.contacts}>

          <div className={classes.phone}>
            <p className={classes.contact_title}>Phone</p>
            <a href="tel:+499999999999">
              <h8>+49 999 999 99 99</h8></a>
          </div>

          <div className={classes.socials}>
          <p className={classes.contact_title}>Socials</p>
          <div className={classes.insta_whatsapp}>
          <div className={classes.contact_icons}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={classes.anchor}
              href="https://www.instagram.com/"
            >
              <FaInstagram className={classes.instagram} /></a></div>
              <div className={classes.contact_icons}><a
              target="_blank"
              rel="noopener noreferrer"
              className={classes.anchor}
              href="https://www.whatsapp.com/"
            >
              <FaWhatsapp className={classes.whatsUp} /> </a></div>
            </div>
          </div>
       
        <div className={classes.address}>
        <p className={classes.contact_title}>Address</p>
        <a
              href="https://www.google.com/maps/place/Starta+Institute+by+Tel-Ran/@52.5079329,13.3750447,17z/data=!3m1!5s0x47a851cbc6be2f3b:0x7edf0a3a9c29227c!4m14!1m7!3m6!1s0x47a8515353a68755:0xd0866511db4f838f!2sStarta+Institute+by+Tel-Ran!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl!3m5!1s0x47a8515353a68755:0xd0866511db4f838f!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h8>Linkstraße 2, 8 OG,10785 Berlin,</h8>
              <h8> Deutschland</h8>
              </a>
          </div>

          <div className={classes.working_hours}>
          <p className={classes.contact_title}>Working Hours</p>
            <h8>24 hours a day</h8>
          </div>
        
        </div>
      </div>
    </Section>
    </>
  );
}

export default Contact;