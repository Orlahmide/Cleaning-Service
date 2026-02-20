// components/BeforeAfterSlider.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "../assets/BeforeAndAfterImages/PHOTO-1.jpg";
import image2 from "../assets/BeforeAndAfterImages/PHOTO-2.jpg";
import image3 from "../assets/BeforeAndAfterImages/PHOTO-3.jpg";
import image4 from "../assets/BeforeAndAfterImages/PHOTO-4.jpg";
import image5 from "../assets/BeforeAndAfterImages/PHOTO-5.jpg";
import image6 from "../assets/BeforeAndAfterImages/PHOTO-6.jpg";
import image7 from "../assets/BeforeAndAfterImages/PHOTO-7.jpg";
import image8 from "../assets/BeforeAndAfterImages/PHOTO-8.jpg";
import image9 from "../assets/BeforeAndAfterImages/PHOTO-9.jpg";
import image10 from "../assets/BeforeAndAfterImages/PHOTO-10.jpg";
import image11 from "../assets/BeforeAndAfterImages/PHOTO-11.jpg";
import image12 from "../assets/BeforeAndAfterImages/PHOTO-12.jpeg";
import image13 from "../assets/BeforeAndAfterImages/PHOTO-13.jpeg";
import image14 from "../assets/BeforeAndAfterImages/PHOTO-14.jpeg";
import image15 from "../assets/BeforeAndAfterImages/PHOTO-15.jpeg";
import image17 from "../assets/BeforeAndAfterImages/PHOTO-17.jpeg";
import image18 from "../assets/BeforeAndAfterImages/PHOTO-18.jpeg";
import image19 from "../assets/BeforeAndAfterImages/PHOTO-19.jpeg";
import image21 from "../assets/BeforeAndAfterImages/PHOTO-21.jpeg";




const BeforeAfterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images hardcoded inside the component
  const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image17,image18,image19,image21
  ];

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 7000);

  return () => clearInterval(interval);
}, [currentIndex]); // 

  return (
    <section className="bg-gray-50 py-2 px-3 mb-10 text-center">
      <div className="max-w-xl mx-auto relative">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-[#1E3A8A] mb-4">
          Spot the Difference!
        </h2>
        {/* Gold line under heading */}
        <div className="flex justify-center mb-6">
          <span className="w-96 h-1 rounded-full bg-gradient-to-r from-[#C6A35A] via-[#E6D7A3] to-[#C6A35A] shadow-md"></span>
        </div>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Here’s a glimpse of our cleaning transformations — before and after!
        </p>

        {/* Image container, invisible */}
        <div className="relative h-[400px] sm:h-[400px]">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain object-center transform transition-transform duration-500"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
        >
          <FaChevronLeft className="text-yellow-500" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
        >
          <FaChevronRight className="text-yellow-500" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-[#C6A35A]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
