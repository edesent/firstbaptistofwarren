import PageHero from "@/components/PageHero";
import GalleryClient, { type GalleryPhoto } from "./GalleryClient";
import { getDrivePhotos } from "@/lib/drive";

const fallbackPhotos: GalleryPhoto[] = [
  { src: "/images/gallery/extra-easter-service.jpg", fullSrc: "/images/gallery/extra-easter-service.jpg", caption: "A full sanctuary at FBC" },
  { src: "/images/gallery/extra-pastor-preaching.jpg", fullSrc: "/images/gallery/extra-pastor-preaching.jpg", caption: "Pastor Hamilton preaching at FBC" },
  { src: "/images/gallery/extra-music-team.jpg", fullSrc: "/images/gallery/extra-music-team.jpg", caption: "Our Music Ministry Team" },
  { src: "/images/gallery/extra-pastor-pulpit.jpg", fullSrc: "/images/gallery/extra-pastor-pulpit.jpg", caption: "Pastor at the pulpit" },
  { src: "/images/gallery/extra-bill-piano.jpg", fullSrc: "/images/gallery/extra-bill-piano.jpg", caption: "Bro. Bill at the piano" },
  { src: "/images/gallery/extra-diana-piano.jpg", fullSrc: "/images/gallery/extra-diana-piano.jpg", caption: "Sis. Diana at the piano" },
  { src: "/images/gallery/extra-aaron-trombone.jpg", fullSrc: "/images/gallery/extra-aaron-trombone.jpg", caption: "Bro. Aaron with his trombone" },
  { src: "/images/pastor-preaching.jpg", fullSrc: "/images/pastor-preaching.jpg", caption: "Sunday worship service" },
  { src: "/images/congregation.jpg", fullSrc: "/images/congregation.jpg", caption: "Music ministry in action" },
  { src: "/images/church-1.jpg", fullSrc: "/images/church-1.jpg", caption: "Our historic church building" },
  ...Array.from({ length: 21 }, (_, i) => {
    const path = `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`;
    return { src: path, fullSrc: path, caption: "From our archives" };
  }),
];

export default async function Gallery() {
  const drivePhotos = await getDrivePhotos();

  const photos: GalleryPhoto[] =
    drivePhotos.length > 0
      ? drivePhotos.map((p) => ({
          src: p.thumbSrc,
          fullSrc: p.fullSrc,
          caption: p.caption,
        }))
      : fallbackPhotos;

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into life at First Baptist Church"
      />
      <GalleryClient photos={photos} />
    </>
  );
}
