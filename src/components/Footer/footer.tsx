import React from "react";
import Myfooter from './style.module.css'

const Footer = () => {
  return (
    <footer className={Myfooter.footer}>
      <p>&copy; {new Date().getFullYear()} Ramesha Javed All rights reserved.</p>
    </footer>
  );
};

export default Footer;
