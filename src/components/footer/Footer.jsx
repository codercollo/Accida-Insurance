import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Accida Insurance</h2>
          <p className="text-sm text-gray-200">
            Trusted insurance agency in Kenya offering personalized coverage for
            individuals and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline ">
                 Home
              </a>
          </li>
            <li>
              <a href="#products" className="hover:underline ">
                Product
              </a>
            </li>
            <li>
              <a href="#quotes" className="hover:underline ">
                Qoutes
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline ">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+254 741775492</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>info@accidainsurance.co.ke</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-300 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Accida Insurance Agency. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
