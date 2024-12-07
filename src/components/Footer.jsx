import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section: Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <p className="text-gray-400">
              Delivering quality solutions and services since 2023.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Social Links and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            &copy; 2024 Chantha Coding. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
