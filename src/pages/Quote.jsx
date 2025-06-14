import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MotorQuoteForm from "../components/quote/MotorQuoteForm";
import HealthQuoteForm from "../components/quote/HealthQuoteForm";
import PAQuoteForm from "../components/quote/PAQuoteForm";

const Quote = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "motor";

  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { label: "Motor Insurance", key: "motor" },
    { label: "Health Insurance", key: "health" },
    { label: "Personal Accident", key: "pa" },
  ];

  useEffect(() => {
    const tabParam = new URLSearchParams(location.search).get("tab");
    if (tabParam && tabs.some((t) => t.key === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Request an Insurance Quote | Motor, Health & PA | Accida</title>
        <meta
          name="description"
          content="Get a free insurance quote tailored to your needs. Choose from Motor, Health, or Personal Accident insurance. Fast, easy, and secure with Accida Insurance Agency."
        />
        <link rel="canonical" href="https://yourdomain.com/quote" />
      </Helmet>

      <section className="py-16 bg-gray-100 min-h-screen" id="quotes">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
            Request a Free Insurance Quote
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded font-medium transition ${
                  activeTab === tab.key
                    ? "bg-blue-700 text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Form */}
          <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
            {activeTab === "motor" && <MotorQuoteForm />}
            {activeTab === "health" && <HealthQuoteForm />}
            {activeTab === "pa" && <PAQuoteForm />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
