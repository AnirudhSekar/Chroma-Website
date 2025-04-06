"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Market = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The Market Opportunity
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6">
          <p className="text-lg text-gray-700">
            The global wound care market is worth approximately $20 billion,
            expected to nearly double by 2034. With ChromaCare’s innovative
            technology and affordable pricing, we are positioned to capture a
            substantial portion of this growing market.
          </p>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/world.png" // You can replace this with the actual image URL
              alt="ChromaCare product"
              layout="responsive"
              width={700}
              height={500}
              className="rounded-xl shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Target Market</h3>
              <p className="text-lg text-gray-700">
                1 in 3 Americans suffer from everyday wounds, burns, and diabetic
                ulcers, often realizing too late that an infection has developed.
              </p>
              <p className="text-lg text-gray-700">
                The problem? Current infection detection methods are expensive
                and inaccessible. Blood tests, lab cultures, and electronic
                sensors are costly and require trained professionals. ChromaCare
                solves this with a low-cost solution anyone can use.
              </p>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Scalable Model</h3>
              <p className="text-lg text-gray-700">
                We will distribute through hospitals, pharmacies, retail stores,
                and direct-to-consumer sales, making ChromaCare a commercially
                viable, globally scalable product.
              </p>
            </div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-lg text-gray-700">
              With antibiotic resistance on the rise and healthcare costs
              skyrocketing, early infection detection is more critical than ever.
              ChromaCare offers a life-saving solution that fills a massive gap
              in healthcare by providing real-time infection detection for
              anyone, anywhere.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
