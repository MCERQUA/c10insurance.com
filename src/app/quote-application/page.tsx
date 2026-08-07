"use client";

// Fields are taken VERBATIM from /workspace/_app-specs/workers-comp-and-auto-intake/SPEC.md
// section 2 (Josh's 2026-03-31 "Auto Insurance" email) plus the "have these ready" notes
// block from his 2026-05-27 email. Do not add underwriting questions that are not in that
// spec — ask Josh instead.
//
// Submits multipart to /__forms.html (a static asset Next.js never intercepts). Posting to
// the page path is silently swallowed by the Next.js route cache on @netlify/plugin-nextjs —
// the browser still gets a 200 and the lead is destroyed.

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle,
  Plus,
  Trash2,
  Phone,
  IdCard,
  Car,
  FileText,
  Upload,
} from "lucide-react";

const FORM_NAME = "auto-application";

// Netlify Forms stores one file per file input, so each upload group gets a fixed set of
// named slots rather than a single `multiple` input.
const LICENSE_SLOTS = [
  "drivers_licenses",
  "drivers_licenses_2",
  "drivers_licenses_3",
  "drivers_licenses_4",
];
const VEHICLE_PHOTO_SLOTS = [
  "vehicle_photos",
  "vehicle_photos_2",
  "vehicle_photos_3",
  "vehicle_photos_4",
];

const inputClass =
  "w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";
const fileClass =
  "w-full text-sm text-slate-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 border border-slate-200 rounded-xl p-2";

