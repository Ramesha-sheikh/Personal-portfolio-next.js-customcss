'use client'

import React, { useState, useEffect, useMemo } from "react";
import styles from "./style.module.css";
import Image from "next/image";


const Hero: React.FC = () => {
  // Wrap titles array in useMemo
  const titles = useMemo(
    () => [
      "Front-end Developer",
      "Web Designer",
      "Web Developer",
      "Programmer",
    ],
    []
  );

  // State variables for typewriter logic
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  // Typewriter effect logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < titles[index].length) {
          setSubIndex(subIndex + 1); // Type next character
        } else {
          setForward(false); // Start deleting
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1); // Delete characters
        } else {
          setForward(true); // Switch to typing
          setIndex((prevIndex) => (prevIndex + 1) % titles.length); // Move to next title
        }
      }
    }, 100); // Reduced the timeout to 100ms for faster typing speed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [subIndex, forward, index, titles]);

  // Update currentTitle when subIndex changes
  useEffect(() => {
    setCurrentTitle(titles[index].slice(0, subIndex));
  }, [subIndex, index, titles]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {/* Profile Picture */}
        <div className={styles.picture}>
          <Image src="/my.png" alt="profile"
          width={300}
          height={300} />
        </div>

        {/* Name and Typewriter Effect */}
        <div className={styles.content}>
          <h1>Ramesha Javed</h1>
          <h2 className={`${styles.typewriter} text-4xl font-bold`}>
            {currentTitle}
            <span className={styles.cursor}>|</span>
          </h2>
          <p>
            {`"I am a passionate front-end developer with expertise in HTML, CSS,
            JavaScript, and TypeScript. I specialize in building responsive and
            dynamic user interfaces using frameworks and tools like React.js,
            Next.js, Tailwind CSS, Shadcn UI, and Bootstrap. I am committed to
            delivering elegant and efficient web solutions."`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
