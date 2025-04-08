"use client";
import { useState } from "react";
import ContactForm from "./form";
import { motion } from "framer-motion";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("chromacarehq@gmail.com")
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          // Fallback for browsers that don't support clipboard API
          const textarea = document.createElement('textarea');
          textarea.value = "chromacarehq@gmail.com";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = "chromacarehq@gmail.com";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <section className="w-full py-8 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-start"
          >
            {/* Contact Information */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Let&apos;s Get in Touch
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-lg">
                  Have questions about ChromaCare or want to learn more? Reach
                  out through the form or contact us directly via email.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f9f5ff] to-[#f0e9ff] p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#e9d8ff]">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-[#8932ad] p-2 sm:p-3 rounded-full text-white">
                      <FiMail className="text-lg sm:text-xl" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-500">
                        Email us at
                      </p>
                      <p className="text-sm sm:text-lg font-medium text-gray-900 break-all truncate decoration-none">
                        chromacarehq@gmail.com
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition flex-shrink-0 relative"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="text-green-600 text-sm sm:text-base" />
                        <span className="sr-only">Copied</span>
                        <div className="absolute -top-8 -right-2 bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                          Copied!
                        </div>
                      </>
                    ) : (
                      <FiCopy className="text-gray-600 text-sm sm:text-base" />
                    )}
                  </motion.button>
                </div>
              </div>

              <div className="space-y-3 pt-2 w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Why contact us?
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600 list-disc pl-5">
                  <li className="pl-2">
                    Learn about our technology and clinical trials
                  </li>
                  <li className="pl-2">
                    Explore partnership opportunities
                  </li>
                  <li className="pl-2">
                    Get pricing and distribution information
                  </li>
                  <li className="pl-2">
                    Provide feedback or ask questions
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send us a message
              </h3>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}