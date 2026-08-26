"use client";

import { useEffect, useRef, useState } from "react";
import { GALLERY } from "./galleryData";

const ROTATE_MS = 5000;
const FADE_MS = 220;

export default function HeroGallery() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
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

  useEffect(() => {
    setFading(true);
    const t = setTimeout(() => {
      setDisplayed(current);
      setFading(false);
    }, FADE_MS);
    return () => clearTimeout(t);
  }, [current]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % GALLERY.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, current]);

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
    <div
      className="hero-gallery"
      aria-roledescription="carousel"
      aria-label="Sample of Doug's work"
      ref={stageRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-gallery-frame">
        <img
          className={fading ? "fade" : ""}
          src={photo.src}
          alt={photo.alt}
        />
        <button
          className="hero-gallery-nav prev"
          type="button"
          aria-label="Previous photo"
          onClick={prev}
        >
          ‹
        </button>
        <button
          className="hero-gallery-nav next"
          type="button"
          aria-label="Next photo"
          onClick={next}
        >
          ›
        </button>
        <div className="hero-gallery-caption">{photo.caption}</div>
      </div>
      <div className="hero-gallery-thumbs" role="tablist" aria-label="Choose a photo">
        {GALLERY.map((item, i) => {
          const active = displayed === i;
          return (
            <button
              key={item.src}
              type="button"
              className={"hero-gallery-thumb" + (active ? " active" : "")}
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
  );
}
