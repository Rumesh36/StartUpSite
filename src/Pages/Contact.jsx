import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-500 text-white flex flex-col items-center px-6 py-20 font-sans">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-center text-lg mb-10 max-w-2xl">
        Have questions or want to work with us? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-2xl hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center space-y-2">
        <p>Email: contact@yourcompany.com</p>
        <p>Phone:+91 987654321</p>
        <p>Address: 123 Street, HITech City</p>
      </div>
    </div>
  );
};

export default Contact;
