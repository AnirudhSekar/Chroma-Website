"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaFlask, FaGlobeAmericas, FaQuoteLeft } from "react-icons/fa";

const About = () => {
  const [activeDemoState, setActiveDemoState] = useState("healthy");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "This technology saved my diabetic father from a severe infection",
      name: "Sarah K., Caregiver",
      location: "Chicago, USA",
    },
    {
      quote: "As a nurse, I've never seen anything this revolutionary in wound care",
      name: "Dr. Michael T.",
      location: "Toronto, Canada",
    },
    {
      quote: "The color change was so clear even my kids could understand it",
      name: "Priya M.",
      location: "Mumbai, India",
    },
  ];

  const stats = [
    { value: "24-48h", label: "Earlier detection" },
    { value: "80%", label: "Cost reduction" },
    { value: "1.2M+", label: "Potential lives saved/year" },
  ];

  return (
    <div className="relative w-screen min-h-screen  bg-gradient-to-b from-white to-[#faf5ff]">
      {/* Full-width background that scrolls */}
      <div className="absolute inset-0 -z-10 w-full h-full"></div>

      {/* Content container */}
      <section className="relative w-full py-16 lg:py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Revolutionizing <span className="text-[#ed4064]">Wound Care</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re making infection detection accessible, affordable, and
              understandable for everyone worldwide.
            </p>
          </motion.div>

          {/* Interactive Demo + Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  See the Science in Action
                </h3>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gray-600">Healthy</span>
                    <button
                      onClick={() => setActiveDemoState("healthy")}
                      className={`w-8 h-8 rounded-full bg-[#8932ad] ${activeDemoState === "healthy" ? "ring-4 ring-[#8932ad]/30" : ""}`}
                    />
                    <span className="text-gray-600">Infected</span>
                    <button
                      onClick={() => setActiveDemoState("infected")}
                      className={`w-8 h-8 rounded-full bg-[#00a8ff] ${activeDemoState === "infected" ? "ring-4 ring-[#00a8ff]/30" : ""}`}
                    />
                  </div>
                  <div
                    className={`w-full h-48 transition-colors duration-500 rounded-lg ${activeDemoState === "healthy" ? "bg-[#8932ad]" : "bg-[#00a8ff]"}`}
                  />
                  <p className="mt-4 text-gray-600 text-center">
                    {activeDemoState === "healthy"
                      ? "Normal pH levels (purple)"
                      : "Infection detected! (blue)"}
                  </p>
                </div>

                <p className="text-lg text-gray-700">
                  Our{" "}
                  <span className="text-[#ed4064] font-semibold">
                    pH-reactive technology
                  </span>{" "}
                  provides clear visual feedback when infection-related acidity
                  is detected, enabling early intervention.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8932ad] to-[#ed4064] opacity-90"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8 text-white">
                  <button className="mb-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FaPlay className="text-2xl" />
                  </button>
                  <h3 className="text-2xl font-bold mb-4">Our Founder&apos;s Story</h3>
                  <p className="max-w-md">
                    &quot;After losing my grandmother to an undetected infection, I
                    vowed to create a better solution...&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats + Testimonials */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <FaFlask className="text-[#8932ad]" /> Scientific Validation
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-[#f9f5ff] p-4 rounded-lg text-center"
                  >
                    <p className="text-3xl font-bold text-[#8932ad] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-48 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <FaFlask className="text-gray-200 text-6xl" />
                <p className="absolute text-gray-400">
                  Molecular diagram coming soon
                </p>
              </motion.div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <FaQuoteLeft className="text-[#ed4064]" /> Real Impact Stories
              </h3>

              <div className="relative h-64 mb-6">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeTestimonial === i ? 1 : 0,
                      y: activeTestimonial === i ? 0 : 20,
                    }}
                    className={`absolute inset-0 p-6 ${
                      i === 0
                        ? "bg-[#f9f5ff]"
                        : i === 1
                        ? "bg-[#fff5f7]"
                        : "bg-[#f0f9ff]"
                    } rounded-lg`}
                  >
                    <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === i ? "bg-[#8932ad]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Global Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#8932ad] to-[#ed4064] rounded-2xl p-8 md:p-12 text-white shadow-xl mb-24"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <FaGlobeAmericas /> Global Reach
                </h3>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  ChromaCare currently has plans to expand to developing nations
                  where wound care is most needed.
                </p>
                <button className="bg-white text-[#8932ad] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  See Our Coverage Map
                </button>
              </div>

              <div className="relative h-64 bg-white/20 rounded-lg overflow-hidden flex items-center justify-center">
                <FaGlobeAmericas className="text-white/30 text-6xl" />
                <div
                  className="absolute w-4 h-4 bg-[#ffeb3b] rounded-full"
                  style={{ top: "30%", left: "25%" }}
                ></div>
                <div
                  className="absolute w-4 h-4 bg-[#ffeb3b] rounded-full"
                  style={{ top: "50%", left: "60%" }}
                ></div>
                <div
                  className="absolute w-4 h-4 bg-[#ffeb3b] rounded-full"
                  style={{ top: "70%", left: "40%" }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;