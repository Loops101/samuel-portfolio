import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from '../components/common/Helmet';
import ThemeToggle from '../components/common/ThemeToggle';

const NotFound = () => {
    return (
        <div className="landing-page">
            <Helmet title="Page Not Found — Samuel Mbuvi Obaigwa" description="The page you're looking for doesn't exist." />
            <ThemeToggle />
            <section className="landing-hero">
                <div className="landing-bg" aria-hidden="true"></div>
                <div className="landing-grid-overlay" aria-hidden="true"></div>
                <div className="landing-content">
                    <span className="landing-eyebrow">404</span>
                    <h1 className="landing-title">Page not found</h1>
                    <p className="landing-statement">
                        That route doesn't exist. Head back home and pick a path — Development or SOC.
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Link to="/" className="btn btn-primary">Back Home</Link>
                        <Link to="/developer" className="btn btn-outline">Development</Link>
                        <Link to="/soc" className="btn btn-outline">SOC / Security</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
