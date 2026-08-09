import React from 'react';
import shared from '../../data/shared/personal';
import ThemeToggle from './ThemeToggle';

const Footer = ({ mode }) => {
    return (
        <footer className="footer text-center py-4">
            <div className="container">
                <div className="copyright text-center">
                    <p>
                        © <span>Copyright</span>{' '}
                        <strong className="px-1 sitename">{shared.personal.name}</strong>{' '}
                        <span>All Rights Reserved</span>
                    </p>
                </div>

                <div className="contact-info-footer mb-3">
                    <a
                        href={`mailto:${shared.contactDetails.email}`}
                        className="mx-2 text-decoration-none highlight-hover"
                    >
                        <i className="bi bi-envelope me-1"></i> {shared.contactDetails.email}
                    </a>
                </div>

                <div className="d-flex justify-content-center">
                    <ThemeToggle className="footer-toggle" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
