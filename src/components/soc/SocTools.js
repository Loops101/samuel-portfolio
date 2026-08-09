import React from 'react';
import tools from '../../data/soc/tools';
import SectionTitle from '../common/SectionTitle';

const SocTools = () => {
    return (
        <section id="tools" className="services section">
            <SectionTitle eyebrow="Working set" title="Security Tools" subtitle="Platforms and tools I've used hands-on in labs and IT support work." />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="tools-grid">
                    {tools.map((tool) => (
                        <div className="tool-chip" key={tool.name}>
                            <span className="tool-name">{tool.name}</span>
                            <span className="tool-category">{tool.category}</span>
                            {tool.proficiency && <span className="tool-proficiency">{tool.proficiency}</span>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocTools;
