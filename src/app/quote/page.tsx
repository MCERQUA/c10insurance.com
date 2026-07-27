"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft, Phone, Zap } from "lucide-react";

const coverageOptions = [
  "General Liability",
  "Workers Compensation",
  "Commercial Auto",
  "Tools & Equipment",
  "Contractor Bond",
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCoverages, setSelectedCoverages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    "contractor-name": "",
    "business-name": "",
    phone: "",
    email: "",
    trade: "",
    "annual-revenue": "",
    employees: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleCoverage = (c: string) => {
    setSelectedCoverages((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("form-name", "quote");
    Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
    payload.append("coverage-types", selectedCoverages.join(", "));

    await fetch('/__forms.html', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(
        Object.fromEntries(payload.entries()) as Record<string, string>
      ).toString(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-28 pb-20 bg-slate-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">
            Quote Request Received!
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thank you{formData["contractor-name"] ? `, ${formData["contractor-name"]}` : ""}! We&apos;ve received your quote request and a C10 insurance specialist will contact you within 15 minutes during business hours.
          </p>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
            <p className="text-sm text-slate-500 mb-1">Need to talk right now?</p>
            <a
              href="tel:844-967-5247"
              className="text-2xl font-black text-brand-700 hover:text-brand-800 transition-colors"
            >
              844-967-5247
            </a>
            <p className="text-xs text-slate-400 mt-1">Available Mon–Fri 8am–6pm PT</p>
          </div>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-brand-700 text-white font-semibold rounded-xl hover:bg-brand-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Zap size={14} />
            Free Quote — No Obligation
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Get Your C10 Insurance Quote
          </h1>
          <p className="text-slate-600">
            Complete the form below and receive a custom quote within 15 minutes.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  s <= step
                    ? "bg-brand-700 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {s < step ? <CheckCircle size={16} /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`flex-1 h-1 rounded transition-colors ${
                    s < step ? "bg-brand-700" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500 mb-8 -mt-4">
          <span className={step >= 1 ? "text-brand-700 font-medium" : ""}>
            Contact Info
          </span>
          <span className={step >= 2 ? "text-brand-700 font-medium" : ""}>
            Business Details
          </span>
          <span className={step >= 3 ? "text-brand-700 font-medium" : ""}>
            Coverage Needs
          </span>
        </div>

        {/* Form */}
        <form
          name="quote"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
        >
          <input type="hidden" name="form-name" value="quote" />

          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Step 1: Your Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="contractor-name"
                    value={formData["contractor-name"]}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="business-name"
                    value={formData["business-name"]}
                    onChange={handleChange}
                    required
                    placeholder="Smith Electric Inc."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 555-5555"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@smithelectric.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={
                  !formData["contractor-name"] ||
                  !formData["business-name"] ||
                  !formData.phone ||
                  !formData.email
                }
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Business Details
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* Step 2: Business Details */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Step 2: About Your Business
              </h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Primary Trade / Specialty *
                </label>
                <select
                  name="trade"
                  value={formData.trade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                >
                  <option value="">Select your primary trade...</option>
                  <option value="commercial-electrical">Commercial Electrical</option>
                  <option value="residential-electrical">Residential Electrical</option>
                  <option value="industrial-electrical">Industrial Electrical</option>
                  <option value="low-voltage">Low Voltage Systems</option>
                  <option value="solar-electrical">Solar / Photovoltaic</option>
                  <option value="ev-charging">EV Charging Installation</option>
                  <option value="data-communications">Data & Communications</option>
                  <option value="fire-alarm">Fire Alarm Systems</option>
                  <option value="general-electrical">General Electrical</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Estimated Annual Revenue *
                  </label>
                  <select
                    name="annual-revenue"
                    value={formData["annual-revenue"]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                  >
                    <option value="">Select range...</option>
                    <option value="under-250k">Under $250,000</option>
                    <option value="250k-500k">$250,000 – $500,000</option>
                    <option value="500k-1m">$500,000 – $1,000,000</option>
                    <option value="1m-2.5m">$1,000,000 – $2,500,000</option>
                    <option value="2.5m-5m">$2,500,000 – $5,000,000</option>
                    <option value="over-5m">Over $5,000,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Number of Employees *
                  </label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                  >
                    <option value="">Select number...</option>
                    <option value="sole-proprietor">Sole Proprietor (just me)</option>
                    <option value="2-5">2–5 employees</option>
                    <option value="6-10">6–10 employees</option>
                    <option value="11-25">11–25 employees</option>
                    <option value="26-50">26–50 employees</option>
                    <option value="over-50">Over 50 employees</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Additional Notes (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any specific coverage requirements, renewal dates, or questions..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-6 py-4 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={
                    !formData.trade ||
                    !formData["annual-revenue"] ||
                    !formData.employees
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Coverage Selection
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Coverage Needs */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Step 3: Coverage Needed
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Select all the coverages you&apos;re interested in. Not sure?
                Select all and our specialist will help you decide.
              </p>
              <input
                type="hidden"
                name="coverage-types"
                value={selectedCoverages.join(", ")}
              />
              <div className="space-y-3">
                {coverageOptions.map((coverage) => (
                  <label
                    key={coverage}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      selectedCoverages.includes(coverage)
                        ? "border-brand-500 bg-brand-50"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedCoverages.includes(coverage)
                          ? "bg-brand-700 border-brand-700"
                          : "border-slate-300"
                      }`}
                      onClick={() => toggleCoverage(coverage)}
                    >
                      {selectedCoverages.includes(coverage) && (
                        <CheckCircle size={14} className="text-white" />
                      )}
                    </div>
                    <span
                      className="font-medium text-slate-900"
                      onClick={() => toggleCoverage(coverage)}
                    >
                      {coverage}
                    </span>
                  </label>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Response guarantee:</strong> Our C10 insurance specialists
                will reach you within 15 minutes during business hours
                (Mon–Fri 8am–6pm PT). For urgent quotes, call{" "}
                <a href="tel:844-967-5247" className="underline font-semibold">
                  844-967-5247
                </a>{" "}
                directly.
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-6 py-4 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={selectedCoverages.length === 0}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  Submit Quote Request
                  <CheckCircle size={20} />
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-green-500" />
            No obligation
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-green-500" />
            15-min response
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-green-500" />
            A+ rated carriers
          </div>
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-brand-700" />
            <a href="tel:844-967-5247" className="text-brand-700 font-medium hover:underline">
              844-967-5247
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
