import React from 'react';
import testimonials from '../../data/developer/testimonials';
import SectionTitle from '../common/SectionTitle';

const DevTestimonials = () => {
    return (
        <section id="testimonials" className="testimonials section light-background">
            <SectionTitle eyebrow="Client feedback" title="Testimonials" subtitle="What my clients and partners say about my work and professionalism." />

            <div className="container overflow-hidden">
                <div className="testimonial-masonry continuous-scroll-track">
                    {[...testimonials, ...testimonials].map((t, index) => (
                        <div className={`testimonial-item ${t.highlight ? 'highlight' : ''}`} key={`${t.name}-${index}`}>
                            <div className="testimonial-content h-100">
                                <div className="quote-pattern"><i className="bi bi-quote"></i></div>
                                <p>{t.text}</p>
                                <div className="client-info">
                                    <div className="client-image"><img src={t.image} alt="Client" /></div>
                                    <div className="client-details">
                                        <h3>{t.name}</h3>
                                        <span className="position">{t.position}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevTestimonials;
