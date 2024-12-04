import React from 'react';
import styles from '@/components/Contactus/style.module.css';
import Image from 'next/image';
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section1}>
        <h1 className={styles.heading}>CONTACT ME</h1>
        <div className={styles.contactinfo}>
        <h2>Get In Touch</h2>
        {/* <h3>Rameshajaved1@gmail.com</h3> */}
        {/* <h3>+92-98098234</h3> */}
        </div>

        {/* Social Icons */}
        <ul className={styles.socialIcons}>
        <li>
  <a href="https://www.facebook.com/profile.php?id=61553237590841" target="_blank" rel="noopener noreferrer">
    <Image
      src="/face.svg"
      alt="WhatsApp icon"
      width={40}
      height={40}
      className={styles.icon}
    />
  </a>
</li>
          <li>
  <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
    <Image
      src="/whatapp.svg"
      alt="WhatsApp icon"
      width={40}
      height={40}
      className={styles.icon}
    />
  </a>
</li>
<li>
  <a href="https://www.instagram.com/ramesha2425s/" target="_blank" rel="noopener noreferrer">
    <Image
      src="/ins.svg"
      alt="WhatsApp icon"
      width={40}
      height={40}
      className={styles.icon}
    />
  </a>
</li>
<li>
  <a href="mailto:rameshajaved1@gmail.com" target="_blank" rel="noopener noreferrer">
    <Image
      src="/gmil.svg"
      alt="Instagram icon"
      width={40}
      height={40}
      className={styles.icon}
    />
  </a>
</li>

<li>
  <a href="https://www.linkedin.com/in/ramesha-sheikh-4408a5244/" target="_blank" rel="noopener noreferrer">
    <CiLinkedin className={styles.icon} />
  </a>
</li>
        </ul>
      </div>
      <div className={styles.section2}>
        {/* Contact Form */}
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
