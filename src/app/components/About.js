// src/app/components/About.js

"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10 text-left">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About ChromaCare
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          At <span style={{ color: "#ed4064", fontWeight:"bold"}}>ChromaCare</span>, we believe that healthcare should be simple, accessible, and affordable. 
          Every year, millions suffer from infections that go unnoticed until it’s too late—because current detection methods are too expensive or slow.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          That’s why we created the <span style={{ color: "#ed4064", fontWeight:"bold" }}>first biodegradable smart bandage</span> that changes color to warn you of infection before symptoms appear. 
          No doctors, no blood tests—just clear visual feedback that’s as simple as checking your bandage.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Our <span style={{ color: "#ed4064", fontWeight:"bold" }}>patent-pending pH-reactive fiber</span> technology detects infection-related acidity 
          and shifts color from purple to bright blue, enabling early and accurate monitoring directly from the wound site.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Built for scalability, <span style={{ color: "#ed4064", fontWeight:"bold" }}>ChromaCare costs just $0.50 per unit</span>, making it 80% more affordable than electronic alternatives. 
          We’re revolutionizing wound care for hospitals, families, and communities around the world—because smart wound care should be a global standard, not a luxury.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
