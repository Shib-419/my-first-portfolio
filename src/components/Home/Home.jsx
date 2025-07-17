import React from 'react';
import './Home.css';
import photo from '../../assets/DP-removebg-preview.png'; // your image
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0
    });

    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0
    });

    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0
    });

    gsap.from(".rightHome", {
      x: 200,
      duration: 1,
      opacity: 0
    });
  });

  return (
    <div id='home'>
      <div className="leftHome">
        <div className="homeDetails">
          <div className="line1">I'M</div>
          <div className="line2">SIBASUNDAR KAR</div>
          <div className="line3">
            <Typewriter
              words={['WEB DEVELOPER', 'BACKEND DEVELOPER', 'JAVA DEVELOPER']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <a href="/Sibasundar_Kar_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="homeDetailsBtn">VIEW RESUME</button>
          </a>
        </div>
      </div>

      <div className="rightHome">
        <div className="bubble-main">
          <img src={photo} alt="Your Photo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
