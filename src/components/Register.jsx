// Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://forms.zohopublic.in/aultuminternational1/form/Joinourtechiescommunity/formperma/sp3Swqcri7uDmMmzn3PmhRIbhUyyo5qhUx9cu1hQofc/htmlRecords/submit",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <div className="absolute top-0 left-0 h-[360px] w-full bg-gradient-to-br from-pink-900 via-purple-300 to-blue-600 opacity-80 blur-[100px]" />

        <div className="relative z-10 w-full max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              Registration Successful!
            </h2>
            <p className="text-zinc-600 mb-8">
              Thank you for joining our community. We'll get in touch with you shortly.
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-zinc-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 h-[360px] w-full bg-gradient-to-br from-pink-900 via-purple-300 to-blue-600 opacity-80 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-20 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Join Our Techies Community
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 sm:text-[14px] md:text-[18px] lg:text-[20px]">
            Connect with 500+ techies across India and accelerate your growth
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-3">
                  Name
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_First"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_Last"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="PhoneNumber_countrycode"
                  maxLength="20"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

       
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  maxLength="255"
                  name="Email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-3">
                  Address
                </label>
                <div className="space-y-4">
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_AddressLine1"
                    required
                    placeholder="Street Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_AddressLine2"
                    placeholder="Address Line 2 (Optional)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      maxLength="255"
                      name="Address_City"
                      required
                      placeholder="City"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      maxLength="255"
                      name="Address_Region"
                      required
                      placeholder="State / Region"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      maxLength="255"
                      name="Address_ZipCode"
                      required
                      placeholder="Postal / Zip Code"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <select
                      name="Address_Country"
                      required
                      defaultValue="-Select-"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="-Select-" disabled>
                        Select Country
                      </option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Singapore">Singapore</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                  Qualification
                </label>
                <input
                  type="text"
                  name="SingleLine"
                  maxLength="255"
                  required
                  placeholder="Enter your Qualification"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 mt-6 ${
                  isSubmitting
                    ? "bg-zinc-400 cursor-not-allowed"
                    : "bg-zinc-900 hover:bg-zinc-800 hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/")}
              className="text-zinc-600 hover:text-zinc-900 text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}