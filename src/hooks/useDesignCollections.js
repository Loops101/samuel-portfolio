import { useEffect, useMemo, useState } from "react";
import collections from "../data/design/collections";
import { fetchCollections, isCloudinaryConfigured } from "../utils/cloudinary";

/**
 * useDesignCollections — loads every Design collection's images from
 * Cloudinary in one pass (one request per tag, run in parallel).
 *
 * Each returned collection gains:
 *   images[]  — { publicId, width, height, ... } from Cloudinary
 *   cover     — the first image, used as the collection's cover art
 *
 * Collections that return no images are filtered out, so an empty or
 * not-yet-tagged folder simply doesn't render rather than showing a broken
 * tile. If Cloudinary isn't configured yet, `configured` is false and the
 * UI shows a setup hint instead of failing silently.
 */
const useDesignCollections = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(isCloudinaryConfigured());

  const tags = useMemo(() => collections.map((c) => c.tag), []);

  useEffect(() => {
    let cancelled = false;

    if (!isCloudinaryConfigured()) {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    fetchCollections(tags).then((result) => {
      if (!cancelled) {
        setImages(result);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [tags]);

  const resolved = useMemo(
    () =>
      collections
        .map((c) => {
          const found = images[c.tag] || [];
          const selectedCover = found.find(
            (image) => image.publicId === c.coverPublicId,
          );
          return {
            ...c,
            images: found,
            cover: selectedCover || found[0] || null,
          };
        })
        .filter((c) => c.images.length > 0),
    [images],
  );

  return {
    collections: resolved,
    loading,
    configured: isCloudinaryConfigured(),
  };
};

export default useDesignCollections;
