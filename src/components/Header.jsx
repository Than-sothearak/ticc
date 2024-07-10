"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Header = () => {
  const slides = [
    { url: "/images/IMG_1914.JPG" },
    { url: "/images/IMG_2637.JPG" },
    { url: "/images/IMG_2531.JPG" },
    { url: "/images/IMG_2639.JPG" },
    { url: "/images/IMG_2248.JPG" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoSliding) {
      intervalRef.current = setInterval(nextSlide, 5000); // Change image every 5 seconds
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup the interval on component unmount
  }, [isAutoSliding]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleButtonClick = () => {
    setIsAutoSliding(false); // Pause auto sliding
    setTimeout(() => {
      setIsAutoSliding(true); // Resume auto sliding after 10 seconds
    }, 10000);
  };

  useEffect(() => {
    if (currentIndex === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 10); // Duration of the transition
    }
  }, [currentIndex]);

  return (
    <div className="max-w-full w-full m-auto z-0 h-[1024px] top-16 flex items-center justify-center relative group">
      <div className="w-full h-full overflow-hidden absolute">
        <div
          className={`flex transition-transform ${
            isTransitioning ? "duration-500" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[1024px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>
          ))}
          {currentIndex === slides.length && (
            <div
              className="min-w-full h-[1024px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[0].url})` }}
            ></div>
          )}
        </div>
      </div>
      <div
        className="z-30 absolute left-5 text-3xl bg-black/20 text-white p-4 rounded-full cursor-pointer"
        onClick={() => {
          prevSlide();
          handleButtonClick();
        }}
      >
        <FaAngleLeft />
      </div>
      <div
        className="z-30 absolute right-5 text-3xl bg-black/20 text-white p-4 rounded-full cursor-pointer"
        onClick={() => {
          nextSlide();
          handleButtonClick();
        }}
      >
        <FaAngleRight />
      </div>
      <div className="bg-opacity-80 w-full h-full"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
        transition={{ duration: 1 }} // Animation duration
        className="text-white text-center p-4 absolute container flex flex-col items-center"
      >
        <div className="w-full">
          <h1 className="font-bold text-[2.986rem]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Empower your innovation
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              with Techno Innovation Challenge
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Cambodia
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-[1rem] mt-4"
          >
            Join our competition program and showcase your STEM-based solutions
            to solve real-world problems. Learn, compete, and win!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="container flex justify-center mt-10 gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }} // Animation on hover
            whileTap={{ scale: 0.9 }} // Animation on tap
            className=""
          >
            <a
              href="#section2"
              className="px-4 py-3 rounded-sm border-white border"
            >
              Learn more
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }} // Animation on hover
            whileTap={{ scale: 0.9 }} // Animation on tap
            className="px-4 py-3 rounded-sm bg-[#FF9A00]"
          >
            Apply now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
