import PageHero from "@/components/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-900 text-lg">
                      Address
                    </h3>
                    <p className="text-slate-600">
                      31707 7th Street
                      <br />
                      Warren, MI 48092
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-900 text-lg">
                      Phone
                    </h3>
                    <p className="text-slate-600">586-943-0573</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-900 text-lg">
                      Email
                    </h3>
                    <p className="text-slate-600">fbcwmich@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <h3 className="font-bold text-sky-900 text-lg mb-4">
                  Service Times
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">
                      Sunday Morning
                    </span>
                    <span className="text-sky-600 font-bold">11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">
                      Sunday Evening
                    </span>
                    <span className="text-sky-600 font-bold">6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">
                      Wednesday Bible Study
                    </span>
                    <span className="text-sky-600 font-bold">6:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-bold text-sky-900 text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center hover:bg-sky-600 group transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center hover:bg-sky-600 group transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-8">
                Find Us
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-sky-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.5!2d-83.027!3d42.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s31707+7th+St%2C+Warren%2C+MI+48092!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location"
                />
              </div>
              <div className="mt-6 bg-sky-50 rounded-xl p-4 border border-sky-100">
                <p className="text-slate-600 text-sm">
                  <strong className="text-sky-900">Directions:</strong> We are
                  located in the Historical District of Warren, Michigan on 7th
                  Street. Look for our church building at 31707 7th Street.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
