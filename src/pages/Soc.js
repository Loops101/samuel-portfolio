import React from 'react';
import { Helmet } from '../components/common/Helmet';
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Seam from '../components/common/Seam';
import useScrollSpy from '../hooks/useScrollSpy';

import SocHero from '../components/soc/SocHero';
import SocAbout from '../components/soc/SocAbout';
import SocSkills from '../components/soc/SocSkills';
import SocLabs from '../components/soc/SocLabs';
import SocTools from '../components/soc/SocTools';
import SocExperience from '../components/soc/SocExperience';
import SocCertifications from '../components/soc/SocCertifications';
import ContactSection from '../components/common/ContactSection';

const navLinks = [
    { id: 'hero', label: 'Section Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'skills', label: 'Skills', icon: 'bi-shield-check' },
    { id: 'labs', label: 'Labs', icon: 'bi-terminal' },
    { id: 'tools', label: 'Tools', icon: 'bi-tools' },
    { id: 'experience', label: 'Experience', icon: 'bi-briefcase' },
    { id: 'certifications', label: 'Certifications', icon: 'bi-award' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
];

const Soc = () => {
    const activeSection = useScrollSpy('hero');

    return (
        <div className="index-page mode-soc">
            <Helmet
                title="Samuel Mbuvi Obaigwa — SOC Analyst & Cybersecurity"
                description="SOC / Cybersecurity portfolio: security labs, tools, skills, experience and certifications."
            />

            <Nav mode="soc" activeSection={activeSection} links={navLinks} />
            <ThemeToggle />

            <main className="main">
                <SocHero />
                <SocAbout />
                <Seam />
                <SocSkills />
                <Seam />
                <SocLabs />
                <Seam />
                <SocTools />
                <Seam />
                <SocExperience />
                <Seam />
                <SocCertifications />
                <ContactSection
                    eyebrow="Let's connect"
                    intro="Open to SOC / security opportunities and collaboration — reach out anytime."
                    subjectDefault="Security opportunity"
                />
            </main>

            <Footer mode="soc" />
        </div>
    );
};

export default Soc;
