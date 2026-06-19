import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Users, Shield, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About C10 Insurance | Contractors Choice Agency",
  description:
    "20+ years insuring California electrical contractors. Founded by a former contractor who understands your business from the inside. Meet the team behind C10 Insurance.",
};

const milestones = [
  { year: "2005", event: "Contractors Choice Agency founded in Arizona by Josh Cotner" },
  { year: "2008", event: "Expanded focus to specialty contractor trades across California" },
  { year: "2012", event: "Became one of the first agencies to specialize in C10 electrical contractor coverage" },
  { year: "2016", event: "Achieved licensure in all 50 states — serving contractors nationwide" },
  { year: "2020", event: "Launched 24/7 claims response program with 2-hour guarantee" },
  { year: "2024", event: "Now protecting hundreds of California electrical contractors annually" },
];

const values = [
  {
    icon: Shield,
    title: "Contractor-First",
    description:
      "Josh started Contractors Choice Agency because he saw how poorly most brokers understood contractor needs. Every policy we write starts with understanding what you actually do on the job site.",
  },
  {
    icon: Award,
    title: "Specialized Expertise",
    description:
      "We don't try to be everything to everyone. Our deep focus on contractor insurance — and specifically electrical contractors in California — means better coverage and better rates than generalist brokers.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "You talk to a real specialist who knows C10 insurance, not a call center. When you have a claim at 10pm, a real person answers. That's the Contractors Choice Agency difference.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-5">
            About Contractors Choice Agency
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
            We&apos;re not a big-box insurance broker. We&apos;re a specialized
            agency built by a former contractor who understands exactly what it
            takes to run a C10 electrical business in California.
          </p>
        </div>
      </div>

      {/* Founder story */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-brand-50 text-brand-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
              Our Story
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-5">
              Built by a Contractor, for Contractors
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Before founding Contractors Choice Agency in 2005, Josh Cotner
                worked as a contractor. He knew the work, the risks, and the
                frustration of dealing with insurance brokers who didn&apos;t
                understand what life on a job site actually looked like.
              </p>
              <p>
                Most brokers treat electrical contractors like any other small
                business. They plug your revenue into a rate table and hand you
                a generic policy. That might work for a bakery — but it doesn&apos;t
                work for a C10 contractor doing commercial panel work at a
                $2 million industrial facility.
              </p>
              <p>
                Josh built CCA differently. We&apos;ve spent 20 years developing
                deep relationships with A+ rated carriers who specialize in
                contractor coverage. We understand the CSLB requirements, the
                California workers comp system, and the specific exposures that
                come with electrical work.
              </p>
              <p>
                The result: our C10 electrical contractor clients get better
                coverage, at better rates, with an agent who actually speaks
                their language.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:844-967-5247"
                className="flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Phone size={18} />
                844-967-5247
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-brand-700 rounded-full flex items-center justify-center text-white text-2xl font-black">
                  JC
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Josh Cotner</p>
                  <p className="text-slate-500 text-sm">Founder & Lead Insurance Specialist</p>
                  <p className="text-xs text-slate-400">NPN: 8608479 | Licensed All 50 States</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">
                &ldquo;I spent years as a contractor before getting into insurance. I know
                what it&apos;s like to need a certificate of insurance by 7am or you
                can&apos;t get on a job site. That&apos;s why we&apos;re available when you need
                us, not just during banker&apos;s hours.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-700 text-white rounded-2xl p-5 text-center">
                <div className="text-3xl font-black mb-1">20+</div>
                <div className="text-blue-200 text-sm">Years in Business</div>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-5 text-center">
                <div className="text-3xl font-black mb-1">50</div>
                <div className="text-slate-400 text-sm">States Licensed</div>
              </div>
              <div className="bg-accent-500 text-white rounded-2xl p-5 text-center">
                <div className="text-3xl font-black mb-1">15 min</div>
                <div className="text-amber-100 text-sm">Quote Turnaround</div>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-black text-slate-900 mb-1">A+</div>
                <div className="text-slate-500 text-sm">Rated Carriers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              How We&apos;re Different
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              What sets Contractors Choice Agency apart from every other broker
              offering contractor insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-brand-700" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Our History</h2>
          <p className="text-slate-600">
            Two decades of protecting California contractors.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-100" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-brand-700 text-white rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 text-xs font-bold">
                  {m.year}
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 border border-slate-100 shadow-sm mt-1.5">
                  <p className="text-slate-700 font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CA Commitment */}
      <section className="bg-white border-y border-slate-100 py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              Our Commitment to California C10 Contractors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "We stay current on California CSLB requirements and license bond amounts",
              "We know California workers comp class codes for electrical trades",
              "We work with carriers who specialize in California contractor risk",
              "We issue certificates of insurance same-day in most cases",
              "We provide 24/7 claims support with a 2-hour response guarantee",
              "We offer competitive rates by bundling coverages under one policy",
              "We speak your language — no insurance jargon, just clear answers",
              "We review your coverage annually to ensure it matches your business growth",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                <p className="text-slate-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Experience the Contractors Choice Agency difference. Get a custom C10
          insurance quote in 15 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="px-8 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors text-lg"
          >
            Get Your Free Quote
          </Link>
          <a
            href="tel:844-967-5247"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-lg"
          >
            <Phone size={20} />
            Call 844-967-5247
          </a>
        </div>
      </div>
    </div>
  );
}
