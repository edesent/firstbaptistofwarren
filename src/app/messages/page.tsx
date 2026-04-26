import PageHero from "@/components/PageHero";
import VideoGrid from "@/components/VideoGrid";
import { getRecentVideos } from "@/lib/youtube";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages | First Baptist Church of Warren",
  description:
    "Watch recent sermons and Sunday worship services from First Baptist Church of Warren, Michigan.",
};

export const revalidate = 600;

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Messages() {
  const videos = await getRecentVideos();
  const [featured, ...rest] = videos;

  return (
    <>
      <PageHero
        title="Messages"
        subtitle="Sermons and worship services from First Baptist Church"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {videos.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 text-sky-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p className="text-slate-500 text-lg mb-6">
                No messages available right now. Please check back soon.
              </p>
              <a
                href="https://www.youtube.com/channel/UCfqlXoudXNhzwX6F_Sl1XYQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
              >
                Visit Our YouTube Channel
              </a>
            </div>
          ) : (
            <>
              {/* Featured / Latest */}
              {featured && (
                <div className="mb-16">
                  <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
                    Latest Message
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sky-100">
                    <div className="relative aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${featured.id}`}
                        title={featured.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-sky-900 mb-2">
                        {featured.title}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {formatDate(featured.published)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Previous messages grid */}
              {rest.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-sky-900 mb-6">
                    Previous Messages
                  </h3>
                  <VideoGrid videos={rest} />
                </>
              )}

              <div className="text-center mt-16">
                <a
                  href="https://www.youtube.com/channel/UCfqlXoudXNhzwX6F_Sl1XYQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
                >
                  View All on YouTube
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
