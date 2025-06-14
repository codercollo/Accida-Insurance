import React from "react";
import { Link } from "react-router-dom";

const QuoteCTASection = () => {
  return (
    <section className="bg-blue-700 text-white py-16" id="quotes">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need a Quick Insurance Quote?
        </h2>
        <p className="text-lg mb-6">
          Answer a few simple questions and get a free quote tailored to your
          needs.
        </p>
        <Link
          to="/quote"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
};

export default QuoteCTASection;
