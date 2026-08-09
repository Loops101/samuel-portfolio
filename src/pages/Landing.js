import React from 'react';
import { Link } from 'react-router-dom';
import shared from '../data/shared/personal';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';

const CircuitFork = () => (
    <svg
        className="circuit-fork"
        viewBox="0 0 520 120"
        role="presentation"
        aria-hidden="true"
    >
        <line x1="260" y1="0" x2="260" y2="46" />
        <circle cx="260" cy="46" r="5" />
        <path className="fork-dev" d="M260,46 C260,80 120,70 90,110" />
        <path className="fork-soc" d="M260,46 C260,80 400,70 430,110" />
        <circle className="fork-dev" cx="90" cy="112" r="4" />
        <circle className="fork-soc" cx="430" cy="112" r="4" />
    </svg>
);

const Landing = () => {
    return (
        <div className="landing-page">
            <ThemeToggle />

            <section className="landing-hero">
                <div className="landing-bg" aria-hidden="true"></div>
                <div className="landing-grid-overlay" aria-hidden="true"></div>

                <div className="landing-content">
                    <span className="landing-eyebrow">Two disciplines, one engineer</span>

                    <h1 className="landing-title">
                        <span className="split">{shared.personal.name}</span>
                    </h1>

                    <p className="landing-tagline">
                        <span className="dev-word">Software Developer</span>
                        {' '}+{' '}
                        <span className="soc-word">SOC / Cybersecurity</span>
                    </p>

                    <p className="landing-statement">{shared.personal.landingStatement}</p>

                    <CircuitFork />

                    <div className="path-cards">
                        <Link to="/developer" className="path-card path-card--dev" data-aos="fade-up" data-aos-delay="100">
                            <span className="path-card-icon"><i className="bi bi-code-slash"></i></span>
                            <h3>Development</h3>
                            <p>Explore my software development portfolio — full-stack projects, skills, and experience.</p>
                            <span className="path-cta">Enter Development <i className="bi bi-arrow-right"></i></span>
                        </Link>

                        <Link to="/soc" className="path-card path-card--soc" data-aos="fade-up" data-aos-delay="200">
                            <span className="path-card-icon"><i className="bi bi-shield-lock"></i></span>
                            <h3>SOC / Security</h3>
                            <p>Explore my cybersecurity and SOC portfolio — labs, tools, and security certifications.</p>
                            <span className="path-cta">Enter SOC <i className="bi bi-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="landing-footer-links">
                <a href="#about-mini">About Me</a>
                <a href={`mailto:${shared.contactDetails.email}`}>
                    <i className="bi bi-envelope"></i> {shared.contactDetails.email}
                </a>
                <a href={shared.socialMediaUrl.github} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i> GitHub
                </a>
                <a href={shared.socialMediaUrl.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i> LinkedIn
                </a>
            </div>

            <section id="about-mini" className="container" style={{ maxWidth: '720px', padding: '20px 20px 60px', textAlign: 'center' }}>
                <p style={{ opacity: 0.75, lineHeight: 1.8, fontSize: '0.98rem' }}>
                    {shared.personalDetails.about.split('\n\n')[0]}
                </p>
            </section>

            <Footer mode="landing" />
        </div>
    );
};

export default Landing;
