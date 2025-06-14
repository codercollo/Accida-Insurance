import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Talk to Us</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Have questions or need help choosing the right insurance product? Our
          friendly agents are here to help.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
