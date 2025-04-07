// "use client";
// import Image from "next/image";
// import ContactForm from "./form";

// export default function Contact() {
//   return (
//     <div className="flex justify-center w-full">
//       <div className="w-full lg:w-[60%]">
//         <div className="flex flex-col lg:flex-row items-center justify-center lg:p-10 md:p-5 w-full lg:gap-20 gap-10 md:gap-0">
//           <div className="flex flex-col lg:gap-5 md:gap-2 items-start w-full lg:w-auto order-1 lg:order-none">
//             <h2 className="text-3xl sm:text-3xl">Let&apos;s Get in Touch</h2>
//             <p className="w-full">Feel free to use the form or drop us an email.</p>
//             <div className="flex flex-row gap-2 justify-between items-center border-1 border-gray-800 rounded-xs p-3 w-full sm:w-[400px] lg:w-150 md:w-150 top-0 lg:mb-50 md:mb-5">
//               <div className="flex flex-row gap-2 justify-center items-center overflow-hidden">
//                 <Image
//                   src="/email.svg"
//                   alt="Email"
//                   width={30}
//                   height={30}
//                   className="flex-shrink-0"
//                 />
//                 <p id="email-text" className="truncate">
//                   chromacarehq@gmail.com
//                 </p>
//               </div>
//               <div className="relative group flex-shrink-0">
//                 <button
//                   onClick={() => {
//                     navigator.clipboard.writeText(
//                       document.getElementById("email-text").innerText
//                     );
//                   }}
//                   className="flex items-center justify-center"
//                 >
//                   <Image
//                     src="/copy.svg"
//                     alt="Copy"
//                     width={20}
//                     height={20}
//                     className="cursor-pointer"
//                   />
//                 </button>
//                 <div className="absolute hidden group-hover:block -top-8 -right-2 bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                   Copy to clipboard
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="order-2 lg:order-none w-full lg:w-auto">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import ContactForm from "./form";
import { motion } from "framer-motion";
import { FiMail, FiCopy,FiCheck } from "react-icons/fi";
import { useState, useEffect } from "react";
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("chromacarehq@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
   

  };

  return (
    <div>
      <section className="w-full py-12 md:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start"
          >
            {/* Contact Information */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Let&apos;s Get in Touch
                </h2>
                <p className="text-lg text-gray-600 max-w-lg">
                  Have questions about ChromaCare or want to learn more? Reach
                  out through the form or contact us directly via email.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f9f5ff] to-[#f0e9ff] p-6 rounded-xl border border-[#e9d8ff]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#8932ad] p-3 rounded-full text-white">
                      <FiMail className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Email us at
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        chromacarehq@gmail.com
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition text-gray-600 flex items-center gap-2"
                    aria-label="Copy email address"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </motion.button>
                          </div>
                          </div>

                          <div className="space-y-4 pt-4 w-full">
                          <h3 className="text-xl font-semibold text-gray-800">
                            Why contact us?
                          </h3>
                          <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                            <span className="text-[#8932ad] mt-1">•</span>
                            <span>Learn about our technology and clinical trials</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className="text-[#8932ad] mt-1">•</span>
                            <span>Explore partnership opportunities</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className="text-[#8932ad] mt-1">•</span>
                            <span>Get pricing and distribution information</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className="text-[#8932ad] mt-1">•</span>
                            <span>Provide feedback or ask questions</span>
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
              className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
