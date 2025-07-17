import React from 'react';
import ProjectCard from '../ProjectCards/ProjectCard';
import './Project.css';

import va from '../../assets/va.png';
import nt from '../../assets/image.png';
import em from '../../assets/ecom.png';
import ca from '../../assets/calc.png';
import wa from '../../assets/wa.png';

function Projects() {
  const projectData = [
    {
      title: "WORLD ATLAS",
      image: wa,
      description: "Web app for browsing country data via REST APIs.",
      tags: ["react", "api", "world"],
      github: "https://github.com/yourusername/world-atlas"
    },
    {
      title: "NOTE TAKER",
      image: nt,
      description: "Web app using Hibernate, JSP, and Servlets for persistent storage and rendering.",
      tags: ["hibernate", "jsp", "javaEE"],
      github: "https://github.com/Shib-419/Note-Taker"
    },
    {
      title: "E-COMMERCE WEBSITE",
      image: em,
      description: "Responsive e-commerce website for showcasing and purchasing products.",
      tags: ["html", "css", "javascript"],
      github: "https://github.com/yourusername/ecommerce-website"
    },
    {
      title: "CALCULATOR",
      image: ca,
      description: "Basic calculator using vanilla JavaScript and CSS.",
      tags: ["javascript", "html", "css"],
      github: "https://github.com/Shib-419/Calculator-Project"
    },
    {
      title: "VIRTUAL ASSISTANT",
      image: va,
      description: "AI-powered virtual assistant built with JS and APIs.",
      tags: ["html", "css", "js", "api"],
      github: "https://github.com/yourusername/virtual-assistant"
    }
  ];

  return (
    <section id="projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="project-slider">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
