"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export interface GalleryPhoto {
  src: string;
  fullSrc: string;
  caption: string;
}

export default function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);
  const prev = useCallback(() => {
    setLightbox((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const current = lightbox !== null ? photos[lightbox] : null;

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Memories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              Life at FBC
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {photos.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 ring-1 ring-sky-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/20 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">
              Visit our{" "}
              <a
                href="https://www.facebook.com/fbcwmich"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 font-medium hover:text-sky-700 underline"
              >
                Facebook page
              </a>{" "}
              for the latest photos and updates from our church family.
            </p>
          </div>
        </div>
      </section>

      {current && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 text-white hover:text-sky-300 transition-colors p-2"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-sky-300 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-sky-300 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={current.fullSrc}
                alt={current.caption}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                unoptimized
              />
            </div>
            <p className="text-white/90 text-center mt-4 text-sm">
              {current.caption} • {(lightbox ?? 0) + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
