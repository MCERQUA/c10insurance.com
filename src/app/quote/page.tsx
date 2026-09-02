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
    street_address: "",
    drivers_license_issue_date: "",
    drivers_license_expiration_date: "",
    vehicle_year: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_value: "",
    accessories_description: "",
    accessories_value: "",
    current_policy_number: "",
    current_policy_start_date: "",
    current_policy_expiration_date: "",
    current_coverage_limits: "",
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

    // multipart, not urlencoded: the licence and insurance-card fields are file inputs
    // and a urlencoded body would send only their filenames. Only the active wizard step
    // is mounted, so the text fields come from state (above) and the files are read from
    // the DOM here — they render on this last step.
    for (const id of ["drivers_license_upload", "insurance_card_upload"]) {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (el?.files?.[0]) payload.append(id, el.files[0]);
    }
    await fetch('/__forms.html', { method: "POST", body: payload });
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
          encType="multipart/form-data"
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

              {/* Completes the insurance-auto-powersports class field set. */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Driver, Vehicle &amp; Current Policy</h3>
                <p className="text-sm text-slate-500 mb-5">
                  Have these ready: your driver&apos;s licence, the VIN for every vehicle and
                  trailer, and your current insurance ID card. Prefer not to type them? Email or
                  text them to us and we&apos;ll quote from that. Every driver and every vehicle
                  must be listed or they are not covered.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Street address *</label>
                    <input
                      name="street_address"
                      type="text"
                      required
                      value={formData["street_address" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      placeholder="1234 W Main St, Phoenix, AZ 85001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Driver's license issue date *</label>
                    <input
                      name="drivers_license_issue_date"
                      type="date"
                      required
                      value={formData["drivers_license_issue_date" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Driver's license expiration date *</label>
                    <input
                      name="drivers_license_expiration_date"
                      type="date"
                      required
                      value={formData["drivers_license_expiration_date" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Driver's license — photo upload</label>
                    <input id="drivers_license_upload" name="drivers_license_upload" type="file" accept="image/*,application/pdf" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Vehicle year *</label>
                    <input
                      name="vehicle_year"
                      type="text"
                      required
                      value={formData["vehicle_year" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      placeholder="2021"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Vehicle make *</label>
                    <input
                      name="vehicle_make"
                      type="text"
                      required
                      value={formData["vehicle_make" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Vehicle model *</label>
                    <input
                      name="vehicle_model"
                      type="text"
                      required
                      value={formData["vehicle_model" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Vehicle value *</label>
                    <input
                      name="vehicle_value"
                      type="text"
                      required
                      value={formData["vehicle_value" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      placeholder="$45,000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Description of accessories *</label>
                    <textarea
                      name="accessories_description"
                      rows={3}
                      required
                      value={formData["accessories_description" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Value of accessories *</label>
                    <input
                      name="accessories_value"
                      type="text"
                      required
                      value={formData["accessories_value" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      placeholder="$2,500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Current policy number *</label>
                    <input
                      name="current_policy_number"
                      type="text"
                      required
                      value={formData["current_policy_number" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Policy start date *</label>
                    <input
                      name="current_policy_start_date"
                      type="date"
                      required
                      value={formData["current_policy_start_date" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Policy expiration date *</label>
                    <input
                      name="current_policy_expiration_date"
                      type="date"
                      required
                      value={formData["current_policy_expiration_date" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Current coverage limits *</label>
                    <input
                      name="current_coverage_limits"
                      type="text"
                      required
                      value={formData["current_coverage_limits" as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white"
                      placeholder="100/300/100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Current insurance ID card — upload</label>
                    <input id="insurance_card_upload" name="insurance_card_upload" type="file" accept="image/*,application/pdf" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 bg-white" />
                  </div>
                </div>
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
