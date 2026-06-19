"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const coverageLinks = [
  { href: "/coverages/general-liability", label: "General Liability" },
  { href: "/coverages/workers-compensation", label: "Workers Compensation" },
  { href: "/coverages/commercial-auto", label: "Commercial Auto" },
  { href: "/coverages/tools-equipment", label: "Tools & Equipment" },
  { href: "/coverages/contractor-bond", label: "Contractor Bond" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coveragesOpen, setCoveragesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md border-b border-slate-200"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      {/* Top bar */}
      <div className="bg-brand-700 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">
            California C10 Licensed Electrical Contractor Insurance Specialists
          </span>
          <a
            href="tel:844-967-5247"
            className="flex items-center gap-1.5 font-semibold hover:text-accent-400 transition-colors"
          >
            <Phone size={14} />
            844-967-5247
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-700 text-white p-1.5 rounded">
            <Zap size={20} className="fill-accent-400 text-accent-400" />
          </div>
          <div>
            <span className="text-xl font-black text-brand-700 tracking-tight">
              C10
            </span>
            <span className="text-xl font-black text-slate-700 tracking-tight">
              Insurance
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-slate-700 font-medium hover:text-brand-700 transition-colors rounded-lg hover:bg-brand-50"
          >
            Home
          </Link>

          {/* Coverages dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setCoveragesOpen(true)}
              onMouseLeave={() => setCoveragesOpen(false)}
              className="flex items-center gap-1 px-4 py-2 text-slate-700 font-medium hover:text-brand-700 transition-colors rounded-lg hover:bg-brand-50"
            >
              Coverages
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform",
                  coveragesOpen && "rotate-180"
                )}
              />
            </button>
            {coveragesOpen && (
              <div
                onMouseEnter={() => setCoveragesOpen(true)}
                onMouseLeave={() => setCoveragesOpen(false)}
                className="absolute top-full left-0 pt-1 w-56"
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                  {coverageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors font-medium text-sm border-b border-slate-50 last:border-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/coverages"
                    className="block px-4 py-3 text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors font-semibold text-sm"
                  >
                    View All Coverages →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="px-4 py-2 text-slate-700 font-medium hover:text-brand-700 transition-colors rounded-lg hover:bg-brand-50"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-slate-700 font-medium hover:text-brand-700 transition-colors rounded-lg hover:bg-brand-50"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-slate-700 font-medium hover:text-brand-700 transition-colors rounded-lg hover:bg-brand-50"
          >
            Contact
          </Link>

          <Link
            href="/quote"
            className="ml-2 px-5 py-2.5 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors shadow-sm"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setCoveragesOpen(!coveragesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
              >
                Coverages
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform",
                    coveragesOpen && "rotate-180"
                  )}
                />
              </button>
              {coveragesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {coverageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
