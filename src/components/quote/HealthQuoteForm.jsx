import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const HealthQuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    numberOfDependents: "",
    coverType: "inpatient",
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
      number_of_dependents: formData.numberOfDependents,
      cover_type: formData.coverType,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_HEALTH_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Health quote request submitted successfully!");
        setFormData({
          fullName: "",
          phone: "",
          numberOfDependents: "",
          coverType: "inpatient",
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
        <label className="block text-sm font-medium">
          Number of Dependents
        </label>
        <input
          type="number"
          name="numberOfDependents"
          required
          value={formData.numberOfDependents}
          onChange={handleChange}
          className="w-full mt-1 border rounded px-3 py-2"
          min="0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Cover Type</label>
        <select
          name="coverType"
          value={formData.coverType}
          onChange={handleChange}
          className="w-full mt-1 border rounded px-3 py-2"
        >
          <option value="inpatient">Inpatient</option>
          <option value="outpatient">Outpatient</option>
          <option value="combined">Inpatient + Outpatient</option>
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

export default HealthQuoteForm;
