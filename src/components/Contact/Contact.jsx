import React, { useRef } from 'react';
import './Contact.css';
import contactImg from '../../assets/bg.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef();

  useGSAP(() => {
    const left = contactRef.current.querySelector('.leftContact');
    const right = contactRef.current.querySelector('.rightContact');

    gsap.from(left, {
      x:-100,
      duration:0.9,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:left,
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      },
    });

    gsap.from(right, {
      x:100,
      duration:0.9,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:right,
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      },
    });
  }, []);

  return (
    <div id="contact" ref={contactRef}>
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contactContent">
        <div className="leftContact">
          <img src={contactImg} alt="Contact Support" className="contact-image" />
        </div>

        <div className="rightContact">
          <form action="https://formspree.io/f/xeokaowa" method='POST'>
            <input type="text" placeholder="Your Name" required name='name'/>
            <input type="email" placeholder="Your Email" required name='email'/>
            <textarea id="textarea" placeholder="Your Message" required name='message'/>
            <button type="submit" id="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
