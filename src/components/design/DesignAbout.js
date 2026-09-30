import React from 'react';
import shared from '../../data/shared/personal';

/**
 * DesignAbout — short editorial profile plus the Graphic Design CV download.
 * Copy is taken from the Graphic Design CV; nothing here is invented.
 */
const DesignAbout = () => {
    const cv = shared.personal.resumes.design;

    return (
        <section id="about" className="design-about" data-aos="fade-up">
            <div className="design-about-inner">
                <div className="design-about-copy">
                    <span className="design-eyebrow">About</span>
                    <h2>Creative designer with a technical edge.</h2>
                    <p>
                        3+ years creating brand identities, marketing materials, digital content and visual
                        campaigns for businesses, organizations, artists and events. I work across print,
                        digital, social and web — managing projects from brief and concept through revisions
                        to final delivery.
                    </p>
                    <p>
                        Because I also build websites, I design with implementation in mind: visuals that stay
                        consistent whether they end up on a feed, a banner, or a responsive page.
                    </p>

                    <div className="design-about-tools">
                        <span>Photoshop</span>
                        <span>Illustrator</span>
                        <span>InDesign</span>
                        <span>After Effects</span>
                        <span>Premiere Pro</span>
                    </div>

                    <a href={cv.url} className="design-cv-button" download>
                        <i className="bi bi-download"></i>
                        Download {cv.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DesignAbout;
