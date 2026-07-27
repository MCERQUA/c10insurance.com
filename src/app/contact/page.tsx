"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

// Note: metadata cannot be exported from a client component.
// This page uses client state for form submission.

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/__forms.html', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString(),
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-12 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Have questions about C10 electrical contractor insurance? Our
            specialists are ready to help.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a
                    href="tel:844-967-5247"
                    className="text-brand-700 font-bold text-lg hover:text-brand-800 transition-colors"
                  >
                    844-967-5247
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon–Fri 8am–6pm PT</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:josh@contractorschoiceagency.com"
                    className="text-brand-700 hover:text-brand-800 transition-colors"
                  >
                    josh@contractorschoiceagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Office</p>
                  <p className="text-slate-600">12220 E Riggs Rd</p>
                  <p className="text-slate-600">Chandler, AZ 85249</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Claims — 24/7</p>
                  <p className="text-slate-600 text-sm">
                    We answer claims calls around the clock with a guaranteed
                    2-hour response.
                  </p>
                  <a
                    href="tel:844-967-5247"
                    className="text-brand-700 font-semibold text-sm hover:underline"
                  >
                    Call 844-967-5247 anytime →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-brand-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Need a Quote Instead?</h3>
              <p className="text-blue-100 text-sm mb-4">
                If you&apos;re looking for pricing on C10 electrical contractor
                insurance, our online quote form gets you a custom quote in 15
                minutes.
              </p>
              <a
                href="/quote"
                className="inline-block px-5 py-2.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors text-sm"
              >
                Start Your Free Quote
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Received!
                </h3>
                <p className="text-slate-600">
                  Thanks for reaching out. A specialist will get back to you
                  shortly — usually within a few hours during business days.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
              >
                <input type="hidden" name="form-name" value="contact" />
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 555-5555"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                      />
                    </div>
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

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your insurance needs, questions, or anything else we can help with..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
