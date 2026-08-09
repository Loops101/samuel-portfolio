import React from 'react';
import { Helmet } from '../components/common/Helmet';
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import Seam from '../components/common/Seam';
import useScrollSpy from '../hooks/useScrollSpy';

import DevHero from '../components/developer/DevHero';
import DevAbout from '../components/developer/DevAbout';
import DevSkills from '../components/developer/DevSkills';
import DevProjects from '../components/developer/DevProjects';
import DevExperience from '../components/developer/DevExperience';
import DevCertifications from '../components/developer/DevCertifications';
import DevServices from '../components/developer/DevServices';
import DevTestimonials from '../components/developer/DevTestimonials';
import ContactSection from '../components/common/ContactSection';

const navLinks = [
    { id: 'hero', label: 'Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'skills', label: 'Skills', icon: 'bi-code-slash' },
    { id: 'projects', label: 'Projects', icon: 'bi-images' },
    { id: 'experience', label: 'Experience', icon: 'bi-briefcase' },
    { id: 'certifications', label: 'Certifications', icon: 'bi-award' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
];

const Developer = () => {
    const activeSection = useScrollSpy('hero');

    return (
        <div className="index-page mode-developer">
            <Helmet
                title="Samuel Mbuvi Obaigwa — Full-Stack Developer"
                description="Full-Stack Web Developer portfolio: React, PHP & Django projects, skills, experience and certifications."
            />

            <Nav mode="developer" activeSection={activeSection} links={navLinks} />

            <main className="main">
                <DevHero />
                <DevAbout />
                <Seam />
                <DevSkills />
                <Seam />
                <DevProjects />
                <Seam />
                <DevExperience />
                <Seam />
                <DevCertifications />
                <Seam />
                <DevServices />
                <DevTestimonials />
                <ContactSection
                    eyebrow="Let's build something"
                    intro="Have a project in mind? Reach out — I'd love to help bring it to life."
                    subjectDefault="Project inquiry"
                />
            </main>

            <Footer mode="developer" />
        </div>
    );
};

export default Developer;
