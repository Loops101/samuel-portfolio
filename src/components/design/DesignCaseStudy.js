import React, { useEffect, useMemo } from 'react';
import { categoryLabel } from '../../utils/designCategories';
import ProtectedImage from './ProtectedImage';
import DesignProjectTile from './DesignProjectTile';

/**
 * DesignCaseStudy — full-screen, image-led project detail view.
 * Every image in the collection is laid out in a rhythm of full-width and
 * two-up pairs so a long gallery never becomes a monotonous stack.
 */
const DesignCaseStudy = ({ collection, allCollections = [], onClose, onSelect }) => {
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, collection]);

    const moreProjects = useMemo(
        () => allCollections.filter((c) => c.tag !== collection.tag).slice(0, 3),
        [allCollections, collection.tag]
    );

    // First image is the hero; the rest alternate full-width / pair.
    const rhythm = useMemo(() => {
        const rest = collection.images.slice(1);
        const blocks = [];
        for (let i = 0; i < rest.length;) {
            if (blocks.length % 2 === 0) {
                blocks.push({ type: 'full', images: rest.slice(i, i + 1) });
                i += 1;
            } else {
                blocks.push({ type: 'pair', images: rest.slice(i, i + 2) });
                i += 2;
            }
        }
        return blocks;
    }, [collection.images]);

    const hero = collection.images[0];

    return (
        <div className="design-case-overlay" role="dialog" aria-modal="true" aria-labelledby="design-case-title">
            <div className="design-case-top">
                <button className="design-case-back" onClick={onClose}>
                    <i className="bi bi-arrow-left"></i> Back to Design
                </button>
                <button className="design-case-close" onClick={onClose} aria-label="Close case study">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>

            <header className="design-case-header">
                <span className="design-tile-category">{categoryLabel(collection.category)}</span>
                <h1 id="design-case-title">{collection.title}</h1>
                {(collection.client || collection.year) && (
                    <p className="design-case-meta">
                        {[collection.client, collection.year].filter(Boolean).join(' · ')}
                    </p>
                )}
            </header>

            {hero && (
                <div className="design-case-hero-image">
                    <ProtectedImage publicId={hero.publicId} alt={collection.title} width={1400} crop="limit" sizes="100vw" eager />
                </div>
            )}

            <div className="design-case-body">
                <h3>Overview</h3>
                <p>{collection.description}</p>

                {collection.services?.length > 0 && (
                    <>
                        <h3>Services</h3>
                        <div className="design-case-services">
                            {collection.services.map((s) => <span key={s}>{s}</span>)}
                        </div>
                    </>
                )}
            </div>

            {rhythm.length > 0 && (
                <div className="design-case-gallery">
                    {rhythm.map((block, i) => (
                        <div
                            key={i}
                            className={block.type === 'full' ? 'design-case-gallery-full' : 'design-case-gallery-pair'}
                        >
                            {block.images.map((img) => (
                                <ProtectedImage
                                    key={img.publicId}
                                    publicId={img.publicId}
                                    alt={img.context?.alt || `${collection.title} detail`}
                                    width={1200}
                                    crop="limit"
                                    sizes={block.type === 'full' ? '100vw' : '(max-width: 575px) 100vw, 50vw'}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {collection.tools?.length > 0 && (
                <div className="design-case-body">
                    <h3>Tools</h3>
                    <div className="design-case-tools">
                        {collection.tools.map((t) => <span key={t}>{t}</span>)}
                    </div>
                </div>
            )}

            {moreProjects.length > 0 && (
                <div className="design-case-more">
                    <h3>More Projects</h3>
                    <div className="design-case-more-grid">
                        {moreProjects.map((c) => (
                            <DesignProjectTile key={c.tag} collection={c} onOpen={onSelect} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DesignCaseStudy;
