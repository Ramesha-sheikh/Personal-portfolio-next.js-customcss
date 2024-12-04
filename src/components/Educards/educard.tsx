import React from "react";
import Aboutcards from "./style.module.css"; // Importing the CSS module
import Image from 'next/image'


interface Usercards {
  img: string;
  heading: string;
  para: string;
}

const Cards = ({ img, heading, para }: Usercards) => {
  return (
    <div className={Aboutcards.cardcontainer}>
     
      <Image src={img} alt={heading} className={Aboutcards.cardImage} 
      width={100}
      height={100}/>
      <h2>{heading}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Cards;
