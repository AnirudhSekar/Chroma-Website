"use client";
import Image from "next/image";
import ContactForm from "./form";

export default function Contact() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full lg:w-[60%]">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:p-10 md:p-5 w-full lg:gap-20 gap-10 md:gap-0">
          <div className="flex flex-col lg:gap-5 md:gap-2 items-start w-full lg:w-auto order-1 lg:order-none">
            <h2 className="text-3xl sm:text-3xl">Let&apos;s Get in Touch</h2>
            <p className="w-full">Feel free to use the form or drop us an email.</p>
            <div className="flex flex-row gap-2 justify-between items-center border-1 border-gray-800 rounded-xs p-3 w-full sm:w-[400px] lg:w-150 md:w-150 top-0 lg:mb-50 md:mb-5">
              <div className="flex flex-row gap-2 justify-center items-center overflow-hidden">
                <Image
                  src="/email.svg"
                  alt="Email"
                  width={30}
                  height={30}
                  className="flex-shrink-0"
                />
                <p id="email-text" className="truncate">
                  chromacarehq@gmail.com
                </p>
              </div>
              <div className="relative group flex-shrink-0">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      document.getElementById("email-text").innerText
                    );
                  }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/copy.svg"
                    alt="Copy"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
                <div className="absolute hidden group-hover:block -top-8 -right-2 bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Copy to clipboard
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-none w-full lg:w-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}