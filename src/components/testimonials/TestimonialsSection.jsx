import React from "react";
import testimonials from "../../constants/testimonials.json";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, comment, location }) => (
            <div key={id} className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-700 mb-4">"{comment}"</p>
              <div className="text-sm text-gray-500 font-semibold">
                {name} - {location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
