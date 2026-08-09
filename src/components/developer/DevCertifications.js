import React from 'react';
import shared from '../../data/shared/personal';
import SectionTitle from '../common/SectionTitle';

const DevCertifications = () => {
    const certs = shared.certDetails.filter((c) => c.tags.includes('dev'));

    return (
        <section id="certifications" className="resume section">
            <SectionTitle eyebrow="Credentials" title="Certifications" subtitle="Continuous learning, verified." />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    {certs.map((cert) => (
                        <div className="col-md-6" key={cert.title}>
                            <div className="resume-item h-100">
                                <h4>
                                    {cert.link ? (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                            {cert.title}
                                        </a>
                                    ) : cert.title}
                                </h4>
                                <h5>{cert.earnedOn}{cert.status ? ` · ${cert.status}` : ''}</h5>
                                <p className="company"><i className="bi bi-building"></i> {cert.organization}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevCertifications;
