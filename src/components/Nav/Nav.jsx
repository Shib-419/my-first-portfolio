import React, { useRef } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Nav() {
  const menu = useRef(null);
  const mobile = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('nav h1', {
      y: -100,
      duration: 1,
      opacity: 0,
    });
    tl.from('nav ul li', {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <div>
      <nav>
        <h1>PORTFOLIO</h1>

        <ul className="desktopMenu">
          <Link to="home" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Home</Link>
          <Link to="about" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">About</Link>
          <Link to="experience" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Experience</Link>
          <Link to="projects" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Projects</Link>
          <Link to="contact" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Contact</Link>
        </ul>

        <div
          className="hamburger"
          ref={menu}
          onClick={() => {
            mobile.current.classList.toggle('activeMobile');
            menu.current.classList.toggle('activeHam');
          }}
        >
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <ul className="mobileMenu" ref={mobile}>
          <Link to="home" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Home</Link>
          <Link to="about" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">About</Link>
          <Link to="experience" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Experience</Link>
          <Link to="projects" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Projects</Link>
          <Link to="contact" activeClass="active animated-text" spy={true} smooth={true} duration={500} className="nav-link">Contact</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
