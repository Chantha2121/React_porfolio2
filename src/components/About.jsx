import React from "react";
import image from "../assets/no_back_pic.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-blue-50 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-blue-800">About Me</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am passionate about creating impactful solutions and empowering businesses to achieve their goals.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">My Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide tailored solutions that drive innovation, growth, and success for my clients, ensuring long-term results and meaningful impact.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">My Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To establish myself as a trusted leader in technology services, offering transformative solutions that make a difference.
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">About Me</h2>
          <div className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto text-center p-8">
            <img
              src={image}
              alt="Your portrait"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-300 mb-6"
            />
            <h3 className="text-2xl font-bold text-blue-700">Your Name</h3>
            <p className="text-sm text-gray-500 mb-4">Your Role (e.g., Developer, Designer)</p>
            <p className="text-gray-700 leading-relaxed">
              I specialize in [Your Skills/Expertise]. With a passion for innovation and a commitment to excellence, 
              I deliver high-quality solutions that meet the unique needs of my clients. My dedication to growth and learning 
              ensures that I stay ahead of industry trends, helping businesses achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
