import React from 'react';
import { categoryLabel } from '../../utils/designCategories';
import ProtectedImage from './ProtectedImage';

/**
 * DesignProjectTile — image-first tile for the Design section.
 * On mobile the hover overlay can't be triggered, so the caption variant is
 * used there and shows the TITLE ONLY (no description or category run-on),
 * which keeps narrow cards from overflowing with text.
 *
 * @param {object} collection - resolved collection with a `cover` image
 * @param {function} onOpen
 * @param {string} variant - 'overlay' | 'caption'
 * @param {string} className
 */
const DesignProjectTile = ({ collection, onOpen, variant = 'overlay', className = '', eager = false }) => {
    const activate = () => onOpen(collection);
    const coverId = collection.cover?.publicId;

    return (
        <div
            className={`design-tile ${className}`}
            role="button"
            tabIndex={0}
            onClick={activate}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } }}
            aria-label={`Open case study: ${collection.title}`}
        >
            <div className="design-tile-media">
                <ProtectedImage publicId={coverId} alt={collection.title} width={900} eager={eager} />
                {variant === 'overlay' && (
                    <div className="design-tile-overlay">
                        <span className="design-tile-category">{categoryLabel(collection.category)}</span>
                        <h3 className="design-tile-title">
                            {collection.title}
                            <i className="bi bi-arrow-up-right"></i>
                        </h3>
                    </div>
                )}
            </div>

            {variant === 'caption' && (
                <div className="design-tile-caption">
                    <h3 className="design-tile-caption-title">{collection.title}</h3>
                    {/* Category is hidden on mobile via CSS to avoid text overflow
                        on narrow two-up cards — the title alone is enough there. */}
                    <span className="design-tile-caption-category">{categoryLabel(collection.category)}</span>
                </div>
            )}
        </div>
    );
};

export default DesignProjectTile;
