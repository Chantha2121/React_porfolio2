import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions or need help? Get in touch with us.
          </p>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="space-y-6 bg-white p-6 shadow-md rounded-lg"
            action="https://getform.io/f/bgdyoxza"
            method="POST"
          >
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded font-semibold"
            >
              Submit
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-white p-6 shadow-md rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p>1234 Street Name, City, State, Country</p>
            <p>Email: contact@company.com</p>
            <p>Phone: +123 456 7890</p>
            
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-6 text-xl">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
