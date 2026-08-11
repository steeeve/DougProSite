"use client";

import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string; caption: string };

const GALLERY: Photo[] = [
  { src: "/assets/work-snow-removal.png", alt: "Cleared concrete driveway after a snowstorm", caption: "Snow Removal" },
  { src: "/assets/work-mowing.png", alt: "Freshly mowed lawn with clean, straight cut lines", caption: "Mowing" },
  { src: "/assets/work-garden-hedge.png", alt: "Neatly trimmed flowering hedge beside a front porch", caption: "Garden Clean Up" },
  { src: "/assets/work-pathway-flagstone.png", alt: "Flagstone pathway laid between a house and a fence", caption: "Pathways" },
  { src: "/assets/work-fence-gate.png", alt: "Newly built stained wood fence and gate", caption: "Fences" },
  { src: "/assets/work-concrete-repair.png", alt: "Concrete walkway crack sealed and repaired", caption: "General Repairs" },
  { src: "/assets/work-garden-flowers.png", alt: "Landscaped garden bed with flowers, shrubs, and rock", caption: "Garden Clean Up" },
  { src: "/assets/work-sod-pathway.png", alt: "Freshly laid sod beside a new stone paver path", caption: "Pathways" },
  { src: "/assets/work-window-well.png", alt: "Landscaped window well with new sod and timber border", caption: "Garden Clean Up" },
  { src: "/assets/work-gravel-landscape.png", alt: "Modern gravel landscape with ornamental grasses and boulders", caption: "Garden Clean Up" },
];

const ROTATE_MS = 5000;
const FADE_MS = 220;

export default function Gallery() {
  const [current, setCurrent] = useState(0); // target index
  const [displayed, setDisplayed] = useState(0); // index actually rendered
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const go = (i: number) => {
    setCurrent((c) => {
      const n = (i + GALLERY.length) % GALLERY.length;
      return n === c ? c : n;
    });
  };
  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  // Fade out, swap the displayed image, fade back in.
  useEffect(() => {
    setFading(true);
    const t = setTimeout(() => {
      setDisplayed(current);
      setFading(false);
    }, FADE_MS);
    return () => clearTimeout(t);
  }, [current]);

  // Auto-advance every 5s; resets whenever `current` changes (incl. manual nav).
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % GALLERY.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, current]);

  // Arrow-key navigation when the gallery is focused.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (!stageRef.current || !active) return;
      if (!stageRef.current.contains(active)) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const photo = GALLERY[displayed];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>A look at the work.</h2>
          <p>A rotating sample of jobs Doug has taken on around the neighborhood.</p>
        </div>

        <div
          className="gallery-stage"
          aria-roledescription="carousel"
          aria-label="Doug's work gallery"
          ref={stageRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="gallery-frame">
            <img
              id="galleryMain"
              className={fading ? "fade" : ""}
              src={photo.src}
              alt={photo.alt}
            />
            <button
              className="gallery-nav prev"
              type="button"
              aria-label="Previous photo"
              onClick={prev}
            >
              ‹
            </button>
            <button
              className="gallery-nav next"
              type="button"
              aria-label="Next photo"
              onClick={next}
            >
              ›
            </button>
            <div className="gallery-caption">{photo.caption}</div>
          </div>
          <div className="gallery-thumbs" role="tablist" aria-label="Choose a photo">
            {GALLERY.map((item, i) => {
              const active = displayed === i;
              return (
                <button
                  key={item.src}
                  type="button"
                  className={"gallery-thumb" + (active ? " active" : "")}
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show photo ${i + 1}: ${item.caption}`}
                  onClick={() => go(i)}
                >
                  <img src={item.src} alt="" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
