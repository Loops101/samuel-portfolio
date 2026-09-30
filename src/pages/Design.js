import React, { useState } from 'react';
import { Helmet } from '../components/common/Helmet';
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import useScrollSpy from '../hooks/useScrollSpy';
import useDesignCollections from '../hooks/useDesignCollections';
import '../styles/design.css';

import DesignHero from '../components/design/DesignHero';
import DesignAbout from '../components/design/DesignAbout';
import DesignFeatured from '../components/design/DesignFeatured';
import DesignWork from '../components/design/DesignWork';
import DesignClients from '../components/design/DesignClients';
import DesignCTA from '../components/design/DesignCTA';
import DesignCaseStudy from '../components/design/DesignCaseStudy';
import ContactSection from '../components/common/ContactSection';

const navLinks = [
    { id: 'hero', label: 'Section Home', icon: 'bi-house' },
    { id: 'featured', label: 'Featured', icon: 'bi-star' },
    { id: 'work', label: 'Work', icon: 'bi-images' },
    { id: 'about', label: 'About & CV', icon: 'bi-file-earmark-person' },
    { id: 'clients', label: 'Clients', icon: 'bi-people' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
];

const Design = () => {
    const activeSection = useScrollSpy('hero');
    const [activeProject, setActiveProject] = useState(null);
    const { collections, loading, configured } = useDesignCollections();

    return (
        <div className="index-page mode-design design-page">
            <Helmet
                title="Samuel Mbuvi Obaigwa — Graphic Designer"
                description="Graphic design portfolio: brand identity, digital graphics, campaigns and print design for real clients."
            />

            <Nav mode="design" activeSection={activeSection} links={navLinks} />
            <ThemeToggle />

            <main className="main">
                <DesignHero collections={collections} />

                {loading && (
                    <p className="design-empty-state">Loading work…</p>
                )}

                {!loading && !configured && (
                    <div className="design-setup-note">
                        <h3>Cloudinary not connected yet</h3>
                        <p>
                            Set your cloud name in <code>src/utils/cloudinary.js</code>, enable
                            <strong> Resource list</strong> under Settings → Security in Cloudinary, and tag each
                            folder's images with the tags listed in <code>src/data/design/collections.js</code>.
                            Your work will then appear here automatically.
                        </p>
                    </div>
                )}

                {!loading && configured && collections.length === 0 && (
                    <p className="design-empty-state">
                        No tagged images found yet — tag your Cloudinary folders to populate this page.
                    </p>
                )}

                {!loading && collections.length > 0 && (
                    <>
                        <DesignFeatured collections={collections} onOpen={setActiveProject} />
                        <DesignWork collections={collections} onOpen={setActiveProject} />
                    </>
                )}

                <DesignAbout />
                <DesignClients collections={collections} />

                <DesignCTA />
                <ContactSection
                    eyebrow="Let's create"
                    intro="Have a brand or project that needs a visual identity? Let's talk."
                    subjectDefault="Design inquiry"
                />
            </main>

            <Footer mode="design" />

            {activeProject && (
                <DesignCaseStudy
                    collection={activeProject}
                    allCollections={collections}
                    onClose={() => setActiveProject(null)}
                    onSelect={setActiveProject}
                />
            )}
        </div>
    );
};

export default Design;
