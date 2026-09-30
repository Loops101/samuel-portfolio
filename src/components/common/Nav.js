import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shared from '../../data/shared/personal';
import { useTheme } from './ThemeContext';

const MODES = {
    developer: { label: 'Developer', path: '/developer', icon: 'bi-code-slash' },
    soc: { label: 'SOC / Security', path: '/soc', icon: 'bi-shield-lock' },
    design: { label: 'Design', path: '/design', icon: 'bi-palette' },
};

/**
 * Nav — shared header for the Developer, SOC, and Design portfolios.
 *
 * @param {string} mode - 'developer' | 'soc' | 'design'
 * @param {string} activeSection - id of the section currently in view
 * @param {Array<{id:string,label:string,icon:string}>} links - in-page nav links
 */
const Nav = ({ mode, activeSection, links }) => {
    const [headerShow, setHeaderShow] = useState(false);
    const { theme } = useTheme();

    const otherModes = Object.keys(MODES).filter((m) => m !== mode);

    const handleNavClick = (id) => {
        if (headerShow) setHeaderShow(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${headerShow ? 'header-show' : ''}`}>
            <button
                className="header-toggle d-xl-none"
                onClick={() => setHeaderShow(!headerShow)}
                aria-label={headerShow ? 'Close menu' : 'Open menu'}
                aria-expanded={headerShow}
            >
                <i className={`bi ${headerShow ? 'bi-x' : 'bi-list'}`}></i>
            </button>

            <div className="header-container">
                <div className="header-top d-flex align-items-center justify-content-between mb-3 px-3">
                    <Link to="/" className="logo d-flex align-items-center" aria-label="Back to home">
                        <img
                            src={theme === 'light' ? shared.logos.logogradient : shared.logos.logo}
                            alt="Logo"
                            className="img-fluid"
                            style={{ maxHeight: '36px' }}
                        />
                    </Link>
                </div>

                <Link to="/" className="nav-home-link" onClick={() => setHeaderShow(false)}>
                    <i className="bi bi-arrow-left"></i> Home
                </Link>

                <nav className="navmenu">
                    <ul>
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={activeSection === link.id ? 'active' : ''}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                                >
                                    <i className={`bi ${link.icon} navicon`}></i> {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mode-switch-group px-2 mt-2">
                    {otherModes.map((m) => (
                        <Link key={m} to={MODES[m].path} className={`mode-switch-link mode-switch-link--${m}`}>
                            <i className={`bi ${MODES[m].icon}`}></i>
                            Switch to {MODES[m].label}
                        </Link>
                    ))}
                </div>

                <div className="footer-actions d-flex align-items-center justify-content-center mt-auto pb-3 pt-3 gap-3">
                    <div className="social-links m-0">
                        <a href={shared.socialMediaUrl.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href={shared.socialMediaUrl.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;
