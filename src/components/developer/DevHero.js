import React from 'react';
import shared from '../../data/shared/personal';

const DevHero = () => {
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
                                <span className="landing-eyebrow" style={{ margin: '0 0 12px' }}>Software Development</span>
                                <h2>Hi, I am</h2>
                                <h1>{shared.personal.name}</h1>
                                <p className="lead">I'm a <span>Full-Stack Web Developer</span></p>
                                <p className="description">
                                    Building responsive, secure, high-performance web applications — from React
                                    front-ends to PHP/Django back-ends — with a strong focus on usability and code quality.
                                </p>
                                <div className="d-flex gap-3 mb-4 justify-content-center justify-content-lg-start">
                                    <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}>View My Work</a>
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

export default DevHero;
