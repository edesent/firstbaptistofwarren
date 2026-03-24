import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function Ministries() {
  return (
    <>
      <PageHero
        title="Our Ministries"
        subtitle="Serving God through music, teaching, and fellowship"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Music Ministry - Featured */}
          <div className="bg-gradient-to-br from-sky-50 to-sky-100/50 rounded-2xl p-8 md:p-12 border border-sky-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
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
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                  Featured Ministry
                </div>
                <h2 className="text-3xl font-bold text-sky-900 mb-4">
                  FBCW Music Ministry
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Our music ministry is a vital part of worship at First Baptist
                  Church. Under the direction of Aaron Buczek (Vocal Music) and
                  Mrs. Diana Hamilton (Instrumental Music), we offer meaningful
                  musical worship in every service.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full" />
                    <span className="text-slate-700">Church Chorus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full" />
                    <span className="text-slate-700">
                      Men&apos;s Ensemble
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full" />
                    <span className="text-slate-700">
                      Piano &amp; Instrumental Accompaniment
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/congregation.jpg"
                  alt="FBCW Music Ministry ensemble"
                  width={750}
                  height={563}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Other Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Wednesday Bible Study",
                desc: "Join us every Wednesday at 6:30 PM for in-depth study of God's Word. All ages welcome.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Sunday Worship",
                desc: "Our Sunday services at 11:00 AM and 6:30 PM feature preaching from God's Word, congregational singing, and special music.",
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
              },
              {
                title: "Outreach & Evangelism",
                desc: "Our church is committed to sharing the Gospel with our community and beyond.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Fellowship",
                desc: "Connect with our church family through regular fellowship dinners, events, and community activities.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
            ].map((ministry) => (
              <div
                key={ministry.title}
                className="group bg-white rounded-2xl p-8 border border-sky-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-600 transition-colors">
                  <svg
                    className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={ministry.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-sky-900 text-xl mb-3">
                  {ministry.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {ministry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
