import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import java from '../../assets/java.png'
import springboot from '../../assets/spring-boot.svg'
import web from '../../assets/webtech.png'
import mic from '../../assets/mic.png'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:0.8,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    gsap.from(".line",{
      x:-100,
      duration:0.8,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    gsap.from(".aboutDetails h1",{
      x:-100,
      duration:0.8,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutDetails h1",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 10%"
      }
      
    })
    gsap.from(".aboutDetails ul",{
      y:100,
      duration:0.9,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutDetails ul",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    gsap.from(".rightAbout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightAbout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    
  })
  return (
    <div id='about'>
      <div className="leftAbout">
        <div className="circleLine">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutDetails">
          <div className="personalInfo">
            <h1>ABOUT ME</h1>
            <ul>
              <li>
                <span>WHO I AM</span> : I am a passionate full-stack developer pursuing a B.Tech in Computer Science Engineering. With a strong foundation in Java and experience in Web Technologies like HTML, CSS, JS and REACT, I build efficient, scalable, and user-friendly web applications. Always eager to learn new technologies, I strive to deliver clean, well-designed solutions and thrive in collaborative environments.
              </li>
            </ul>
          </div>
          <div className="personalInfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span> : SIBASUNDAR KAR
              </li>
              <li>
                <span>DOB</span> : 2ND DEC 2004 
              </li>
              <li>
                <span>Gender</span> : MALE
              </li>
              <li>
                <span>Language Known</span> : HINDi,ENGLISH,ODIA
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree</span> : BTECH 
              </li>
              <li>
                <span>College</span> : GANDHI INSTITUTE FOR EDUCATION AND TECHNOLOGY, KHORDHA 
              </li>
              <li>
                <span>Branch</span> : ELECTRICAL AND COMPUTER SCIENCE 
              </li>
              <li>
                <span>CGPA</span> : 8.0 CGPA
              </li>
              <li>
                <span>12th</span> : SCIENCE
              </li>
              <li>
                <span>SCHOOL</span> : BHADRAK HIGHER SECONDARY SCHOOL, BHADRAK
              </li>
              <li>
                <span>PERCENTAGE</span> : 83%
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                JAVA SE (OOP, Collections, Exception Handling)
              </li>
              <li>
                JAVA EE (Servlets, JSP, JDBC)
              </li>
              <li>
                SPRING BOOT
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                JAVASCRIPT
              </li>
              <li>
                REACT
              </li>
              <li>
                MICROSERVICES
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightAbout">
        <Card title="JAVA" image={java}/>
        <Card title="SPRING BOOT" image={springboot}/>
        <Card title="HTML,CSS,JS,REACT" image={web}/>
        <Card title="MICROSERVICES" image={mic}/>
      </div>
    </div>
  )
}

export default About
