import React from 'react';
import shared from '../../data/shared/personal';
import SectionTitle from '../common/SectionTitle';

const DevAbout = () => {
    return (
        <section id="about" className="about">
            <SectionTitle eyebrow="Who I am" title="About" subtitle="Get to know me better" />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
                        {shared.personalDetails.about.split('\n\n').map((para, index) => (
                            <p key={index} style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{para}</p>
                        ))}
                    </div>

                    <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
                        <div className="stats-grid vertical-stats">
                            <div className="stat-item">
                                <div className="stat-number">4+</div>
                                <div className="stat-label">Projects Shipped</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">4+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">7+</div>
                                <div className="stat-label">Certifications</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevAbout;
