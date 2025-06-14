import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Accida Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>


          {/* Products Dropdown */}
          <div className="relative group">
            <button className="nav-link">Products</button>
            <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <Link to="/motor" className="block px-4 py-2 hover:bg-gray-100">
                Motor Insurance
              </Link>
              <Link to="/pa" className="block px-4 py-2 hover:bg-gray-100">
                Personal Accident
              </Link>
              <Link to="/health" className="block px-4 py-2 hover:bg-gray-100">
                Health Insurance
              </Link>
            </div>
          </div>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>

          <Link
            to="/quote"
            className="ml-4 bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
