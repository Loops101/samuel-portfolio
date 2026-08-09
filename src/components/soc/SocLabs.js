import React from 'react';
import labs from '../../data/soc/labs';
import SectionTitle from '../common/SectionTitle';
import LabCard from './LabCard';

const SocLabs = () => {
    return (
        <section id="labs" className="portfolio section">
            <SectionTitle
                eyebrow="Hands-on"
                title="Labs & Practical Exercises"
                subtitle="Cloud security and security-operations labs completed as part of my certification training."
            />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="labs-grid">
                    {labs.map((lab) => (
                        <LabCard key={lab.title} lab={lab} />
                    ))}
                </div>

                {labs.length === 0 && (
                    <p className="text-center opacity-75">New labs coming soon — check back for write-ups.</p>
                )}
            </div>
        </section>
    );
};

export default SocLabs;
