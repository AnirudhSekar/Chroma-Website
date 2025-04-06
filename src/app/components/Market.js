"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Market = () => {
  return (
    <section className="py-16 bg-[#faf5ff] w-full lg:py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The Market Opportunity
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              The global wound care market is worth approximately $20 billion,
              expected to nearly double by 2034. With ChromaCare&apos;s innovative
              technology and affordable pricing, we are positioned to capture a
              substantial portion of this growing market.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Target Market</h3>
                <p className="text-gray-700">
                  1 in 3 Americans suffer from everyday wounds, burns, and diabetic
                  ulcers, often realizing too late that an infection has developed.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Scalable Model</h3>
                <p className="text-gray-700">
                  We will distribute through hospitals, pharmacies, retail stores,
                  and direct-to-consumer sales, making ChromaCare a commercially
                  viable, globally scalable product.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full order-1 lg:order-2">
            <Image
              src="/world.png"
              alt="ChromaCare product"
              width={700}
              height={500}
              className="rounded-xl shadow-xl object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              With antibiotic resistance on the rise and healthcare costs
              skyrocketing, early infection detection is more critical than ever.
              ChromaCare offers a life-saving solution that fills a massive gap
              in healthcare by providing real-time infection detection for
              anyone, anywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;