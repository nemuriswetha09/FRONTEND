import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();  // ✅ Parse JSON response
      console.log('✅ Server Response in frontend:', data);
      alert("Message sent successfully!");
      
      // Optional: Clear form after submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('❌ Error sending message:', error);
      alert("Failed to send message");
    }
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
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
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
