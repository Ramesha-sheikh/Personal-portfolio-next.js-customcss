import React from "react";
import MyProject from "@/components/Projects/project"; // Correct path
import project from "@/components/Projects/style.module.css"; // Corrected CSS module import
import { MdOutlineArrowOutward } from "react-icons/md"; // Import icon properly

const Projectss = () => {
  const ProjectsData = [
    {
      imageurl: "/fastfood.png",
      heading: "Next.js & Tailwind css use ",
      para: (
        <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ), // Add a link to the project
      link: "https://your-live-project-url.com", // Add the live project URL here
    },
    {
      imageurl: "/landing.png",
      heading: "HTML Tailwindcss typescript",
      para: (
        <a href="https://landingpage-with-tailwind-css.vercel.app/" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ),
      link: "https://landingpage-with-tailwind-css.vercel.app/",
    },
    {
      imageurl: "/next.png",
      heading: "Next.js Tailwindcss",
      para: (
        <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ),
      link: "https://your-live-project-url.com",
    },
    {
      imageurl: "/nextresume.png",
      heading: "Next.js Tailwindcss ",
      para: (
        <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ),
      link: "https://your-live-project-url.com",
    },
    {
      imageurl: "/portfolo.png",
      heading: "HTML CSS JAVASCRIPT",
      para: (
        <a href="https://persoanl-portfolio-ramesha.vercel.app/" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ),
      link: "https://persoanl-portfolio-ramesha.vercel.app/",
    },
    {
      imageurl: "/resume.png",
      heading: "HTML CSS TYPESCRIPT",
      para: (
        <a href="https://milstone-01.vercel.app/" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ),
      link: "https://milstone-01.vercel.app/",
    },
    {
      imageurl: "/nextport.png",
      heading: "Next.Js Personal Custom CSS Portfolio",
      para: (
        <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward />
        </a>
      ),
      link: "https://your-live-project-url.com",
    },
  ];

  return (
    <>
      <div className={project.container} id="project">
        {/* Fixed Content */}
        <div className={project.content}>
          <h1>MY PROJECTS</h1>
          <p>
            {`"I am currently developing my portfolio to showcase my skills and
            expertise, highlighting various projects I have worked on to
            demonstrate my abilities."`}
          </p>
        </div>

        {/* Render the Cards dynamically */}
        <div className={project.main}>
          {ProjectsData.map((projectData, index) => (
            <MyProject
              key={index} // Add a unique key for each card
              imageurl={projectData.imageurl}
              heading={projectData.heading}
              para={projectData.para} // Correct access to the para property
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projectss;
