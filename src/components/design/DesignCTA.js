import React from 'react';

/**
 * DesignCTA — closing banner. Scrolls to the existing shared ContactSection
 * (rendered right below this on the page) rather than duplicating a form.
 */
const DesignCTA = () => {
    const scrollToContact = (e) => {
        e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="design-cta" data-aos="fade-up">
            <h2>Have a project in mind?</h2>
            <p>Let's turn the idea into something people remember.</p>
            <a href="#contact" className="design-cta-button" onClick={scrollToContact}>
                Let's Talk <i className="bi bi-arrow-right"></i>
            </a>
        </section>
    );
};

export default DesignCTA;
