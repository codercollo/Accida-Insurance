import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import healthData from "../constants/insuranceProducts/health.json";

const tabConfig = [
  { label: "Inpatient", key: "inpatient" },
  { label: "Outpatient", key: "outpatient" },
  { label: "Combined", key: "combined" },
];

const HealthInsurance = () => {
  const [activeTab, setActiveTab] = useState("inpatient");

  return (
    <>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>
          Health Insurance in Kenya | Inpatient, Outpatient & Combined | Accida
        </title>
        <meta
          name="description"
          content="Explore top-rated health insurance providers in Kenya. Get inpatient, outpatient, or combined coverage options and receive a free personalized quote from Accida Insurance."
        />
        <link rel="canonical" href="https://yourdomain.com/health-insurance" />
      </Helmet>

      <section className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">
            Health Insurance Providers
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
            {healthData[activeTab].map((provider, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {provider.provider}
                </h3>
                <p className="text-gray-700 mb-4">{provider.description}</p>
                <Link
                  to="/quote?tab=health"
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

export default HealthInsurance;
