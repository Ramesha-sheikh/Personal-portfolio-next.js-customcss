import React from "react";
import project from "./style.module.css";
import Image from "next/image";
import { ReactNode } from "react"; // Import ReactNode

interface usercards {
  imageurl: string;
  heading: string;
  para: ReactNode; // Update type to ReactNode
}

const MyProject = ({ imageurl, heading, para }: usercards) => {
  return (
    <div className={project.cardcontainer}>
      <div className={project.picture}>
        <Image
          src={imageurl || "/default-image.png"} // Fallback image
          alt={heading}
          width={350}
          height={350}
        />
      </div>
      <h1>{heading}</h1>
      <p>{para}</p> {/* This will now work correctly with ReactNode */}
    </div>
  );
};

export default MyProject;
