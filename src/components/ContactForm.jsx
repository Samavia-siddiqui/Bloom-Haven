import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
  };

  return (
    <div className="py-16 px-6 bg-white flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-pink-100 p-8 shadow-xl rounded-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Send Message
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full mb-4"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full mb-4"
          rows="4"
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn bg-pink-300 hover:bg-pink-400 border-none text-white w-full rounded-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;