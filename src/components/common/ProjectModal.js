import React, { useEffect } from 'react';

const techList = (list) => (Array.isArray(list) ? list : String(list || '').split(',').map((t) => t.trim()).filter(Boolean));

/**
 * ProjectModal — full project detail overlay, opened from a ProjectCard.
 * Handles Escape-to-close and locks background scroll while open.
 */
const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div
            className="project-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={onClose}
        >
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={onClose} aria-label="Close project details">
                    <i className="bi bi-x-lg"></i>
                </button>

                {project.image && (
                    <div className="project-modal-image">
                        <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                )}

                <div className="project-modal-body">
                    <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                        {project.category && <span className="category">{project.category}</span>}
                        {project.status && <span className="status-badge">{project.status}</span>}
                        {(project.date || project.year) && <span className="lab-chip">{project.date || project.year}</span>}
                    </div>

                    <h3 id="project-modal-title">{project.title}</h3>
                    {project.client && <p className="project-modal-client"><i className="bi bi-briefcase me-2"></i>{project.client}</p>}

                    <p className="project-modal-description">{project.description}</p>

                    {(project.services || project.features)?.length > 0 && (
                        <>
                            <h4 className="project-modal-subhead">{project.services ? 'Services' : 'Key Features'}</h4>
                            <ul className="project-modal-list">
                                {(project.services || project.features).map((f) => <li key={f}>{f}</li>)}
                            </ul>
                        </>
                    )}

                    {(project.techstack || project.tools) && (
                        <>
                            <h4 className="project-modal-subhead">{project.techstack ? 'Technologies' : 'Tools'}</h4>
                            <div className="project-meta-row">
                                {techList(project.techstack || project.tools).map((tech) => (
                                    <span className="project-tech-chip" key={tech}>{tech}</span>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="d-flex gap-3 mt-4 flex-wrap">
                        {project.previewLink && (
                            <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                <i className="bi bi-eye me-2"></i>Live Preview
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                <i className="bi bi-github me-2"></i>Source Code
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                <i className="bi bi-box-arrow-up-right me-2"></i>View Live
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
