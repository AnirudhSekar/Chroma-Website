// src/app/components/Impact.js

"use client";

import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section className="bg-[#fefefe] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Global Impact
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          With over 1 in 3 Americans affected by everyday wounds and millions more globally, ChromaCare empowers people to detect infections early—without costly equipment or professional intervention.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#ed4064]">80% Lower Cost</h3>
            <p className="text-gray-700 mt-4">
              Compared to electronic alternatives, ChromaCare slashes the price of infection detection—making it accessible to all.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-[#ed4064]">$1B Market Opportunity</h3>
            <p className="text-gray-700 mt-4">
              With just a 5% market penetration, ChromaCare is poised to reach $1 billion in market value within the $20B wound care industry.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#ed4064]">Global Reach</h3>
            <p className="text-gray-700 mt-4">
              Through partnerships with nonprofits and healthcare providers, we’re expanding access to life-saving wound care in underserved communities.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          By eliminating cost barriers and prioritizing sustainability, ChromaCare is setting a new global standard—where smart wound care is not a luxury, but a right.
        </motion.p>
      </div>
    </section>
  );
}