export default function QuoteApplicationPage() {
  const [drivers, setDrivers] = useState([{ name: "", dob: "", license: "" }]);
  const [vins, setVins] = useState([{ vin: "", description: "" }]);
  const [licenseSlots, setLicenseSlots] = useState(1);
  const [photoSlots, setPhotoSlots] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const updateDriver = (i: number, key: "name" | "dob" | "license", value: string) =>
    setDrivers((prev) => prev.map((d, idx) => (idx === i ? { ...d, [key]: value } : d)));
  const updateVin = (i: number, key: "vin" | "description", value: string) =>
    setVins((prev) => prev.map((v, idx) => (idx === i ? { ...v, [key]: value } : v)));

  const driverNamesSummary = drivers
    .filter((d) => d.name || d.dob || d.license)
    .map(
      (d) =>
        `${d.name || "(no name)"} | DOB ${d.dob || "(not given)"} | Licence # ${
          d.license || "(not given)"
        }`
    )
    .join("\n");

  const vehicleVinsSummary = vins
    .filter((v) => v.vin || v.description)
    .map((v) => `${v.vin || "(no VIN)"} | ${v.description || "(no description)"}`)
    .join("\n");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    // FormData carries the file inputs; do NOT set Content-Type — the browser must add the
    // multipart boundary itself.
    const data = new FormData(form);

    try {
      const res = await fetch("/__forms.html", { method: "POST", body: data });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(
        "We could not submit your application. Please call 844-967-5247 or email josh@contractorschoiceagency.com and we will take it over the phone."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-28 pb-20 bg-slate-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Application Received</h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thanks — your information is with our team. A licensed agent will review your
            drivers, vehicles and prior coverage and get back to you. If anything is missing we
            will call you.
          </p>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
            <p className="text-sm text-slate-500 mb-1">Need to talk right now?</p>
            <a
              href="tel:844-967-5247"
              className="text-2xl font-black text-brand-700 hover:text-brand-800 transition-colors"
            >
              844-967-5247
            </a>
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
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Car size={14} />
            Personal Auto — Classic &amp; Custom C10 Pickups
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">Auto Insurance Application</h1>
          <p className="text-slate-600">
            Lowered, lifted, custom engines, custom transmissions, custom paint — tell us about
            your drivers and your trucks and we will quote it properly.
          </p>
        </div>

        {/* "Have these ready" notes block — Josh, 2026-05-27 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Before you start, have these ready
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <IdCard className="text-brand-700 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-slate-700">
                <strong className="text-slate-900">Driver&apos;s license</strong> — a photo of the
                licence for every driver in the household.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Car className="text-brand-700 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-slate-700">
                <strong className="text-slate-900">VIN</strong> — the 17-character VIN for every
                vehicle and trailer you want covered.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="text-brand-700 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-slate-700">
                <strong className="text-slate-900">Current insurance ID card</strong> — your prior
                auto insurance of any type, including personal auto or a family member who lives
                in the same household.
              </span>
            </li>
          </ul>
        </div>

        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          encType="multipart/form-data"
          action="/__forms.html"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 space-y-10"
        >
          {/* Netlify Forms: must exactly match the form name attribute. */}
          <input type="hidden" name="form-name" value={FORM_NAME} />

          {/* Honeypot */}
          <div style={{ display: "none" }}>
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {/* Contact block — not part of Josh's field list, but a quote cannot be returned
              without a way to reach the applicant. */}
          <fieldset>
            <legend className="text-xl font-bold text-slate-900 mb-1">
              Where should we send the quote?
            </legend>
            <p className="text-sm text-slate-500 mb-5">So we can get back to you.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c10-contact_name" className={labelClass}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="c10-contact_name"
                  name="contact_name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="c10-contact_phone" className={labelClass}>
                  Phone *
                </label>
                <input
                  type="tel"
                  id="c10-contact_phone"
                  name="contact_phone"
                  required
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c10-contact_email" className={labelClass}>
                  Email *
                </label>
                <input
                  type="email"
                  id="c10-contact_email"
                  name="contact_email"
                  required
                  className={inputClass}
                />
              </div>
            </div>
          </fieldset>

          {/* SPEC fields 1-2: drivers. Josh's warning, verbatim, as visible text. */}
          <fieldset>
            <legend className="text-xl font-bold text-slate-900 mb-4">Drivers</legend>

            <div
              role="alert"
              className="flex items-start gap-3 rounded-xl bg-red-50 border-2 border-red-300 p-4 mb-6"
            >
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-red-800 font-bold">
                All drivers must be listed or they are not covered
              </p>
            </div>

            <div className="space-y-4 mb-4">
              {drivers.map((driver, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-700">Driver {i + 1}</span>
                    {drivers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setDrivers((p) => p.filter((_, idx) => idx !== i))}
                        className="inline-flex items-center text-sm text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={15} className="mr-1" />
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor={`c10-driver_names-${i}`} className={labelClass}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id={`c10-driver_names-${i}`}
                        name="driver_names"
                        required
                        value={driver.name}
                        onChange={(e) => updateDriver(i, "name", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor={`c10-driver_dob-${i}`} className={labelClass}>
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id={`c10-driver_dob-${i}`}
                        name="driver_date_of_birth"
                        required
                        value={driver.dob}
                        onChange={(e) => updateDriver(i, "dob", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor={`c10-driver_license-${i}`} className={labelClass}>
                        Licence Number *
                      </label>
                      <input
                        type="text"
                        id={`c10-driver_license-${i}`}
                        name="driver_license_number"
                        required
                        value={driver.license}
                        onChange={(e) => updateDriver(i, "license", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <input type="hidden" name="driver_names_summary" value={driverNamesSummary} />

            <button
              type="button"
              onClick={() => setDrivers((p) => [...p, { name: "", dob: "", license: "" }])}
              className="inline-flex items-center px-4 py-2 border border-brand-700 text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors mb-8"
            >
              <Plus size={16} className="mr-2" />
              Add another driver
            </button>

            {/* SPEC field 1: licence photo uploads */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Driver&apos;s Licence Photos
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Upload a photo of the licence for each driver listed above.
              </p>
              <div className="space-y-3">
                {LICENSE_SLOTS.slice(0, licenseSlots).map((slot, i) => (
                  <div key={slot}>
                    <label htmlFor={`c10-${slot}`} className={labelClass}>
                      Driver&apos;s Licence — photo upload {i + 1}
                      {i === 0 ? " *" : ""}
                    </label>
                    <input
                      type="file"
                      id={`c10-${slot}`}
                      name={slot}
                      required={i === 0}
                      accept="image/*,.pdf"
                      className={fileClass}
                    />
                  </div>
                ))}
              </div>
              {licenseSlots < LICENSE_SLOTS.length && (
                <button
                  type="button"
                  onClick={() => setLicenseSlots((n) => n + 1)}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  <Upload size={15} className="mr-1.5" />
                  Add another licence photo
                </button>
              )}
            </div>
          </fieldset>

          {/* SPEC fields 3-4: vehicles. Josh's warning, verbatim, as visible text. */}
          <fieldset>
            <legend className="text-xl font-bold text-slate-900 mb-4">Vehicles &amp; Trailers</legend>

            <div
              role="alert"
              className="flex items-start gap-3 rounded-xl bg-red-50 border-2 border-red-300 p-4 mb-6"
            >
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-red-800 font-bold">
                All vehicles must be listed or they are not covered
              </p>
            </div>

            <div className="space-y-4 mb-4">
              {vins.map((v, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-700">Vehicle {i + 1}</span>
                    {vins.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setVins((p) => p.filter((_, idx) => idx !== i))}
                        className="inline-flex items-center text-sm text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={15} className="mr-1" />
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={`c10-vehicle_vins-${i}`} className={labelClass}>
                        VIN *
                      </label>
                      <input
                        type="text"
                        id={`c10-vehicle_vins-${i}`}
                        name="vehicle_vins"
                        required
                        maxLength={17}
                        placeholder="17-character VIN"
                        value={v.vin}
                        onChange={(e) => updateVin(i, "vin", e.target.value.toUpperCase())}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor={`c10-vehicle_description-${i}`} className={labelClass}>
                        Year / Make / Model — and any modifications
                      </label>
                      <input
                        type="text"
                        id={`c10-vehicle_description-${i}`}
                        name="vehicle_description"
                        placeholder="e.g. 1972 Chevy C10 — lowered, 383 stroker, custom paint"
                        value={v.description}
                        onChange={(e) => updateVin(i, "description", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <input type="hidden" name="vehicle_vins_summary" value={vehicleVinsSummary} />

            <button
              type="button"
              onClick={() => setVins((p) => [...p, { vin: "", description: "" }])}
              className="inline-flex items-center px-4 py-2 border border-brand-700 text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors mb-8"
            >
              <Plus size={16} className="mr-2" />
              Add another vehicle or trailer
            </button>

            {/* SPEC field 4: vehicle / VIN photo uploads */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">VIN / Vehicle Photos</h3>
              <p className="text-sm text-slate-500 mb-4">
                A photo of the VIN plate, and photos of the truck itself if you have them.
              </p>
              <div className="space-y-3">
                {VEHICLE_PHOTO_SLOTS.slice(0, photoSlots).map((slot, i) => (
                  <div key={slot}>
                    <label htmlFor={`c10-${slot}`} className={labelClass}>
                      VIN / vehicle photo upload {i + 1}
                    </label>
                    <input
                      type="file"
                      id={`c10-${slot}`}
                      name={slot}
                      accept="image/*,.pdf"
                      className={fileClass}
                    />
                  </div>
                ))}
              </div>
              {photoSlots < VEHICLE_PHOTO_SLOTS.length && (
                <button
                  type="button"
                  onClick={() => setPhotoSlots((n) => n + 1)}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  <Upload size={15} className="mr-1.5" />
                  Add another vehicle photo
                </button>
              )}
            </div>
          </fieldset>

          {/* SPEC fields 5-6: prior insurance */}
          <fieldset>
            <legend className="text-xl font-bold text-slate-900 mb-1">Prior Auto Insurance</legend>
            <p className="text-sm text-slate-500 mb-5">
              Any type counts — including personal auto, or a family member who lives in the same
              household.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="c10-prior_carrier_name" className={labelClass}>
                  Prior carrier name *
                </label>
                <input
                  type="text"
                  id="c10-prior_carrier_name"
                  name="prior_carrier_name"
                  required
                  placeholder="e.g. State Farm, Progressive, Hagerty"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="c10-prior_auto_insurance" className={labelClass}>
                  Current insurance ID card — upload
                </label>
                <input
                  type="file"
                  id="c10-prior_auto_insurance"
                  name="prior_auto_insurance"
                  accept="image/*,.pdf"
                  className={fileClass}
                />
              </div>
              <div>
                <label htmlFor="c10-prior_auto_insurance_details" className={labelClass}>
                  Prior auto insurance — details
                </label>
                <textarea
                  id="c10-prior_auto_insurance_details"
                  name="prior_auto_insurance_details"
                  rows={3}
                  placeholder="Policy number, dates covered, and whose policy it is if it belongs to a family member in the same household."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          </fieldset>

          {error && (
            <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
              <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
              <span>{error}</span>
            </div>
          )}

          <div className="border-t border-slate-200 pt-6">
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            >
              {submitting ? "Submitting…" : "Submit Application"}
              {!submitting && <CheckCircle size={20} />}
            </button>
            <p className="mt-4 text-sm text-slate-500 text-center">
              Questions? Call{" "}
              <a href="tel:844-967-5247" className="text-brand-700 font-semibold hover:underline">
                844-967-5247
              </a>{" "}
              or email{" "}
              <a
                href="mailto:josh@contractorschoiceagency.com"
                className="text-brand-700 font-semibold hover:underline"
              >
                josh@contractorschoiceagency.com
              </a>
              .
            </p>
          </div>
        </form>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-green-500" />
            No obligation
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-green-500" />
            Agreed-value options for custom builds
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
