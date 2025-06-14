import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 border rounded px-3 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
