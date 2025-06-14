import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const MotorQuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleType: "",
    vehicleUse: "",
    registrationNumber: "",
    coverType: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_MOTOR_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            vehicleType: "",
            vehicleUse: "",
            registrationNumber: "",
            coverType: "",
          });
        },
        (err) => {
          setError("Failed to send. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Vehicle Type</label>
          <input
            type="text"
            name="vehicleType"
            required
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Vehicle Use</label>
          <select
            name="vehicleUse"
            required
            value={formData.vehicleUse}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Private">Private</option>
            <option value="Commercial">Commercial</option>
            <option value="PSV">PSV</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            required
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Cover Type</label>
          <select
            name="coverType"
            required
            value={formData.coverType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Comprehensive">Comprehensive</option>
            <option value="Third Party Only">Third Party Only</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
        disabled={sending}
      >
        {sending ? "Sending..." : "Submit Quote"}
      </button>

      {sent && (
        <p className="text-green-600 mt-2">Quote request sent successfully!</p>
      )}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
};

export default MotorQuoteForm;
