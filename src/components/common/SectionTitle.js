import React from 'react';

/**
 * SectionTitle — consistent "eyebrow + heading + subtext" header used at the
 * top of every section across both portfolios.
 */
const SectionTitle = ({ eyebrow, title, subtitle }) => (
    <div className="container section-title" data-aos="fade-up">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
    </div>
);

export default SectionTitle;
