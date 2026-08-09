import React, { useEffect } from 'react';
import skills from '../../data/developer/skills';
import SectionTitle from '../common/SectionTitle';

const DevSkills = () => {
    useEffect(() => {
        const progressBars = document.querySelectorAll('#skills .progress-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = bar.getAttribute('aria-valuenow') + '%';
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach((bar) => observer.observe(bar));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section">
            <SectionTitle eyebrow="Toolkit" title="Skills" subtitle="Technical skills powering digital innovation" />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    {skills.skillCategories.map((cat, catIndex) => (
                        <div className="skills-container col-6 col-lg-6" key={cat.category} data-aos="fade-up" data-aos-delay={200 + catIndex * 50}>
                            <div className="skills-category h-100">
                                <h3>{cat.category}</h3>
                                <div className="skills-animation">
                                    {cat.items.map((item) => (
                                        <div className="skill-item" key={item.name}>
                                            <h4>
                                                <span>{item.name}</span>
                                                <span className="skill-percentage">{item.level}%</span>
                                            </h4>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    aria-valuenow={item.level}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lab-chip-row justify-content-center mt-4" data-aos="fade-up">
                    {skills.techStack.map((tech) => (
                        <span className="lab-chip" key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevSkills;
