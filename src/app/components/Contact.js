"use client";
import Image from "next/image";

export default function Contact() {

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full p-5 md:p-20 gap-10 lg:gap-20">
      <div className="flex flex-col gap-5 items-start w-full lg:w-auto order-1 lg:order-none">
        <h2 className="text-3xl sm:text-4xl">Let&apos;s Get in Touch</h2>
        <p className="w-full">Feel free to use the form or drop us an email.</p>
        <div className="flex flex-row gap-2 justify-between items-center border-1 border-gray-800 rounded-xs p-3 w-full sm:w-[400px] lg:w-150 top-0 mb-50">
          <div className="flex flex-row gap-2 justify-center items-center overflow-hidden">
            <Image
              src="/email.svg"
              alt="Email"
              width={30}
              height={30}
              className="flex-shrink-0"
            />
            <p id="email-text" className="truncate">
              fill-email-later@email.com
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
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full sm:w-73 border-1 border-gray-800 rounded-xs p-3"
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className="w-full sm:w-73 border-1 border-gray-800 rounded-xs p-3"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full lg:w-150 border-1 border-gray-800 rounded-xs p-3 resize-none h-32"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#8932ad] to-[#ed4064] text-white font-bold py-2 px-4 rounded-sm hover:bg-gradient-to-l transition duration-300 w-full sm:w-auto disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}