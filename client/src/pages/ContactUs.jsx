import React, { useState } from 'react';

function ContactUs() {
  // State variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    //e.preventDefault(); // Prevent the page from reloading
    // Log the values to the console
    console.log('Form Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        We’d love to hear from you! Reach out to us for any inquiries, feedback, or just to say hi.
      </p>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on input change
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state on input change
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
