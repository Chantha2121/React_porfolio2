import React from 'react';
import home_pic from '../assets/home_page.jpg';

function Hero() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Container */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to Chantha Coding
          </h1>
          <p className="text-gray-300 text-lg">
            Build faster, create more, and innovate<br></br> better with our cutting-edge solutions tailored to your needs.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded font-semibold"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="bg-transparent border border-gray-300 hover:border-white hover:bg-gray-700 text-white py-3 px-6 rounded font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2">
          <img
            src={home_pic}
            alt="Hero Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
