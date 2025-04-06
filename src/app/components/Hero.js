'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTint, FaVial } from 'react-icons/fa';
import Link from 'next/link';
const layers = [
  {
    title: 'Time-Delay Layer',
    description:
      'Filters out normal fluctuations in pH to avoid false alarms—ensuring the bandage only changes color when a real infection is present.',
    icon: <FaClock className="text-[#8932ad] text-3xl mr-3" />,
  },
  {
    title: 'Wicking Layer',
    description:
      'Pulls moisture from the wound to keep it dry while continuously delivering samples to the pH-sensitive layer.',
    icon: <FaTint className="text-[#8932ad] text-3xl mr-3" />,
  },
  {
    title: 'pH-Sensitive Layer',
    description:
      'Made with a patent-pending, pH-reactive fiber that shifts color from purple to blue when detecting infection-related acidity.',
    icon: <FaVial className="text-[#8932ad] text-3xl mr-3" />,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => setIndex((index + 1) % layers.length);
  const prevSlide = () => setIndex((index - 1 + layers.length) % layers.length);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % layers.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans text-[#1f1f1f]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#8932ad]">
            Smart. Simple. Life-saving.
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Imagine if a bandage could tell you an infection was forming—before symptoms even appear.
          </p>
          <ul className="text-gray-800 space-y-2">
            <li>✔ No expensive doctor visits</li>
            <li>✔ No extra tests</li>
            <li>✔ No waiting</li>
          </ul>
          <p className="text-md md:text-lg mt-4 text-gray-600">
            Introducing <span className="font-semibold text-[#ed4064]">ChromaCare</span>—a color-changing, biodegradable smart bandage that detects infection early. Real-time monitoring at a fraction of the cost.
          </p>
          <div className="mt-6 flex gap-4">
          <Link href="#learn-more" passHref>
            <div className="bg-[#ed4064] hover:bg-[#d62f59] text-white px-6 py-3 rounded-2xl text-sm font-medium transition cursor-pointer">
                Learn More
            </div>
            </Link>

            <Link href="#contact" passHref>
            <div className="border border-[#8932ad] hover:bg-[#8932ad] hover:text-white text-[#8932ad] px-6 py-3 rounded-2xl text-sm font-medium transition cursor-pointer">
                Contact Us
            </div>
            </Link>

          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative w-full h-full flex flex-col justify-center items-center text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full max-w-md bg-[#f9f9f9] border border-gray-200 p-8 rounded-2xl shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  {layers[index].icon}
                  <h2 className="text-2xl font-semibold text-[#8932ad]">{layers[index].title}</h2>
                </div>
                <p className="text-gray-700">{layers[index].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-white border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-full shadow text-sm"
            >
              ← Previous
            </button>
            <button
              onClick={nextSlide}
              className="bg-white border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-full shadow text-sm"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
