import React, { useRef } from 'react';
import './Footer.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-card">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out through any platform below 👇</p>
        <div className="social-icons">
          <a href="https://github.com/Shib-419" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sibasundar-kar-703115335" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:sibasundarkar984@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Sibsundar Kar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
