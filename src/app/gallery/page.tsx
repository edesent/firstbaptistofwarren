"use client";

import PageHero from "@/components/PageHero";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const recentPhotos = [
  { src: "/images/gallery/extra-pastor-preaching.jpg", caption: "Pastor Hamilton preaching at FBC" },
  { src: "/images/gallery/extra-music-team.jpg", caption: "Our Music Ministry Team" },
  { src: "/images/gallery/extra-pastor-pulpit.jpg", caption: "Pastor at the pulpit" },
  { src: "/images/gallery/extra-bill-piano.jpg", caption: "Bro. Bill at the piano" },
  { src: "/images/gallery/extra-diana-piano.jpg", caption: "Sis. Diana at the piano" },
  { src: "/images/gallery/extra-aaron-trombone.jpg", caption: "Bro. Aaron with his trombone" },
  { src: "/images/pastor-preaching.jpg", caption: "Sunday worship service" },
  { src: "/images/congregation.jpg", caption: "Music ministry in action" },
  { src: "/images/church-1.jpg", caption: "Our historic church building" },
];

const archivePhotos = Array.from({ length: 21 }, (_, i) => ({
  src: `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  caption: `From our archives`,
}));

const allPhotos = [...recentPhotos, ...archivePhotos];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % allPhotos.length));
  }, []);
  const prev = useCallback(() => {
    setLightbox((i) =>
      i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length,
    );
  }, []);

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

  const current = lightbox !== null ? allPhotos[lightbox] : null;

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into life at First Baptist Church"
      />

      {/* Recent Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Recent Memories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              Life at FBC
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPhotos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setLightbox(i)}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-medium p-4 text-sm">
                    {photo.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Photos */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
              From the Archives
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              Years of Fellowship
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {archivePhotos.map((photo, i) => {
              const idx = recentPhotos.length + i;
              return (
                <button
                  key={photo.src}
                  onClick={() => setLightbox(idx)}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 ring-1 ring-sky-100"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/20 transition-colors" />
                </button>
              );
            })}
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

      {/* Lightbox */}
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
                src={current.src}
                alt={current.caption}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="text-white/90 text-center mt-4 text-sm">
              {current.caption} • {(lightbox ?? 0) + 1} / {allPhotos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
