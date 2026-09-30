import React, { useState } from 'react';
import projects from '../../data/developer/projects';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import ProjectModal from '../common/ProjectModal';

const categories = [
    { id: '*', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'Design' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'other', label: 'Other' },
];

const DevProjects = () => {
    const [filter, setFilter] = useState('*');
    const [activeProject, setActiveProject] = useState(null);

    const filtered = filter === '*' ? projects : projects.filter((p) => p.category === filter);
    const usedCategories = new Set(projects.map((p) => p.category));
    const visibleCategories = categories.filter((c) => c.id === '*' || usedCategories.has(c.id));

    return (
        <section id="projects" className="portfolio section">
            <SectionTitle
                eyebrow="Selected work"
                title="Projects"
                subtitle="Explore my collection of web projects built with modern technologies and a passion for clean design"
            />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-3 filter-sidebar" data-aos="fade-right" data-aos-delay="150">
                        <div className="filters-wrapper">
                            <ul className="portfolio-filters">
                                {visibleCategories.map((cat) => (
                                    <li
                                        key={cat.id}
                                        className={filter === cat.id ? 'filter-active' : ''}
                                        onClick={() => setFilter(cat.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === 'Enter') setFilter(cat.id); }}
                                    >
                                        {cat.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row gy-4 gx-3 project-grid-mobile" data-aos="fade-up" data-aos-delay="200">
                            {filtered.map((project) => (
                                <div key={project.title} className="col-6 col-lg-6">
                                    <ProjectCard project={project} onOpen={setActiveProject} />
                                </div>
                            ))}
                            {filtered.length === 0 && (
                                <p className="text-center opacity-75">No projects in this category yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {activeProject && (
                <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
            )}
        </section>
    );
};

export default DevProjects;
