import React from "react";

// Replace these with your service images
import serviceImage1 from "../assets/ser1.jpg";
import serviceImage2 from "../assets/ser2.png";
import serviceImage3 from "../assets/ser3.png";
import serviceImage4 from "../assets/ser4.png";
import serviceImage5 from "../assets/ser5.jpg";
import serviceImage6 from "../assets/ser6.jpg";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build responsive and modern websites tailored to your needs.",
    image: serviceImage1,
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Create user-friendly mobile apps for iOS and Android.",
    image: serviceImage2,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design interfaces that offer an intuitive and seamless experience.",
    image: serviceImage3,
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Enhance your website's visibility on search engines.",
    image: serviceImage4,
  },
  {
    id: 5,
    title: "E-Commerce Solutions",
    description: "Develop e-commerce platforms for your business growth.",
    image: serviceImage5,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Grow your business with targeted marketing strategies.",
    image: serviceImage6,
  },
];

const Service = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
          <p className="text-gray-600">
            We provide a range of services to help your business thrive and grow in the digital era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Service Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
