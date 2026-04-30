import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/pastor-preaching.jpg"
          alt="Pastor preaching at First Baptist Church"
          fill
          className="object-cover"
          priority
        />
        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-sky-800/70 to-sky-950/85" />

        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sky-100 text-sm font-medium">
              Join Us This Sunday at 11:00 AM
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-sky-200 to-white bg-clip-text text-transparent">
              First Baptist Church
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-sky-100 mb-4 max-w-3xl mx-auto font-light">
            Come and fellowship with us!
          </p>
          <p className="text-lg text-sky-200/80 mb-10 max-w-2xl mx-auto">
            An Independent Fundamental Baptist Church located in the Historical
            District of Warren, Michigan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/plan-of-salvation"
              className="px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Plan of Salvation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-sky-700/50 backdrop-blur-md text-white rounded-xl font-semibold text-lg hover:bg-sky-700/70 transition-all border border-sky-400/30"
            >
              Visit Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-sky-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              Join Us for Worship
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              We warmly invite you and your family to join us at any of our
              weekly services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                day: "Sunday Morning",
                time: "11:00 AM",
                type: "Worship Service",
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
              },
              {
                day: "Sunday Evening",
                time: "6:30 PM",
                type: "Evening Service",
                icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
              },
              {
                day: "Wednesday",
                time: "6:30 PM",
                type: "Bible Study",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
            ].map((service) => (
              <div
                key={service.day}
                className="group bg-gradient-to-br from-sky-50 to-sky-100/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-sky-100"
              >
                <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-sky-900 text-xl mb-2">
                  {service.day}
                </h3>
                <p className="text-3xl font-bold text-sky-600 mb-1">
                  {service.time}
                </p>
                <p className="text-slate-500">{service.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-6">
                About Our Church
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                First Baptist Church of Warren is an Independent Fundamental
                Baptist Church located in the Historical District of Warren,
                Michigan. We believe in the whole Bible from Genesis 1:1 to
                Revelation 22:21 as the verbally inspired and infallible Word of
                God.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Under the leadership of Pastor Jason Hamilton, our congregation
                is dedicated to evangelizing individuals and teaching biblical
                obedience. We welcome you to come and fellowship with us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/statement-of-faith"
                  className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
                >
                  Our Beliefs
                </Link>
                <Link
                  href="/about/pastor-and-staff"
                  className="px-6 py-3 bg-white text-sky-700 rounded-lg font-medium hover:bg-sky-100 transition-colors border border-sky-200"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/images/front-of-building.JPG"
                  alt="First Baptist Church of Warren building"
                  width={750}
                  height={563}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white rounded-xl p-5 shadow-xl">
                <div className="text-3xl font-bold">Est. 1857</div>
                <div className="text-sky-200 text-sm">
                  Warren, MI Historical District
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Get involved and grow in your faith through our church ministries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Music Ministry",
                desc: "Our music ministry features a chorus, men's ensemble, and instrumental accompaniment for all services.",
                icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
                link: "/about/pastor-and-staff",
                linkLabel: "Meet our Ministry Team",
              },
              {
                title: "Bible Study",
                desc: "Join us every Wednesday evening at 6:30 PM for in-depth Bible study and spiritual growth.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Fellowship",
                desc: "Connect with our church family through regular fellowship opportunities and community events.",
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
                {ministry.link && (
                  <Link
                    href={ministry.link}
                    className="inline-flex items-center gap-2 mt-4 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    {ministry.linkLabel}
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
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/ministries"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
            >
              Learn More About Our Ministries
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Salvation */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do You Know Where You&apos;ll Spend Eternity?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            &ldquo;For all have sinned, and come short of the glory of
            God&rdquo; — Romans 3:23
          </p>
          <Link
            href="/about/plan-of-salvation"
            className="inline-block px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Learn God&apos;s Plan of Salvation
          </Link>
        </div>
      </section>

      {/* Meet Our Ministry Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Serving Together
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              Meet Our Ministry Team
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              The faithful servants who help our church family thrive
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Pastor Jason Hamilton",
                role: "Pastor",
                photo: "/images/jason-hamilton.jpg",
              },
              {
                name: "Bro. Aaron Buczek",
                role: "Director of Vocal Music",
                photo: "/images/aaron-buczek.jpg",
              },
              {
                name: "Sis. Diana Hamilton",
                role: "Director of Instrumental Music",
                photo: "/images/diana-hamilton.jpg",
              },
              {
                name: "Bro. Bill Proulx",
                role: "Church Treasurer",
                photo: "/images/bill-proulx.jpg",
              },
              {
                name: "Sis. Sherry Dusik",
                role: "Church Secretary",
                photo: "/images/sherry-dusik.jpg",
              },
              {
                name: "Sis. Jennifer Tracy",
                role: "Social Media Ministry",
                photo: "/images/jennifer-tracy.jpg",
              },
              {
                name: "Paul & Dolores Roman",
                role: "Music Librarian & Trumpet",
                photo: "/images/paul-dolores-roman.jpg",
              },
              {
                name: "Chris & Tiffany Lemorie",
                role: "Food Ministry",
                photo: "/images/chris-tiffany-lemorie.jpg",
              },
              {
                name: "Sis. Rhonda Edgil",
                role: "Hospitality Ministry",
                photo: "/images/rhonda-edgil.jpg",
              },
            ].map((member) => (
              <Link
                key={member.name}
                href="/about/pastor-and-staff"
                className="group flex items-center gap-4 bg-sky-50/60 rounded-xl p-4 border border-sky-100 hover:bg-white hover:shadow-lg hover:border-sky-200 transition-all"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-white shadow-md">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sky-900 text-sm leading-tight truncate">
                    {member.name}
                  </h4>
                  <p className="text-sky-600 text-xs mt-0.5">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about/pastor-and-staff"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
            >
              See Full Team Bios
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-6">
                Come Visit Us
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
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
                      31707 7th Street, Warren, MI 48092
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
              >
                Get Directions
                <svg
                  className="w-5 h-5"
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
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.5!2d-83.027!3d42.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s31707+7th+St%2C+Warren%2C+MI+48092!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
