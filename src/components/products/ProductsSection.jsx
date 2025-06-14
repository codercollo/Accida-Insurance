import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../constants/products.json";
import {
  FaCar,
  FaHeartbeat,
  FaUserShield,
  FaPlane,
  FaHome,
  FaBriefcase,
} from "react-icons/fa";

const iconMap = {
  FaCar: <FaCar className="text-blue-600 text-3xl" />,
  FaHeartbeat: <FaHeartbeat className="text-blue-600 text-3xl" />,
  FaUserShield: <FaUserShield className="text-blue-600 text-3xl" />,
  FaPlane: <FaPlane className="text-blue-600 text-3xl" />,
  FaHome: <FaHome className="text-blue-600 text-3xl" />,
  FaBriefcase: <FaBriefcase className="text-blue-600 text-3xl" />,
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Insurance Products
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                {iconMap[product.icon] || (
                  <FaBriefcase className="text-blue-600 text-3xl" />
                )}
                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <Link
                to={product.path}
                className="mt-6 inline-block bg-blue-700 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-800 transition self-start"
              >
                Explore {product.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
