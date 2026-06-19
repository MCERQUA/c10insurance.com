import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "General Liability Insurance for California C10 Electrical Contractors",
  description:
    "C10 general liability insurance in California. Protect your electrical business from bodily injury and property damage claims. Get a quote in 15 minutes.",
};

const whatsCovered = [
  "Bodily injury to third parties at your job sites",
  "Property damage caused by your electrical work",
  "Products and completed operations (after the job is done)",
  "Personal and advertising injury claims",
  "Medical payments to injured third parties",
  "Legal defense costs even if you win the case",
];

const notCovered = [
  "Your own employees' injuries (covered by workers comp)",
  "Your own tools and equipment (need tools & equipment policy)",
  "Your commercial vehicles (need commercial auto policy)",
  "Professional errors and omissions",
  "Intentional acts",
];

const scenarios = [
  {
    title: "Job Site Accident",
    description:
      "A homeowner trips over your extension cord during a panel upgrade and breaks their wrist. Your GL pays their medical bills and protects you from a lawsuit.",
  },
  {
    title: "Property Damage Claim",
    description:
      "An electrical wiring error causes a small fire that damages a client's drywall and furniture. Your general liability covers the damage up to your policy limits.",
  },
  {
    title: "Completed Operations",
    description:
      "Six months after finishing a commercial installation, an electrical issue traced to your work causes equipment damage. Completed operations coverage handles it.",
  },
];

export default function GeneralLiabilityPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield size={20} />
            </div>
            <span className="text-sm font-medium text-blue-200">Coverage Guide</span>
          </div>
          <h1 className="text-5xl font-black mb-5">
            General Liability Insurance for C10 Electrical Contractors
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
            The most essential coverage for California electrical contractors.
            Protect your business from third-party injury and property damage
            claims with limits designed for C10 work.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* What is GL */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                What Is General Liability Insurance for Electricians?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  General liability (GL) insurance is the core protection every
                  California C10 electrical contractor needs. It covers your
                  business when a third party — a property owner, building
                  occupant, or bystander — suffers bodily injury or property
                  damage because of your operations.
                </p>
                <p>
                  Unlike workers compensation (which covers your employees) or
                  commercial auto (which covers your vehicles), general liability
                  focuses on your liability to the outside world. If someone
                  sues your electrical business for an accident that happened on
                  the job, your GL policy pays the legal fees and any damages
                  awarded — up to your policy limits.
                </p>
                <p>
                  For California C10 contractors, most commercial property
                  owners and general contractors require proof of GL insurance
                  before you can set foot on a job site. A $1 million per
                  occurrence / $2 million aggregate policy is the minimum most
                  clients require.
                </p>
              </div>
            </section>

            {/* What's covered */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                What Does C10 General Liability Cover?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatsCovered.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-green-50 rounded-xl"
                  >
                    <CheckCircle
                      size={18}
                      className="text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What's NOT covered */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                What General Liability Does NOT Cover
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {notCovered.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                  >
                    <AlertTriangle
                      size={18}
                      className="text-amber-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Real scenarios */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                Real-World Scenarios: When GL Saves Your Business
              </h2>
              <div className="space-y-4">
                {scenarios.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CA Requirements */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                California C10 General Liability Requirements
              </h2>
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-6">
                <p className="text-slate-700 leading-relaxed text-sm">
                  California does not have a statewide mandate requiring GL
                  insurance for C10 contractors — but the market does. The vast
                  majority of general contractors, property owners, and
                  commercial clients require proof of general liability insurance
                  before hiring an electrical subcontractor. Common requirements:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-700 font-bold mt-0.5">•</span>
                    <span><strong>Minimum limits:</strong> $1M per occurrence / $2M aggregate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-700 font-bold mt-0.5">•</span>
                    <span><strong>Additional insured:</strong> Most GCs require to be listed as additional insured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-700 font-bold mt-0.5">•</span>
                    <span><strong>Same-day COI:</strong> We issue certificates of insurance same-day</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-brand-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Get a GL Quote</h3>
              <p className="text-blue-100 text-sm mb-4">
                Custom general liability quote for your C10 electrical business
                in 15 minutes.
              </p>
              <Link
                href="/quote"
                className="block text-center px-5 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-sm"
              >
                Start Free Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Typical GL Coverage</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Per Occurrence Limit</span>
                  <span className="font-semibold text-slate-900">$1M – $2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Aggregate Limit</span>
                  <span className="font-semibold text-slate-900">$2M – $4M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Products/Completed Ops</span>
                  <span className="font-semibold text-slate-900">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Personal Injury</span>
                  <span className="font-semibold text-slate-900">Included</span>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between">
                  <span className="text-slate-600">Starting At</span>
                  <span className="font-bold text-brand-700">~$500/year</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Have Questions?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Talk to a C10 specialist now.
              </p>
              <a
                href="tel:844-967-5247"
                className="flex items-center gap-2 text-brand-700 font-bold hover:text-brand-800 transition-colors"
              >
                <Phone size={18} />
                844-967-5247
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Related Coverages</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/coverages/workers-compensation" className="text-brand-700 hover:underline">
                    Workers Compensation →
                  </Link>
                </li>
                <li>
                  <Link href="/coverages/commercial-auto" className="text-brand-700 hover:underline">
                    Commercial Auto →
                  </Link>
                </li>
                <li>
                  <Link href="/coverages/tools-equipment" className="text-brand-700 hover:underline">
                    Tools & Equipment →
                  </Link>
                </li>
                <li>
                  <Link href="/coverages/contractor-bond" className="text-brand-700 hover:underline">
                    Contractor Bond →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
