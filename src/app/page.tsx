import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Users,
  Car,
  Wrench,
  FileText,
  CheckCircle,
  Star,
  Phone,
  Clock,
  Award,
  MapPin,
  ChevronDown,
  Zap,
  TrendingUp,
  HeadphonesIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "C10 Insurance | California Electrical Contractor Insurance Specialists",
  description:
    "Insurance built for California C10 licensed electrical contractors. Get general liability, workers comp, commercial auto, tools & equipment, and contractor bonds in 15 minutes.",
};

const coverages = [
  {
    icon: Shield,
    title: "General Liability",
    description:
      "Protect your electrical business from third-party bodily injury and property damage claims. Required for most C10 license holders and client contracts.",
    href: "/coverages/general-liability",
    highlight: "Most requested",
  },
  {
    icon: Users,
    title: "Workers Compensation",
    description:
      "California mandates workers comp for all electrical contractors with employees. We get you compliant fast with competitive rates.",
    href: "/coverages/workers-compensation",
    highlight: "California required",
  },
  {
    icon: Car,
    title: "Commercial Auto",
    description:
      "Cover your work vans, trucks, and service vehicles. Personal auto policies don't cover commercial use — don't leave your fleet exposed.",
    href: "/coverages/commercial-auto",
    highlight: "Fleet coverage",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    description:
      "Your meters, conduit benders, wire strippers, and specialty electrical tools represent thousands in investment. Keep them protected on every job.",
    href: "/coverages/tools-equipment",
    highlight: "On-site protection",
  },
  {
    icon: FileText,
    title: "Contractor Bond",
    description:
      "California C10 contractors need a state-required contractor license bond. We handle the paperwork quickly so you can stay licensed and compliant.",
    href: "/coverages/contractor-bond",
    highlight: "License requirement",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "C10 Specialists",
    description:
      "We don't insure everyone — we specialize in California electrical contractors. That means better rates, faster quotes, and agents who understand your work.",
  },
  {
    icon: Clock,
    title: "15-Minute Quotes",
    description:
      "Get a complete insurance quote in 15 minutes or less. We know your time is valuable on the job site, so we keep the process fast and simple.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description:
      "Contractors Choice Agency has been protecting California contractors since 2005. Our founder is a former contractor who understands the industry from the inside.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Claims Support",
    description:
      "Accidents don't wait for business hours. Our claims team is available around the clock with a guaranteed 2-hour response time.",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Business",
    description:
      "Complete a simple online form with your business details — trade type, annual revenue, number of employees, and the coverages you need.",
  },
  {
    num: "02",
    title: "Receive Your Custom Quote",
    description:
      "Within 15 minutes, you'll receive a detailed quote from our network of A+ rated carriers, optimized specifically for C10 electrical contractors.",
  },
  {
    num: "03",
    title: "Get Covered Immediately",
    description:
      "Review your options, select your coverage, and get your certificate of insurance the same day. We handle all the paperwork.",
  },
];

const testimonials = [
  {
    name: "Miguel Torres",
    company: "Torres Electrical Services",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I've been running my C10 electrical business for 12 years and went through three different brokers before finding CCA. They got me better coverage at a lower premium than anyone else, and the quote took about 10 minutes. When I had a claim last year, they had someone on the phone within an hour.",
  },
  {
    name: "James Whitfield",
    company: "Whitfield Electric Inc.",
    location: "San Diego, CA",
    rating: 5,
    text: "Getting workers comp as a small electrical contractor used to be a nightmare — high rates, mountains of paperwork. C10 Insurance made the whole process easy. They know California requirements cold and got me compliant same-day. Highly recommend for any C10 contractor.",
  },
  {
    name: "Sandra Chen",
    company: "Premier Electrical Contractors",
    location: "Sacramento, CA",
    rating: 5,
    text: "We have a fleet of 8 work vans and a crew of 15 electricians. Managing all that insurance was a headache until we switched to Contractors Choice Agency. They bundled everything — GL, workers comp, commercial auto — and saved us over $4,000 a year. The service is exceptional.",
  },
];

