// src/components/ProjectCards/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ image, title, description, tags, github }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className={`tag tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                            #{tag}
                        </span>
                    ))}
                </div>

                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="github-icon">
                        🔗
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
