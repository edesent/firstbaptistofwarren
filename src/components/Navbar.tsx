"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const aboutLinks = [
  { href: "/about/statement-of-faith", label: "Statement of Faith" },
  { href: "/about/plan-of-salvation", label: "Plan of Salvation" },
  { href: "/about/history", label: "History & Location" },
  { href: "/about/pastor-and-staff", label: "Pastor & Staff" },
  { href: "/about/in-memory", label: "In Memory: Dr. Timothy Parrish" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Church Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white group-hover:ring-sky-200 transition-all">
              <Image
                src="/images/fbc-logo.png"
                alt="First Baptist Church of Warren"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-sky-900 text-lg leading-tight">
                First Baptist Church
              </div>
              <div className="text-sky-600 text-sm">Warren, Michigan</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors flex items-center gap-1">
                About
                <svg
                  className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-sky-100 py-2 min-w-[250px] animate-fade-in">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/ministries"
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors"
            >
              Ministries
            </Link>
            <Link
              href="/calendar"
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors"
            >
              Calendar
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/give"
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors"
            >
              Give Online
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-sky-100 px-4 pb-4">
          <Link
            href="/"
            className="block py-3 text-slate-700 hover:text-sky-700 font-medium border-b border-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <div className="py-2">
            <div className="text-sm font-semibold text-sky-600 py-2">
              About Our Church
            </div>
            {aboutLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 pl-4 text-slate-600 hover:text-sky-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/ministries"
            className="block py-3 text-slate-700 hover:text-sky-700 font-medium border-b border-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Ministries
          </Link>
          <Link
            href="/calendar"
            className="block py-3 text-slate-700 hover:text-sky-700 font-medium border-b border-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Calendar
          </Link>
          <Link
            href="/gallery"
            className="block py-3 text-slate-700 hover:text-sky-700 font-medium border-b border-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/give"
            className="block py-3 text-slate-700 hover:text-sky-700 font-medium border-b border-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Give Online
          </Link>
          <Link
            href="/contact"
            className="block mt-3 text-center py-3 bg-sky-600 text-white rounded-lg font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
