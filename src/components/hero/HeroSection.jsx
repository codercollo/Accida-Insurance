import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-24 relative overflow-hidden" id="home" >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/images/insurance-bg-pattern.svg')] bg-cover bg-center pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in-up">
            Accida Insurance Agency
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Your trusted partner in Kenya for reliable, affordable, and
            personalized insurance solutions — from motor and health to personal
            accident cover.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/quote"
              className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </Link>
            <a
              href="#products"
              className="border border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
