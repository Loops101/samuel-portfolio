import React from 'react';
import SectionTitle from '../common/SectionTitle';

const SocAbout = () => {
    return (
        <section id="about" className="about">
            <SectionTitle eyebrow="Who I am" title="About" subtitle="My path into security" />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            My background in IT support and full-stack development gave me a practical, systems-level
                            view of how applications and infrastructure actually get attacked — and defended. I'm now
                            focused on Security Operations: monitoring, identity and access management, and cloud
                            security, building hands-on experience through Microsoft Azure security labs and
                            structured certifications.
                        </p>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            I approach security the way I approach development — methodically, with good
                            documentation, and a bias toward continuously learning the next tool or technique.
                        </p>
                    </div>

                    <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
                        <div className="stats-grid vertical-stats">
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Security Certs &amp; Trainings</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Hands-on Labs</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">4+</div>
                                <div className="stat-label">Years in IT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocAbout;
