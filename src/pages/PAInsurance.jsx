import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import paData from "../constants/insuranceProducts/pa.json";

const tabConfig = [
  { label: "Standard Cover", key: "standard" },
  { label: "Executive Cover", key: "executive" },
];

const PAInsurance = () => {
  const [activeTab, setActiveTab] = useState("standard");

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Personal Accident Insurance in Kenya | Accida Insurance</title>
        <meta
          name="description"
          content="Compare Standard and Executive Personal Accident Insurance plans in Kenya. Discover trusted providers and get a free quote tailored to your needs."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/personal-accident-insurance"
        />
      </Helmet>

      <section className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">
            Personal Accident Insurance Providers
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabConfig.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full font-medium transition text-sm md:text-base ${
                  activeTab === tab.key
                    ? "bg-blue-700 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Provider Listings */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {paData[activeTab].map((provider, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {provider.provider}
                </h3>
                <p className="text-gray-700 mb-4">{provider.description}</p>
                <Link
                  to="/quote?tab=pa"
                  className="inline-block bg-blue-700 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-800 transition"
                >
                  {provider.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PAInsurance;
