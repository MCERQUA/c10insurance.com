import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools & Equipment Insurance for California C10 Electrical Contractors",
  description:
    "Protect your electrical tools, test equipment, and specialty gear from theft, damage, and loss. Coverage for C10 contractors on job sites, in transit, and in storage.",
};

const coveredItems = [
  "Multimeters and clamp meters",
  "Wire strippers and crimpers",
  "Conduit benders (manual and electric)",
  "Fish tapes and cable pullers",
  "Circuit analyzers and power quality meters",
  "Voltage and current testers",
  "Drills, saws, and rotary hammers",
  "Panel schedules and electrical diagnostic equipment",
  "Ladders and scaffolding",
  "Generator sets and power tools",
  "Thermal imaging cameras",
  "Tools stored in work vehicles",
];

const coverageScenarios = [
  {
    title: "Job Site Theft",
    description:
      "Your van is broken into overnight and $4,000 worth of meters, testers, and tools are taken. Tools & equipment coverage pays to replace them so you can get back to work.",
  },
  {
    title: "Equipment Damage",
    description:
      "Your thermal imaging camera falls from a ladder on a commercial job and is destroyed. The claim is covered, with replacement or repair at no major out-of-pocket cost.",
  },
  {
    title: "Transit Loss",
    description:
      "While moving equipment between job sites, a collision damages your specialized wire-pulling equipment. Transit coverage pays for the replacement.",
  },
];

export default function ToolsEquipmentPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Wrench size={20} />
            </div>
            <span className="text-sm font-medium text-blue-200 uppercase tracking-wide">On-Site Protection</span>
          </div>
          <h1 className="text-5xl font-black mb-5">
            Tools & Equipment Insurance for C10 Electrical Contractors
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Your tools are your livelihood. Without them, there&apos;s no work and
            no income. Protect your investment in electrical equipment against
            theft, damage, and loss anywhere they go.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Why C10 Electricians Need Tools & Equipment Coverage
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As a C10 electrical contractor, your tools and test equipment
                  represent a significant investment — often $10,000 to $30,000
                  or more for a fully equipped electrician. Without coverage,
                  a single theft or accident could sideline your business for
                  weeks while you scramble to replace critical equipment.
                </p>
                <p>
                  Standard commercial property insurance only covers items at
                  a fixed business location. Your tools travel with you — to
                  job sites, in your van, stored in different locations. Tools
                  & equipment insurance (also called inland marine coverage)
                  follows your tools wherever they go.
                </p>
                <p>
                  Job site theft is the most common claim. California has some
                  of the highest rates of contractor tool theft in the country.
                  It takes seconds for thieves to break a van window and walk
                  off with thousands in equipment. Coverage pays to replace
                  it quickly so your business doesn&apos;t miss a beat.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                What&apos;s Typically Covered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coveredItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                Real-World Coverage Scenarios
              </h2>
              <div className="space-y-4">
                {coverageScenarios.map((s) => (
                  <div key={s.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                Coverage Locations: Where Are Your Tools Protected?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { location: "Job Sites", desc: "On commercial and residential job sites during active work" },
                  { location: "In Your Vehicle", desc: "Tools stored in work vans and trucks — even overnight" },
                  { location: "In Transit", desc: "Tools moving between your shop, storage, and job sites" },
                  { location: "Storage Facilities", desc: "Tools kept at warehouses, storage units, or rental spaces" },
                  { location: "At Your Shop", desc: "Equipment at your business location when not deployed" },
                  { location: "Anywhere in US", desc: "Most policies extend coverage nationwide for traveling jobs" },
                ].map((loc) => (
                  <div key={loc.location} className="bg-brand-50 rounded-xl p-4 text-center">
                    <p className="font-bold text-brand-700 mb-1">{loc.location}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <div className="bg-brand-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Get a Tools Coverage Quote</h3>
              <p className="text-blue-100 text-sm mb-4">
                Protect your electrical tools and equipment starting at just a
                few hundred dollars a year.
              </p>
              <Link
                href="/quote"
                className="block text-center px-5 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-sm"
              >
                Start Free Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Coverage Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Coverage follows</span>
                  <span className="font-semibold text-slate-900">Your tools</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Theft covered</span>
                  <span className="font-semibold text-green-600">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Transit covered</span>
                  <span className="font-semibold text-green-600">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Low deductible</span>
                  <span className="font-semibold text-slate-900">Options available</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Call a Specialist</h3>
              <a href="tel:844-967-5247" className="flex items-center gap-2 text-brand-700 font-bold hover:text-brand-800 transition-colors">
                <Phone size={18} />
                844-967-5247
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Related Coverages</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/coverages/general-liability" className="text-brand-700 hover:underline">General Liability →</Link></li>
                <li><Link href="/coverages/workers-compensation" className="text-brand-700 hover:underline">Workers Comp →</Link></li>
                <li><Link href="/coverages/commercial-auto" className="text-brand-700 hover:underline">Commercial Auto →</Link></li>
                <li><Link href="/coverages/contractor-bond" className="text-brand-700 hover:underline">Contractor Bond →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
