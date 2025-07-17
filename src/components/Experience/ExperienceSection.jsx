import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ExperienceSection.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ExperienceSection.css";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const experiences = [
    // {
    //     title: "React.js Developer",
    //     company: "CHPL",
    //     period: "Jan 2025 – Present",
    //     tasks: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers."
    //     ]
    // },
    {
        title: "Full Stack Java Intern",
        company: "JSpiders",
        period: "Sept 2024 – Present",
        tasks: [
            "Developing and maintaining web applications using Java and other related technologies like Spring Boot and REST APIs.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Building personal projects to apply and strengthen core development concepts."
        ]
    },
    {
        title: "Web Developer Intern",
        company: "LIT",
        period: "Mar 2024 – Aug 2024",
        tasks: [
            "Developing and maintaining web applications using HTML, CSS, JS, React.js.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Building personal projects to apply and strengthen core development concepts."
        ]
    },
    {
        title: "Java Backend Developer Intern",
        company: "LIT",
        period: "June 2023 – Jan 2024",
        tasks: [
            "Developing web applications using React.js JDBC, JSP, SERVLETS and maintaining them using MYSQL.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Building personal projects to apply and strengthen core development concepts."
        ]
    }
];

const ExperienceCard = ({ title, company, period, tasks }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        // Scroll animation
        gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Tilt animation
        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * -10;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={cardRef} className="experience-card">
            <h3 className="experience-title">{title}</h3>
            <p className="experience-subtitle">{company} | {period}</p>
            <ul className="experience-tasks">
                {tasks.map((task, idx) => <li key={idx}>{task}</li>)}
            </ul>
        </div>
    );
};


export default function ExperienceSection() {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-header">
                <p className="experience-tagline">What I have done so far</p>
                <h2 className="experience-heading">Work Experience.</h2>
            </div>
            <div className="timeline">
                <div className="timeline-line"></div>
                {experiences.map((exp, idx) => (
                    <div key={idx} className={`timeline-entry ${idx % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-icon">
                            <span className="briefcase-icon">💼</span>
                        </div>
                        <ExperienceCard {...exp} />
                    </div>
                ))}
            </div>
        </section>
    );
}
