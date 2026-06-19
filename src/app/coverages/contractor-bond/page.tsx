import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, Phone, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "C10 Contractor License Bond California | CSLB Required",
  description:
    "California CSLB requires all C10 electrical contractors to carry a $25,000 contractor license bond. Get bonded same-day. Fast, affordable, licensed in all 50 states.",
};

const bondFacts = [
  { label: "Required Amount", value: "$25,000" },
  { label: "Required By", value: "CA CSLB" },
  { label: "Renewal", value: "Every 2 years" },
  { label: "Who It Protects", value: "Your clients" },
  { label: "Issuance Time", value: "Same day" },
  { label: "Annual Premium", value: "~$150–$300" },
];

export default function ContractorBondPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <FileText size={20} />
            </div>
            <span className="text-sm font-medium text-blue-200 uppercase tracking-wide">CSLB Required</span>
          </div>
          <h1 className="text-5xl font-black mb-5">
            C10 Contractor License Bond in California
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Every California C10 electrical contractor must maintain a $25,000
            contractor license bond through the CSLB. Without it, your license
            is invalid and you can&apos;t legally operate. We issue bonds same-day.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                What Is a Contractor License Bond?
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-amber-800 mb-1">Important: A Bond Is Not Insurance</p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      A contractor license bond is often confused with insurance,
                      but it&apos;s different. Insurance protects you — the contractor.
                      A bond protects your clients. If a client files a valid
                      claim against your bond, the bonding company pays them —
                      and then seeks repayment from you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  A contractor license bond (also called a surety bond or license
                  bond) is a three-party agreement between you (the principal),
                  the bonding company (the surety), and your clients/the state
                  (the obligee). It guarantees that you&apos;ll complete contracted
                  work properly, pay subcontractors and suppliers, and comply
                  with state contractor laws.
                </p>
                <p>
                  California&apos;s Contractors State License Board (CSLB) requires
                  all licensed contractors — including C10 electrical contractors
                  — to maintain a $25,000 contractor license bond at all times.
                  If your bond lapses, the CSLB can suspend your license,
                  making it illegal to contract for electrical work in California.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                What the Bond Covers
              </h2>
              <div className="space-y-3">
                {[
                  "Failure to complete a contracted electrical project",
                  "Using substandard materials or workmanship",
                  "Violation of California contractor laws and regulations",
                  "Non-payment to subcontractors and material suppliers",
                  "Financial harm caused by contractor misconduct",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <CheckCircle size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                How the CSLB Bond Process Works
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Apply for Your Bond",
                    desc: "Complete a simple application with your license number, business details, and personal information. We verify your information and run a standard credit check.",
                  },
                  {
                    step: "2",
                    title: "Pay Your Premium",
                    desc: "Your annual bond premium is a small percentage of the $25,000 bond amount — typically $150 to $300 per year depending on your credit. The better your credit, the lower your rate.",
                  },
                  {
                    step: "3",
                    title: "Bond Issued to CSLB",
                    desc: "We issue the bond certificate directly to the California CSLB and provide you with a copy for your records. This is typically done the same day.",
                  },
                  {
                    step: "4",
                    title: "Maintain Your Bond",
                    desc: "Your bond must be maintained continuously. We send renewal reminders so your bond never lapses. A lapse triggers CSLB license suspension.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-5 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                    <div className="w-10 h-10 bg-brand-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                Bond vs. Insurance: The Key Difference
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-100 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Feature</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">License Bond</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">General Liability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Who it protects", "Your clients / the public", "You and your business"],
                      ["CSLB required", "Yes — $25,000", "No (but market-required)"],
                      ["Claims paid by", "Surety, then you repay", "Insurance company"],
                      ["Covers your vehicles", "No", "No (need commercial auto)"],
                      ["Typical cost", "$150–$300/year", "$500–$2,000+/year"],
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 text-slate-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <div className="bg-brand-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Get Bonded Today</h3>
              <p className="text-blue-100 text-sm mb-4">
                Same-day C10 contractor bond issuance. Keep your CSLB license
                active and compliant.
              </p>
              <Link
                href="/quote"
                className="block text-center px-5 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-sm"
              >
                Start Free Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Bond Quick Facts</h3>
              <div className="space-y-3">
                {bondFacts.map((f) => (
                  <div key={f.label} className="flex justify-between text-sm">
                    <span className="text-slate-600">{f.label}</span>
                    <span className="font-semibold text-slate-900">{f.value}</span>
                  </div>
                ))}
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
                <li><Link href="/coverages/tools-equipment" className="text-brand-700 hover:underline">Tools & Equipment →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
