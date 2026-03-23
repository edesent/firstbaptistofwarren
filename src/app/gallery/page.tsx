import PageHero from "@/components/PageHero";

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into life at First Baptist Church"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Church Building",
              "Sunday Worship",
              "Music Ministry",
              "Bible Study",
              "Fellowship",
              "Church Events",
              "Baptisms",
              "Community Outreach",
              "Special Services",
            ].map((label, i) => (
              <div
                key={label}
                className={`group relative bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`flex items-center justify-center ${
                    i === 0 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <div className="text-center text-sky-600/50">
                    <svg
                      className={`mx-auto mb-2 ${i === 0 ? "w-20 h-20" : "w-12 h-12"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-medium p-4">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
