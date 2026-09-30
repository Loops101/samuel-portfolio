import React from 'react';
import { cld, cldSrcSet } from '../../utils/cloudinary';

/**
 * ProtectedImage — renders a Cloudinary image with casual download
 * protection: right-click menu disabled, dragging disabled, and a
 * transparent shield layered over the image so a long-press or drag grabs
 * the shield instead of the file.
 *
 * NOTE: this deters casual saving only. Anything a browser can display can
 * ultimately be captured (screenshot, devtools, network tab), so treat this
 * as a speed bump rather than true protection. For real control, upload
 * visibly watermarked versions.
 *
 * @param {string} publicId - Cloudinary public_id
 * @param {string} alt
 * @param {number} width - base width for the default src
 * @param {string} crop - Cloudinary crop mode
 * @param {string} sizes - responsive `sizes` attribute
 */
const ProtectedImage = ({ publicId, alt = '', width = 800, crop = 'fill', sizes, className = '', eager = false }) => {
    const block = (e) => { e.preventDefault(); return false; };

    return (
        <span className={`protected-image ${className}`}>
            <img
                src={cld(publicId, { width, crop })}
                srcSet={cldSrcSet(publicId)}
                sizes={sizes || '(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw'}
                alt={alt}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
                onContextMenu={block}
                onDragStart={block}
            />
            <span className="protected-image-shield" aria-hidden="true" onContextMenu={block} />
        </span>
    );
};

export default ProtectedImage;