const faqs = [
  {
    q: "What insurance does a California C10 license holder actually need?",
    a: "California C10 license holders are required to carry a contractor license bond ($25,000) and must have workers compensation if they have employees. Most commercial clients also require general liability insurance (typically $1M per occurrence). Commercial auto coverage is needed for any business vehicles, and tools & equipment coverage protects your investment in specialty electrical tools and equipment.",
  },
  {
    q: "How much does C10 electrical contractor insurance cost in California?",
    a: "Cost varies based on your annual revenue, number of employees, claims history, and the type of electrical work you do. General liability for a sole proprietor C10 contractor typically starts around $500-$1,200/year. Workers compensation rates in California are set by the state and depend on your payroll and employee classification codes. Contact us for a precise quote — it takes about 15 minutes.",
  },
  {
    q: "Do I need insurance if I'm a solo C10 contractor with no employees?",
    a: "Even as a sole proprietor, you should carry general liability insurance. Most commercial property owners and general contractors require proof of GL before allowing you on a job site. You're also personally exposed to lawsuits from any bodily injury or property damage that occurs during your work. A contractor bond is also required by the California Contractors State License Board (CSLB) regardless of whether you have employees.",
  },
  {
    q: "How quickly can I get a certificate of insurance?",
    a: "Same day in most cases. We can issue quotes within 15 minutes and certificates of insurance the same day once you've selected your coverage. If a contractor or property owner needs proof of insurance before you can start a job tomorrow, we can get that done for you.",
  },
  {
    q: "Does my regular car insurance cover my work van?",
    a: "No. Personal auto insurance policies specifically exclude vehicles used for commercial purposes. If you use a vehicle to haul tools, drive to job sites, or transport employees, you need commercial auto insurance. Driving without commercial auto coverage on a work vehicle creates serious financial exposure if you're in an accident.",
  },
  {
    q: "What's the difference between a contractor bond and contractor insurance?",
    a: "A contractor bond (license bond) is a financial guarantee that protects your clients if you fail to complete a job or violate contractor laws — it's a CSLB requirement for your C10 license. Insurance protects you and your business from liability claims, property damage, and injuries. You need both: the bond to stay licensed and the insurance to protect your business from claims.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="2" fill="white" opacity="0.5"/>
                <circle cx="60" cy="60" r="2" fill="white" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Zap size={14} className="text-accent-400" />
              California C10 Electrical Contractor Specialists
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Insurance Built for{" "}
              <span className="text-accent-400">California C10</span>{" "}
              Electrical Contractors
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Get specialized coverage designed for licensed electrical
              contractors — general liability, workers comp, commercial auto,
              tools & equipment, and contractor bonds. Quote in 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-lg shadow-lg"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-lg"
              >
                <Phone size={20} />
                844-967-5247
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black text-brand-700">20+</span>
              <span className="text-sm text-slate-500 font-medium">Years in Business</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black text-brand-700">15 min</span>
              <span className="text-sm text-slate-500 font-medium">Quote Turnaround</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black text-brand-700">50</span>
              <span className="text-sm text-slate-500 font-medium">States Licensed</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black text-brand-700">A+</span>
              <span className="text-sm text-slate-500 font-medium">Rated Carriers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverages Grid */}
      <section className="py-20 bg-slate-50 circuit-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Complete Coverage for C10 Electrical Contractors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every coverage your C10 electrical business needs — bundled or
              standalone. We match you with the right policies at the best
              available rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((coverage) => {
              const Icon = coverage.icon;
              return (
                <Link
                  key={coverage.href}
                  href={coverage.href}
                  className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-200 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <Icon className="text-brand-700" size={24} />
                    </div>
                    <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
                      {coverage.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {coverage.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {coverage.description}
                  </p>
                  <span className="text-brand-700 font-semibold text-sm group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              );
            })}

            {/* CTA card */}
            <div className="bg-brand-700 rounded-2xl p-7 text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-accent-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Not sure what you need?
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Our C10 specialists will review your business and recommend
                  the right coverage mix for your specific situation.
                </p>
              </div>
              <Link
                href="/quote"
                className="mt-6 inline-block text-center px-5 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-sm"
              >
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Why California C10 Contractors Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're not a generalist broker. We've spent 20+ years building deep
              expertise in contractor insurance so you get better coverage,
              faster service, and real expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-brand-700" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Get Insured in 3 Simple Steps
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              From quote to coverage in under a day. We handle the complexity so
              you can get back to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector lines */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-brand-100 z-0" />

            {steps.map((step) => (
              <div
                key={step.num}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-brand-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors text-lg shadow-sm"
            >
              Start Your Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              What California Electricians Say
            </h2>
            <p className="text-lg text-slate-600">
              Hundreds of C10 electrical contractors trust us to protect their
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.company}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                    <MapPin size={11} />
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from California C10 electrical contractors about
              insurance requirements and coverage.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-slate-100 shadow-sm"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-slate-900">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <CheckCircle size={14} className="text-accent-400" />
            No obligation — free quote in 15 minutes
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Protect Your C10 Electrical Business Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of California electrical contractors who trust
            Contractors Choice Agency for fast, affordable, specialized
            insurance coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors text-lg shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-lg"
            >
              <Phone size={20} />
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
