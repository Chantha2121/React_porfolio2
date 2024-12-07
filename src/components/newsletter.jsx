import React, { useState } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is provided
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm("service_xxxxx", "template_xxxxx", e.target, "user_xxxxx")
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Thank you for subscribing!");
          setEmail(""); // Clear the email field
        },
        (error) => {
          console.error(error.text);
          setMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Subscribe to Our Newsletter</h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest news, promotions, and updates directly to your inbox.
        </p>

        {/* Newsletter Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Join Our Mailing List</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-4 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                Subscribe Now
              </button>
            </div>
          </form>

          {/* Message */}
          {message && <p className="mt-4 text-lg text-gray-700">{message}</p>}
        </div>

        {/* Benefits Section */}
        <div className="mt-12 text-lg text-gray-600">
          <h3 className="text-2xl font-semibold mb-4">Why Subscribe?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Get exclusive access to the latest updates and offers.</li>
            <li>Receive curated content and helpful resources.</li>
            <li>Be the first to know about new products and services.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
