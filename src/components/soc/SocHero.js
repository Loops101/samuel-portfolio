import React from 'react';
import shared from '../../data/shared/personal';

const SocHero = () => {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero">
            <div className="background-elements">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
            </div>

            <div className="hero-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                            <div className="hero-text">
                                <span className="landing-eyebrow" style={{ margin: '0 0 12px' }}>SOC / Cybersecurity</span>
                                <h2>Hi, I am</h2>
                                <h1>{shared.personal.name}</h1>
                                <p className="lead">I'm a <span>SOC Analyst &amp; Cybersecurity Enthusiast</span></p>
                                <p className="description">
                                    Focused on security monitoring, identity &amp; access management, and cloud security —
                                    with hands-on lab experience in Microsoft Sentinel, Defender for Cloud, and Azure security controls.
                                </p>
                                <div className="d-flex gap-3 mb-4 justify-content-center justify-content-lg-start">
                                    <a href="#labs" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleScrollTo('labs'); }}>View My Labs</a>
                                    <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>Get In Touch</a>
                                </div>
                                <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-4">
                                    <a href={shared.socialMediaUrl.github} target="_blank" rel="noopener noreferrer" className="social-links">
                                        <i className="bi bi-github"></i>
                                    </a>
                                    <a href={shared.socialMediaUrl.linkedin} target="_blank" rel="noopener noreferrer" className="social-links">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="profile-container">
                                <div className="profile-background"></div>
                                <img src={shared.personal.profileImageSquare} alt={shared.personal.name} className="profile-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocHero;
