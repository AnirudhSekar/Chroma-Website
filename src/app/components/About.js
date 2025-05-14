"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaFlask, 
  FaGlobeAmericas, 
  FaQuoteLeft,
  FaMicroscope,
  FaAtom,
  FaChartLine,
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes
} from "react-icons/fa";

const About = () => {
  const [activeDemoState, setActiveDemoState] = useState("healthy");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [showMoleculeModal, setShowMoleculeModal] = useState(false);

  const testimonials = [
    {
      quote: "This technology saved my diabetic father from a severe infection",
      name: "Sarah K., Caregiver",
      location: "Chicago, USA",
      bg: "from-purple-50 to-purple-100",
      accent: "text-purple-600"
    },
    {
      quote: "As a nurse, I've never seen anything this revolutionary in wound care",
      name: "Dr. Michael T.",
      location: "Toronto, Canada",
      bg: "from-pink-50 to-pink-100",
      accent: "text-pink-600"
    },
    {
      quote: "The color change was so clear even my kids could understand it",
      name: "Priya M.",
      location: "Mumbai, India",
      bg: "from-blue-50 to-blue-100",
      accent: "text-blue-600"
    },
  ];

  const stats = [
    { 
      value: "24-48h", 
      label: "Earlier detection",
      icon: FaShieldAlt,
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      value: "80%", 
      label: "Cost reduction",
      icon: FaChartLine,
      color: "from-blue-500 to-blue-600"
    },
    { 
      value: "1.2M", 
      label: "Potential lives saved/year",
      icon: FaAtom,
      color: "from-purple-500 to-purple-600"
    },
  ];

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Trigger counting animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCountingUp(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  // Navigation functions for testimonials
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Content container */}
      <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-8"
            >
              <FaMicroscope className="text-purple-600" />
              <span className="text-purple-700 font-medium">Scientific Innovation</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Revolutionizing{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Wound Care
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Making infection detection accessible, affordable, and
              understandable for everyone worldwide through cutting-edge pH-reactive technology.
            </p>
          </motion.div>

          {/* Interactive Demo + Story */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              className="space-y-10"
              >
              <div>
                <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 mb-8 whitespace-nowrap">
                  See the Science in Action
                </h3>

                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-8 mb-8">
                    <div className="text-center">
                      <span className="block text-gray-600 mb-3 font-medium">Healthy</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveDemoState("healthy")}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg transition-all duration-300 ${
                          activeDemoState === "healthy" 
                            ? "ring-4 ring-purple-300 shadow-purple-200" 
                            : "opacity-70 hover:opacity-100"
                        }`}
                      />
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="text-center">
                      <span className="block text-gray-600 mb-3 font-medium">Infected</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveDemoState("infected")}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 ${
                          activeDemoState === "infected" 
                            ? "ring-4 ring-blue-300 shadow-blue-200" 
                            : "opacity-70 hover:opacity-100"
                        }`}
                      />
                    </div>
                  </div>

                  <motion.div
                    key={activeDemoState}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-64 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
                  >
                    {/* Bandage/Dressing Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-40">
                        {/* Bandage base */}
                        <div className="absolute inset-0 bg-white rounded-lg shadow-sm border border-gray-200"></div>
                        
                        {/* Adhesive edges */}
                        <div className="absolute -left-4 top-0 bottom-0 w-8 bg-gray-100 rounded-l-lg"></div>
                        <div className="absolute -right-4 top-0 bottom-0 w-8 bg-gray-100 rounded-r-lg"></div>
                        
                        {/* Central pad area with pH color */}
                        <motion.div
                          animate={{
                            backgroundColor: activeDemoState === "healthy" 
                              ? ["#8B5CF6", "#9D4EDD", "#8B5CF6"] 
                              : ["#3B82F6", "#2563EB", "#3B82F6"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-x-8 inset-y-6 rounded-lg shadow-inner"
                        >
                          {/* Texture overlay */}
                          <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
                          
                          {/* pH indicator dots */}
                          <div className="absolute inset-0 grid grid-cols-3 gap-1 p-2">
                            {[...Array(9)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ 
                                  scale: [0, 1, 0],
                                  opacity: [0, 0.6, 0]
                                }}
                                transition={{ 
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.1
                                }}
                                className="bg-white/30 rounded-full"
                              />
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Status indicator */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className={`w-6 h-6 rounded-full border-2 ${
                              activeDemoState === "healthy"
                                ? "border-green-500 bg-green-100"
                                : "border-red-500 bg-red-100"
                            }`}
                          >
                            <div className={`w-full h-full rounded-full ${
                              activeDemoState === "healthy" 
                                ? "bg-green-500" 
                                : "bg-red-500"
                            } scale-50`}></div>
                          </motion.div>
                        </div>
                        
                        {/* Measurement scale */}
                        <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-500">
                          <span>pH 6.5</span>
                          <span>pH 7.0</span>
                          <span>pH 7.5</span>
                          <span>pH 8.0</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div 
                        className="w-full h-full"
                        style={{
                          backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            #000 10px,
                            #000 12px
                          )`
                        }}
                      ></div>
                    </div>
                  </motion.div>

                  <motion.p
                    key={activeDemoState + "-text"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 text-lg text-gray-700 text-center font-medium"
                  >
                    {activeDemoState === "healthy"
                      ? "✓ Normal pH levels detected (purple) - Healthy tissue environment"
                      : "⚠️ Infection detected! (blue) - Acidic pH indicates infection"}
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed mt-12"
                >
                  Our advanced{" "}
                  <span className="text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded">
                    pH-reactive nanotechnology
                  </span>{" "}
                  provides instant visual feedback when infection-related acidity
                  is detected, enabling critical early intervention.
                </motion.p>
              </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-purple-500 to-pink-500"></div>
                
                {/* Video overlay content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 text-white">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-8 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 group"
                  >
                    <FaPlay className="text-3xl ml-1 group-hover:ml-2 transition-all" />
                  </motion.button>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Founder&apos;s Story</h3>
                  <p className="text-lg md:text-xl max-w-md leading-relaxed opacity-90">
                    &quot;After losing my grandmother to an undetected infection, I
                    vowed to create a better solution for families everywhere...&quot;
                  </p>
                </div>

                {/* Video border glow effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
              </div>
            </motion.div>
          </div>

          {/* Stats + Testimonials */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            {/* Scientific Validation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100/50"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <FaFlask className="text-2xl text-purple-600" />
                </div>
                Scientific Validation
              </h3>

              <div id="stats-section" className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => {
                  const IconComponent = stat.icon;
                  return (
                  <motion.div
                    key={i}
                      initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.1,
                        hover: { duration: 0.2 }
                      }}
                      className={`relative bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-center text-white overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <IconComponent className="text-2xl mb-3 mx-auto opacity-80" />
                      <motion.p
                        initial={{ scale: 0.8 }}
                        animate={isCountingUp ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-3"
                  >
                      {stat.value}
                      </motion.p>
                      <p className="text-sm opacity-90 font-medium">{stat.label}</p>
                  </motion.div>
                  );
                })}
              </div>

              {/* Enhanced anthocyanin molecular diagram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200/50 flex items-center justify-center"
                onClick={() => setShowMoleculeModal(true)}
              >
                <img
                  src="/anthocyanin.png"
                  alt="Anthocyanin molecule structure"
                  className="max-h-[90%] max-w-[90%] object-contain"
                  draggable={false}
                />
                {/* Bottom information panel */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-700 font-semibold text-sm">Anthocyanin pH Sensor</p>
                        <p className="text-gray-500 text-xs">Color changes with pH: Red (acidic) ↔ Blue (basic)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Real Impact Stories */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100/50"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-4">
                <div className="p-3 bg-pink-100 rounded-2xl">
                  <FaQuoteLeft className="text-2xl text-pink-600" />
            </div>
                Real Impact Stories
              </h3>

              <div className="relative h-80 mb-8 overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                {testimonials.map((testimonial, i) => (
                    activeTestimonial === i && (
                  <motion.div
                    key={i}
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 p-8 bg-gradient-to-br ${testimonial.bg} rounded-2xl border border-white/50`}
                      >
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <FaQuoteLeft className={`text-3xl mb-6 ${testimonial.accent}`} />
                            <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-8">
                              &quot;{testimonial.quote}&quot;
                            </p>
                          </div>
                          
                          <div className="border-t border-white/50 pt-6">
                            <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                            <p className={`text-sm mt-1 ${testimonial.accent}`}>
                      {testimonial.location}
                    </p>
                          </div>
                        </div>
                  </motion.div>
                    )
                ))}
                </AnimatePresence>
              </div>

              {/* Navigation controls at bottom */}
              <div className="flex justify-center items-center gap-6">
                {/* Left Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
                >
                  <FaChevronLeft className="text-gray-600" />
                </motion.button>

                {/* Dots */}
                <div className="flex gap-3">
                {testimonials.map((_, i) => (
                    <motion.button
                    key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveTestimonial(i)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activeTestimonial === i 
                          ? "bg-purple-600 scale-125" 
                          : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

                {/* Right Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
                >
                  <FaChevronRight className="text-gray-600" />
                </motion.button>
            </div>
            </motion.div>
          </div>

          {/* Global Impact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4"
                >
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <FaGlobeAmericas className="text-3xl" />
                  </div>
                  Global Reach
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl leading-relaxed mb-10 opacity-95"
                >
                  ChromaCare is expanding to developing nations where wound care innovation
                  is most critical, bringing life-saving technology to underserved communities.
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Explore Our Global Impact
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-80 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <FaGlobeAmericas className="text-white/30 text-8xl" />
                    
                    {/* Animated location pins */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
                      style={{ boxShadow: '0 0 20px rgba(255, 235, 59, 0.6)' }}
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, delay: 0.7, repeat: Infinity }}
                      className="absolute top-1/2 right-1/4 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
                      style={{ boxShadow: '0 0 20px rgba(255, 235, 59, 0.6)' }}
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, delay: 1.4, repeat: Infinity }}
                      className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
                      style={{ boxShadow: '0 0 20px rgba(255, 235, 59, 0.6)' }}
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white/80 font-medium">
                    Active in 12+ countries and expanding
                  </p>
              </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Molecule Modal */}
      <AnimatePresence>
        {showMoleculeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowMoleculeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMoleculeModal(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <FaTimes className="text-gray-600 text-xl" />
              </motion.button>

              {/* Fullscreen molecule */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src="/anthocyanin.png"
                  alt="Anthocyanin molecule structure"
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;