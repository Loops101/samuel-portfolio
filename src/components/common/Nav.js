import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shared from '../../data/shared/personal';
import { useTheme } from './ThemeContext';

/**
 * Nav — shared header for the Developer and SOC portfolios.
 *
 * @param {string} mode - 'developer' | 'soc'
 * @param {string} activeSection - id of the section currently in view
 * @param {Array<{id:string,label:string,icon:string}>} links - in-page nav links
 */
const Nav = ({ mode, activeSection, links }) => {
    const [headerShow, setHeaderShow] = useState(false);
    const { theme } = useTheme();

    const otherMode = mode === 'developer' ? 'soc' : 'developer';
    const otherModeLabel = mode === 'developer' ? 'SOC / Security' : 'Developer';
    const otherModePath = mode === 'developer' ? '/soc' : '/developer';

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

                <div className="px-2 mt-2">
                    <Link
                        to={otherModePath}
                        className={`mode-switcher-link mode-${otherMode}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            border: '1px solid var(--border-color)',
                            fontFamily: 'var(--mono-font)',
                            fontSize: '12px',
                            color: 'var(--accent-color)',
                        }}
                    >
                        <i className={`bi ${mode === 'developer' ? 'bi-shield-lock' : 'bi-code-slash'}`}></i>
                        Switch to {otherModeLabel}
                    </Link>
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
