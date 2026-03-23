import PageHero from "@/components/PageHero";

export default function InMemory() {
  return (
    <>
      <PageHero
        title="In Memory"
        subtitle="Honoring those who faithfully served"
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Placeholder photo */}
            <div className="w-48 h-48 bg-gradient-to-br from-sky-200 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <svg
                className="w-20 h-20 text-sky-600/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-sky-900 mb-2">
              Dr. Timothy Parrish
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto my-6 rounded-full" />

            <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left">
              <p>
                Dr. Timothy Parrish faithfully served the Lord and the
                congregation of First Baptist Church of Warren. His dedication
                to the ministry and love for God&apos;s Word left a lasting
                impact on all who knew him.
              </p>
              <p>
                We honor his memory and the legacy of faithful service he left
                behind. His commitment to the Gospel and to the people of this
                church will never be forgotten.
              </p>
              <p className="text-center italic text-sky-700 text-xl mt-8">
                &ldquo;Well done, thou good and faithful servant.&rdquo;
                <br />
                <span className="text-base text-sky-500">
                  — Matthew 25:21
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
