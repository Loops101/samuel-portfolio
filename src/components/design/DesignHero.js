import React from 'react';
import ProtectedImage from './ProtectedImage';
import shared from '../../data/shared/personal';

/**
 * DesignHero — editorial hero. The collage uses the cover art of the first
 * few loaded collections, so it always shows real work and never a
 * placeholder.
 */
const DesignHero = ({ collections = [] }) => {
    const collage = collections.slice(0, 3).filter((c) => c.cover);

    const scrollToWork = (e) => {
        e.preventDefault();
        const el = document.getElementById('work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="design-hero">
            <div className="design-hero-grid">
                <div className="design-hero-copy" data-aos="fade-right" data-aos-duration="700">
                    <span className="design-eyebrow">Graphic Design</span>
                    <h1>Visual ideas,<br />made tangible.</h1>
                    <p className="design-hero-sub">Branding, digital graphics, campaigns and print design.</p>
                    <div className="design-hero-actions">
                        <a href="#work" className="design-hero-cta" onClick={scrollToWork}>
                            View the work <i className="bi bi-arrow-right"></i>
                        </a>
                        <a
                            href={shared.personal.resumes.design.url}
                            className="design-hero-cta"
                            download
                        >
                            Download CV <i className="bi bi-download"></i>
                        </a>
                    </div>
                </div>

                {collage.length > 0 && (
                    <div className="design-hero-collage" data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
                        {collage.map((c, i) => (
                            <ProtectedImage
                                key={c.tag}
                                publicId={c.cover.publicId}
                                alt={c.title}
                                width={700}
                                eager={i === 0}
                                sizes="(max-width: 991px) 60vw, 30vw"
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DesignHero;
