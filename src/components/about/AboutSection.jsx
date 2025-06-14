import React from "react";
import { Link } from "react-router-dom";
import about_image from "../../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-snug">
            Why Choose Accida Insurance?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Accida Insurance Agency is a trusted name in delivering reliable,
            affordable insurance solutions tailored for Kenyans. Whether it’s
            motor, health, or life — we’ve got you covered.
          </p>
          <p className="text-gray-600 text-base">
            We partner with top underwriters in Kenya to ensure you get policies
            that are competitive and backed by real support when it matters
            most.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Image */}
        <div className="w-full h-[300px] md:h-[360px] overflow-hidden rounded-xl shadow-md">
          <img
            src={about_image}
            alt="About Accida"
            className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
