import type { Metadata } from "next";
import Link from "next/link";
import { Car, CheckCircle, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Auto Insurance for California C10 Electrical Contractors",
  description:
    "Protect your electrical contractor work vans and trucks with commercial auto insurance. Personal auto policies don't cover business use. Get a quote in 15 minutes.",
};

const coverageTypes = [
  { type: "Liability", desc: "Pays for injuries and property damage you cause to others while driving for work" },
  { type: "Collision", desc: "Covers damage to your vehicle from accidents regardless of who is at fault" },
  { type: "Comprehensive", desc: "Covers theft, vandalism, weather damage, and non-collision events" },
  { type: "Uninsured Motorist", desc: "Protects you when the other driver has no insurance or insufficient coverage" },
  { type: "Medical Payments", desc: "Covers medical expenses for you and your passengers regardless of fault" },
  { type: "Hired & Non-Owned", desc: "Covers rented vehicles and employee personal vehicles used for business" },
];

export default function CommercialAutoPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Car size={20} />
            </div>
            <span className="text-sm font-medium text-blue-200 uppercase tracking-wide">Fleet Coverage</span>
          </div>
          <h1 className="text-5xl font-black mb-5">
            Commercial Auto Insurance for C10 Electrical Contractors
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Your work van is your business. Personal auto insurance doesn&apos;t cover
            vehicles used commercially — one accident while driving to a job site
            without the right coverage can cost you everything.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Why Electrical Contractors Need Commercial Auto
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-amber-800 mb-1">Personal Auto Doesn&apos;t Cover Business Use</p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Standard personal auto insurance policies contain business
                      use exclusions. If you&apos;re in an accident while driving to or
                      from a job site, hauling tools, or with an employee in the
                      vehicle, your personal policy may deny the claim entirely —
                      leaving you personally liable for all damages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Commercial auto insurance is designed specifically for vehicles
                  used in business operations. As an electrical contractor, that
                  means your work vans loaded with wire, conduit, panels, and
                  tools — vehicles that are on the road daily, in traffic, on
                  construction sites, and in all weather conditions.
                </p>
                <p>
                  Commercial auto policies offer higher liability limits than
                  personal policies, cover your tools and equipment in the
                  vehicle, and can cover multiple vehicles under a single fleet
                  policy with significant discounts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                Commercial Auto Coverage Types
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coverageTypes.map((c) => (
                  <div key={c.type} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-brand-600" />
                      <span className="font-bold text-slate-900">{c.type}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                What Vehicles Does Commercial Auto Cover?
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Commercial auto covers any vehicle primarily used for business
                  purposes. For C10 electrical contractors, that typically includes:
                </p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Work vans:</strong> Sprinter vans, cargo vans, transit vans loaded with electrical supplies</li>
                  <li><strong>Pickup trucks:</strong> Used to haul conduit, wire spools, ladders, and equipment</li>
                  <li><strong>Service vehicles:</strong> Dedicated service trucks for emergency electrical calls</li>
                  <li><strong>Trailers:</strong> Utility trailers used to transport equipment to job sites</li>
                  <li><strong>Employee vehicles:</strong> Hired & non-owned coverage for employees using personal vehicles for work</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                Fleet Discounts for Electrical Contractors
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  If you run multiple vehicles, insuring them under a single
                  commercial fleet policy is almost always more cost-effective
                  than individual policies. Benefits include:
                </p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Multi-vehicle discount:</strong> Typically 10–25% savings vs. individual policies</li>
                  <li><strong>Single renewal date:</strong> One policy, one renewal, one premium payment</li>
                  <li><strong>Easy additions:</strong> Add new vehicles to your fleet with a simple endorsement</li>
                  <li><strong>Claims management:</strong> One point of contact for all vehicle claims</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-brand-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Get a Commercial Auto Quote</h3>
              <p className="text-blue-100 text-sm mb-4">
                Tell us how many vehicles you have and we&apos;ll find the best
                commercial auto rate for your C10 business.
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
                  <span className="text-slate-600">Personal auto covers work?</span>
                  <span className="font-semibold text-red-600">No</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Min liability (CA)</span>
                  <span className="font-semibold text-slate-900">$15K/$30K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Recommended limit</span>
                  <span className="font-semibold text-slate-900">$1M CSL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fleet discount</span>
                  <span className="font-semibold text-green-600">Up to 25%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-3">Call a Specialist</h3>
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
                <li><Link href="/coverages/workers-compensation" className="text-brand-700 hover:underline">Workers Comp →</Link></li>
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
