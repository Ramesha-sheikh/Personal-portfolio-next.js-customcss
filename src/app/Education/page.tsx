import React from "react";
import Cards from "@/components/Educards/educard"; // Correct path
import Educards from "@/components/Educards/style.module.css"

const Edu = () => {
  const CardData = [
    {
      img:"/deg.svg",
      heading: "Bachelors in Commerce",
      para: `Universty of Karachi`,
    },
    {
      img:"/school2.svg",
      heading: "Diploma Information Technology DIT",
      para: `Koeran Computer Accademy`,
    },
    {
      img:"/pro.svg",
      heading: " Certified Cloud Applied Generative AI Engineer (GenEng).",
      para: `Governor Sindh Initiative For Artificial Intelligence Web 3.0 & Metaverse`,
    },
    
  ];

  return (
    <>
      <div className={ Educards.container} id="education" >
        {/* Fixed Content */}
        
          <h1 className={Educards.heading1} >Education</h1>
       

        {/* Render the Cards dynamically */}
        <div className={Educards.main}>
  {CardData.map((card, index) => (
    <Cards
      key={index}
      img={card.img} // Pass the image
      heading={card.heading}
      para={card.para}
    />
  ))}
</div>

      </div>
    </>
  );
};

export default Edu;
