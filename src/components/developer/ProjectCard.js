import React from 'react';

const techList = (techstack) =>
    Array.isArray(techstack) ? techstack : String(techstack).split(',').map((t) => t.trim());

const ProjectCard = ({ project }) => (
    <div className="portfolio-wrap h-100">
        <img src={project.image} className="img-fluid" alt={project.title} loading="lazy" />
        <div className="portfolio-info">
            <div className="content">
                <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                    <span className="category">{project.category}</span>
                    {project.status && <span className="status-badge">{project.status}</span>}
                    {project.date && <span className="lab-chip">{project.date}</span>}
                </div>
                <h4>{project.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '6px 0 0' }}>{project.description}</p>

                {project.techstack && (
                    <div className="project-meta-row">
                        {techList(project.techstack).map((tech) => (
                            <span className="project-tech-chip" key={tech}>{tech}</span>
                        ))}
                    </div>
                )}

                {project.features && project.features.length > 0 && (
                    <ul style={{ fontSize: '0.82rem', opacity: 0.75, marginTop: '10px', paddingLeft: '18px' }}>
                        {project.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                )}

                <div className="portfolio-links">
                    {project.previewLink && (
                        <a href={project.previewLink} target="_blank" rel="noopener noreferrer" title="Live Preview">
                            <i className="bi bi-eye"></i>
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                            <i className="bi bi-github"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default ProjectCard;
