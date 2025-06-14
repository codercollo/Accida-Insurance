import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const PAQuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    occupation: "",
    coverLimit: "500000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: formData.fullName,
      phone_number: formData.phone,
      occupation: formData.occupation,
      cover_limit: formData.coverLimit,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_PA_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Quote request submitted successfully!");
        setFormData({
          fullName: "",
          phone: "",
          occupation: "",
          coverLimit: "500000",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to submit quote. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mt-1 border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-1 border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Occupation</label>
        <input
          type="text"
          name="occupation"
          required
          value={formData.occupation}
          onChange={handleChange}
          className="w-full mt-1 border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Cover Limit</label>
        <select
          name="coverLimit"
          value={formData.coverLimit}
          onChange={handleChange}
          className="w-full mt-1 border rounded px-3 py-2"
        >
          <option value="250000">KES 250,000</option>
          <option value="500000">KES 500,000</option>
          <option value="1000000">KES 1,000,000</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
      >
        Submit Quote Request
      </button>
    </form>
  );
};

export default PAQuoteForm;
