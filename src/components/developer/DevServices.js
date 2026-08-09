import React, { useEffect, useRef } from 'react';
import services from '../../data/developer/services';
import SectionTitle from '../common/SectionTitle';

const DevServices = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselRef.current.scrollBy({ left: 370, behavior: 'smooth' });
                }
            }
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="services section">
            <SectionTitle
                eyebrow="How I can help"
                title="Services"
                subtitle="I provide modern web solutions that blend creativity, functionality, and emerging technologies for lasting impact."
            />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-start services-carousel" ref={carouselRef}>
                    <div className="col-lg-4 col-md-6 col-11">
                        <div className="service-card intro-card h-100">
                            <h2 className="service-heading" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
                                <div>Innovative web</div>
                                <div><span style={{ color: 'var(--accent-color)' }}>development solutions</span></div>
                            </h2>
                            <p>
                                I design, develop, and maintain responsive, high-performance websites and applications
                                that enhance digital experiences and business growth.
                            </p>
                        </div>
                    </div>

                    {[...services, ...services].map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-11" key={`${service.title}-${index}`}>
                            <div className="service-card h-100">
                                <div className="service-icon"><i className={service.icon}></i></div>
                                <h3>{service.title} <span>{service.highlight}</span></h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevServices;
