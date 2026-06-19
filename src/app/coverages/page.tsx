import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Car, Wrench, FileText, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "C10 Electrical Contractor Insurance Coverages",
  description:
    "Complete insurance coverage for California C10 licensed electrical contractors. General liability, workers comp, commercial auto, tools & equipment, and contractor bonds.",
};

const coverages = [
  {
    icon: Shield,
    title: "General Liability Insurance",
    href: "/coverages/general-liability",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
    description:
      "Protects your electrical business from third-party claims of bodily injury or property damage. Required by most commercial clients and job site contracts. Available in $1M, $2M, and higher limits.",
    highlights: [
      "Covers bodily injury at job sites",
      "Property damage protection",
      "Products & completed operations",
      "Personal & advertising injury",
      "Required by most commercial clients",
    ],
    cta: "Learn About GL Coverage",
  },
  {
    icon: Users,
    title: "Workers Compensation",
    href: "/coverages/workers-compensation",
    badge: "CA Required",
    badgeColor: "bg-red-100 text-red-700",
    description:
      "California law mandates workers compensation insurance for all electrical contractors with W-2 employees. We navigate the California Department of Industrial Relations requirements and get you compliant quickly.",
    highlights: [
      "California law compliance",
      "Medical expense coverage",
      "Lost wages for injured workers",
      "Employer liability protection",
      "California class code expertise",
    ],
    cta: "Learn About Workers Comp",
  },
  {
    icon: Car,
    title: "Commercial Auto Insurance",
    href: "/coverages/commercial-auto",
    badge: "Fleet Coverage",
    badgeColor: "bg-green-100 text-green-700",
    description:
      "Your personal auto policy doesn't cover vehicles used for business purposes. Protect your work vans, trucks, and service vehicles with commercial auto coverage built for electrical contractors.",
    highlights: [
      "Work vans and service trucks",
      "Hired and non-owned auto",
      "Tools in vehicle coverage",
      "Fleet discounts available",
      "CA commercial auto compliance",
    ],
    cta: "Learn About Commercial Auto",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment Insurance",
    href: "/coverages/tools-equipment",
    badge: "On-Site Protection",
    badgeColor: "bg-amber-100 text-amber-700",
    description:
      "Your electrical tools, test equipment, and specialty gear are the backbone of your business. Protect them against theft, damage, and loss whether they're on your truck, at the job site, or in storage.",
    highlights: [
      "Covers theft from job sites",
      "Equipment breakdown coverage",
      "Tools in transit protection",
      "Specialty electrical equipment",
      "Low deductible options",
    ],
    cta: "Learn About Tools & Equipment",
  },
  {
    icon: FileText,
    title: "Contractor License Bond",
    href: "/coverages/contractor-bond",
    badge: "License Requirement",
    badgeColor: "bg-purple-100 text-purple-700",
    description:
      "California's CSLB requires all C10 electrical contractors to carry a $25,000 contractor license bond. This protects your clients, not you — but it's mandatory to maintain your license and legally operate.",
    highlights: [
      "$25,000 bond required by CSLB",
      "Same-day bond issuance",
      "Affordable annual premiums",
      "Covers license violations",
      "Keeps your C10 license active",
    ],
    cta: "Learn About Contractor Bonds",
  },
];

export default function CoveragesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">
            Insurance Coverages for C10 Electrical Contractors
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
            Every coverage California C10 licensed electrical contractors need —
            from general liability to contractor bonds. Get all your policies in
            one place with one specialist who knows your business.
          </p>
        </div>
      </div>

      {/* Coverages */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          {coverages.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <div
                key={coverage.href}
                className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                          <Icon className="text-brand-700" size={24} />
                        </div>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${coverage.badgeColor}`}
                        >
                          {coverage.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-slate-900 mb-3">
                        {coverage.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {coverage.description}
                      </p>
                      <Link
                        href={coverage.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-700 text-white font-semibold rounded-xl hover:bg-brand-800 transition-colors text-sm"
                      >
                        {coverage.cta}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="md:w-72">
                      <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        What&apos;s Covered
                      </h3>
                      <ul className="space-y-2">
                        {coverage.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bundle CTA */}
        <div className="mt-12 bg-brand-700 rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="text-3xl font-black mb-4">
            Bundle and Save — Get All Coverages in One Policy
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Most C10 electrical contractors need multiple coverages. We
            specialize in bundling GL, workers comp, commercial auto, and tools
            coverage for maximum savings and simplified management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-lg"
            >
              Get a Bundle Quote
            </Link>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone size={20} />
              Call 844-967-5247
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
