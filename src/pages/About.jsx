import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 mb-6">Who We Are</h1>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Accida Insurance Agency is a licensed and trusted insurance
            intermediary in Kenya. We specialize in providing accessible,
            affordable, and personalized insurance services to individuals,
            families, and businesses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Whether it’s motor, health, personal accident, or property
            insurance, we work with reputable underwriters to get you
            covered—quickly and confidently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Our mission is simple: to protect what matters most to you and give
            you peace of mind. We’re here to make insurance easier, clearer, and
            more human.
          </p>

          {/* CTA Button */}
          <Link
            to="/quote"
            className="inline-block bg-blue-700 text-white text-base font-medium px-6 py-3 rounded-full hover:bg-blue-800 transition duration-200 shadow"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Accida Insurance"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded text-xs shadow-lg">
            Trusted by Kenyans
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
