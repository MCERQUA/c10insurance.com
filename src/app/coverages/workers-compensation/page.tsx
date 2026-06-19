import type { Metadata } from "next";
import Link from "next/link";
import { Users, CheckCircle, Phone, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Workers Compensation for California C10 Electrical Contractors",
  description:
    "California requires workers comp for all electrical contractors with employees. Get compliant fast with coverage designed for C10 electrical trade workers.",
};

const benefits = [
  "Medical treatment for work-related injuries",
  "Temporary disability payments (lost wages)",
  "Permanent disability benefits",
  "Death benefits for fatalities",
  "Vocational rehabilitation",
  "Employer liability protection",
];

const classCodes = [
  { code: "5190", description: "Electrical Wiring — Within Buildings" },
  { code: "5183", description: "Plumbing — Low Voltage & Alarm Systems" },
  { code: "5191", description: "Electronic Controls Installation" },
  { code: "5160", description: "Insulation Work — Electrical" },
  { code: "8742", description: "Sales Representatives (clerical/office staff)" },
];

export default function WorkersCompPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="text-sm font-medium text-blue-200 uppercase tracking-wide">California Required</span>
          </div>
          <h1 className="text-5xl font-black mb-5">
            Workers Compensation for C10 Electrical Contractors
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            California law mandates workers compensation for all electrical
            contractors with W-2 employees. We get you compliant fast with
            coverage calibrated for electrical trade risk and payroll.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Is Workers Comp Required for California C10 Contractors?
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-red-800 mb-1">Yes — California Law Requires It</p>
                    <p className="text-red-700 text-sm leading-relaxed">
                      California Labor Code §3700 requires all employers to
                      provide workers compensation benefits to their employees.
                      This applies to every C10 electrical contractor who has
                      even one part-time W-2 employee. Operating without it
                      is a criminal offense in California.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Workers compensation covers your employees when they&apos;re
                  injured on the job. As an electrical contractor, your workers
                  face real hazards every day — electrical shock, falls from
                  ladders, heavy equipment, and repetitive strain injuries.
                  Workers comp ensures they get medical care and lost wage
                  protection while also shielding you from direct lawsuits.
                </p>
                <p>
                  Sole proprietors without employees may be exempt from the
                  mandatory requirement, but many general contractors and
                  commercial clients require proof of workers comp coverage
                  regardless. Even sole proprietors often elect to carry it
                  for their own protection.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                What Workers Comp Covers for Electricians
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                California Class Codes for Electrical Contractors
              </h2>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                Workers compensation rates are determined in part by NCCI
                classification codes that describe the type of work your
                employees perform. Using the wrong class code can result in
                overpaying — or a costly audit adjustment. Our specialists ensure
                your employees are correctly classified.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border border-slate-100">
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Class Code</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classCodes.map((code, i) => (
                      <tr key={code.code} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        <td className="px-4 py-3 font-mono font-bold text-brand-700">{code.code}</td>
                        <td className="px-4 py-3 text-slate-700">{code.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                How Workers Comp Premiums Are Calculated
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Workers compensation premiums are calculated primarily based on:
                </p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Payroll:</strong> Total wages paid to employees (usually per $100 of payroll)</li>
                  <li><strong>Class codes:</strong> The type of work your employees perform</li>
                  <li><strong>Experience modification (Mod):</strong> Your claims history compared to industry average</li>
                  <li><strong>State rates:</strong> California sets base rates by classification</li>
                </ul>
                <p>
                  The good news: electrical contractors with a clean safety record
                  and good claims history can qualify for significant experience
                  modification credits that lower their premiums. We help you
                  understand your Mod and what you can do to improve it.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-brand-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Get a WC Quote</h3>
              <p className="text-blue-100 text-sm mb-4">
                California workers comp for your electrical crew — competitive
                rates, fast compliance.
              </p>
              <Link
                href="/quote"
                className="block text-center px-5 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-sm"
              >
                Start Free Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Who requires it</span>
                  <span className="font-semibold text-slate-900">CA Law</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Triggered by</span>
                  <span className="font-semibold text-slate-900">1+ employee</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Penalty (no WC)</span>
                  <span className="font-semibold text-red-600">Criminal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Based on</span>
                  <span className="font-semibold text-slate-900">Payroll</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Speak with a Specialist</h3>
              <p className="text-sm text-slate-600 mb-4">
                Workers comp questions? We know California electrical contractor
                requirements cold.
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
                <li><Link href="/coverages/general-liability" className="text-brand-700 hover:underline">General Liability →</Link></li>
                <li><Link href="/coverages/commercial-auto" className="text-brand-700 hover:underline">Commercial Auto →</Link></li>
                <li><Link href="/coverages/tools-equipment" className="text-brand-700 hover:underline">Tools & Equipment →</Link></li>
                <li><Link href="/coverages/contractor-bond" className="text-brand-700 hover:underline">Contractor Bond →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
