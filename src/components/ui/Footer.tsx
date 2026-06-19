import Link from "next/link";
import { Phone, Mail, MapPin, Zap } from "lucide-react";

const coverageLinks = [
  { href: "/coverages/general-liability", label: "General Liability" },
  { href: "/coverages/workers-compensation", label: "Workers Compensation" },
  { href: "/coverages/commercial-auto", label: "Commercial Auto" },
  { href: "/coverages/tools-equipment", label: "Tools & Equipment" },
  { href: "/coverages/contractor-bond", label: "Contractor Bond" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/coverages", label: "Coverages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-700 text-white p-1.5 rounded">
                <Zap size={20} className="fill-accent-400 text-accent-400" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  C10
                </span>
                <span className="text-xl font-black text-slate-300 tracking-tight">
                  Insurance
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Specialized insurance for California C10 licensed electrical
              contractors. Powered by Contractors Choice Agency — 20+ years
              protecting electrical contractors statewide.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:844-967-5247"
                className="flex items-center gap-2 text-slate-400 hover:text-accent-400 transition-colors"
              >
                <Phone size={14} />
                844-967-5247
              </a>
              <a
                href="mailto:josh@contractorschoiceagency.com"
                className="flex items-center gap-2 text-slate-400 hover:text-accent-400 transition-colors"
              >
                <Mail size={14} />
                josh@contractorschoiceagency.com
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>12220 E Riggs Rd, Chandler, AZ 85249</span>
              </div>
            </div>
          </div>

          {/* Coverages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Coverages</h3>
            <ul className="space-y-2">
              {coverageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Covered Today</h3>
            <p className="text-sm text-slate-400 mb-4">
              California C10 contractors trust us for fast, accurate quotes.
              15-minute turnaround. Licensed in all 50 states.
            </p>
            <Link
              href="/quote"
              className="inline-block px-5 py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors text-sm"
            >
              Get Your Free Quote
            </Link>
            <div className="mt-6 p-4 bg-slate-800 rounded-xl">
              <p className="text-xs text-slate-500 mb-1">24/7 Claims Hotline</p>
              <a
                href="tel:844-967-5247"
                className="text-lg font-bold text-accent-400"
              >
                844-967-5247
              </a>
              <p className="text-xs text-slate-500 mt-1">
                2-hour response guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} C10 Insurance / Contractors Choice
            Agency. All rights reserved. NPN: 8608479
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
