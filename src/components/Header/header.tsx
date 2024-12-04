'use client'
import React, { useState } from "react";
// import Image from "next/image";
import styles from "./style.module.css";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHireMeClick = () => {
    // Debugging: Let's check if the button is being clicked
    console.log("Hire Me button clicked");
    
    // Open the external link in a new tab
    window.open('https://milstone-01-git-main-ramesha-sheikhs-projects.vercel.app/', '_blank');
  };

  return (
    <header className={styles.nav}>
      {/* Logo Section */}
      <div className={styles.pic}>
        Ramesha Javed...
      </div>

      {/* Desktop Menu */}
      <nav className={styles.desktopMenu}>
        <ul>
          <li><Link href="#About">About</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#Uskill">Skill</Link></li>
          <li><Link href="#project">Projects</Link></li>
          <li><Link href="#contact">Contact us</Link></li>
        </ul>
      </nav>

      {/* Hire Me Button */}
      <button 
        className={styles.button} 
        onClick={handleHireMeClick} 
        style={{ padding: "10px 20px", backgroundColor: "#1538d3", color: "white", borderRadius: "5px", border: "none" }}
      >
        Hire Me
      </button>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FiAlignJustify size={24} />
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.show : ""}`}>
        <nav>
          <ul>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Education">Education</Link></li>
            <li><Link href="/Uskill">Skill</Link></li>
            <li><Link href="/Project">Projects</Link></li>
            <li><Link href="/Contact">Contact us</Link></li>
            {/* Hire Me Button for Mobile */}
            <button 
              className={styles.button} 
              onClick={handleHireMeClick} 
              style={{ padding: "10px 20px", backgroundColor: "#1538d3", color: "white", borderRadius: "5px", border: "none" }}
            >
              Hire Me
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
