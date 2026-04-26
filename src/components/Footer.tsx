import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20">
                <Image
                  src="/images/fbc-logo.png"
                  alt="First Baptist Church of Warren"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">First Baptist Church</div>
                <div className="text-sky-300 text-sm">Warren, Michigan</div>
              </div>
            </div>
            <p className="text-sky-200 text-sm leading-relaxed">
              An Independent Fundamental Baptist Church located in the
              Historical District of Warren, Michigan.
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Times</h3>
            <div className="space-y-3 text-sky-200 text-sm">
              <div>
                <div className="font-semibold text-white">Sunday</div>
                <div>11:00 AM &amp; 6:30 PM</div>
              </div>
              <div>
                <div className="font-semibold text-white">Wednesday</div>
                <div>6:30 PM – Bible Study</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/about/statement-of-faith"
                className="block text-sky-200 hover:text-white transition-colors"
              >
                Statement of Faith
              </Link>
              <Link
                href="/about/plan-of-salvation"
                className="block text-sky-200 hover:text-white transition-colors"
              >
                Plan of Salvation
              </Link>
              <Link
                href="/about/pastor-and-staff"
                className="block text-sky-200 hover:text-white transition-colors"
              >
                Pastor &amp; Staff
              </Link>
              <Link
                href="/ministries"
                className="block text-sky-200 hover:text-white transition-colors"
              >
                Ministries
              </Link>
              <Link
                href="/contact"
                className="block text-sky-200 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sky-200 text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-sky-400 mt-0.5 shrink-0"
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
                <span>31707 7th Street, Warren, MI 48092</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-sky-400 shrink-0"
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
                <span>586-943-0573</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-sky-400 shrink-0"
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
                <span>fbcwmich@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-12 pt-8 text-center text-sky-300 text-sm">
          &copy; {new Date().getFullYear()} First Baptist Church of Warren,
          Michigan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
