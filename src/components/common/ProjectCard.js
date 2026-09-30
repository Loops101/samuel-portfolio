import React from 'react';

const techList = (list) => (Array.isArray(list) ? list : String(list || '').split(',').map((t) => t.trim()).filter(Boolean));

/**
 * ProjectCard — compact card for grid layouts (2 per row on mobile).
 * Shows just enough to identify the project; the full description, service
 * list, and tech/tools open in a modal so the card itself stays tight.
 *
 * @param {object} project
 * @param {function} onOpen - called with `project` when the card is activated
 */
const ProjectCard = ({ project, onOpen }) => {
    const tags = techList(project.techstack || project.tools).slice(0, 2);
    const extraCount = techList(project.techstack || project.tools).length - tags.length;

    const activate = () => onOpen(project);

    return (
        <div
            className="portfolio-wrap portfolio-wrap--compact h-100"
            role="button"
            tabIndex={0}
            onClick={activate}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } }}
            aria-label={`View details for ${project.title}`}
        >
            <div className="portfolio-wrap-media">
                <img src={project.image} className="img-fluid" alt={project.title} loading="lazy" />
                <span className="portfolio-wrap-overlay">
                    <span className="portfolio-wrap-cta">
                        <i className="bi bi-arrows-angle-expand"></i> Details
                    </span>
                </span>
            </div>

            <div className="portfolio-info portfolio-info--compact">
                <div className="content">
                    <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                        <span className="category">{project.category}</span>
                        {project.status && <span className="status-badge">{project.status}</span>}
                    </div>

                    <h4>{project.title}</h4>
                    {project.client && <p className="portfolio-wrap-client">{project.client}</p>}

                    <p className="portfolio-wrap-desc">{project.shortDescription || project.description}</p>

                    {tags.length > 0 && (
                        <div className="project-meta-row">
                            {tags.map((t) => <span className="project-tech-chip" key={t}>{t}</span>)}
                            {extraCount > 0 && <span className="project-tech-chip">+{extraCount}</span>}
                        </div>
                    )}

                    <span className="portfolio-wrap-readmore">
                        Read more <i className="bi bi-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
