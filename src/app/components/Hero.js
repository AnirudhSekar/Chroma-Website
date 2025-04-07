'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTint, FaVial, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const layers = [
  {
    title: 'Time-Delay Technology',
    description:
      'Our smart filtration ignores normal pH fluctuations, only alerting you to genuine infection risks—no false alarms.',
    icon: <FaClock className="text-white text-4xl" />,
    bg: 'bg-[#8932ad]',
  },
  {
    title: 'Advanced Moisture Control',
    description:
      'Specialized wicking keeps the wound dry while constantly delivering samples to our detection layer.',
    icon: <FaTint className="text-white text-4xl" />,
    bg: 'bg-[#ed4064]',
  },
  {
    title: 'pH-Responsive Detection',
    description:
      'Patent-pending fibers change color from purple to blue when they detect infection-causing acidity levels.',
    icon: <FaVial className="text-white text-4xl" />,
    bg: 'bg-[#bb2989]',
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
    <section className="w-full bg-[#faf5ff] py-16 md:py-24 px-6 md:px-12 lg:px-24 font-sans">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-8 xl:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-[55%] flex flex-col"
        >
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${layers[index].bg} flex flex-col justify-center p-8 md:p-12`}
              >
                <div className="mb-8 self-start">
                  <span className="inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm">
                    {layers[index].icon}
                  </span>
                </div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {layers[index].title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl text-white/90 max-w-[90%]"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {layers[index].description}
                </motion.p>

                {/* Navigation */}
                <div className="mt-auto pt-8 flex justify-between items-center">
                  <div className="flex gap-2">
                    {layers.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                      <FaArrowLeft className="text-white" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                      <FaArrowRight className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Content Section - Now on the left side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-[45%] flex flex-col justify-center py-8"
        >
          <div className="max-w-lg">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ed4064]/10 text-[#ed4064] font-medium mb-6">
              Innovation in Wound Care
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight text-gray-900 mb-6">
              See Infection Before It&apos;s Visible
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              ChromaCare&apos;s smart bandage technology detects infections at their earliest stage through color-changing pH sensors, giving you critical early warning when it matters most.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#8932ad] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">Instant visual infection detection without lab tests</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#8932ad] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">Biodegradable materials that are gentle on skin</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#8932ad] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">Clinically proven accuracy at 1/10th the cost of lab tests</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" passHref>
                <motion.div 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#8932ad] hover:bg-[#7a2a99] text-white px-8 py-4 rounded-xl text-base font-semibold transition cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Discover How It Works
                </motion.div>
              </Link>
              <Link href="/contact" passHref>
                <motion.div 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-[#8932ad] text-[#8932ad] hover:bg-[#8932ad]/10 px-8 py-4 rounded-xl text-base font-semibold transition cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}