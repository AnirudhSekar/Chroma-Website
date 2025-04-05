"use client";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full p-5 md:p-20 gap-10 lg:gap-20">
            <div className="flex flex-col gap-5 items-start order-1 lg:order-none">
                <h2 className="text-4xl">Let&apos;s Get in Touch</h2>
                <p className="w-full">Feel free to use the form or drop us an email.</p>
                <div className="flex flex-row gap-2 justify-between items-center border-1 border-gray-800 rounded-xs p-3 w-full lg:w-150 top-0 mb-50">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Image src="/email.svg" alt="Email" width={30} height={30}/><p id="email-text">fill-email-later@email.com</p>
                    </div>
                    <div className="relative group">
                        <button 
                            onClick={() => {
                                navigator.clipboard.writeText(document.getElementById("email-text").innerText);
                            }} 
                            className="flex items-center justify-center"
                        >
                            <Image src="/copy.svg" alt="Copy" width={20} height={20} className="cursor-pointer"/>
                        </button>
                        <div className="absolute hidden group-hover:block -top-8 -right-2 bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                            Copy to clipboard
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-2 lg:order-none w-full lg:w-auto">
                <form className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xl">Name</label>
                            <input type="text" name="name" placeholder="John Doe" className="w-73 border-1 border-gray-800 rounded-xs p-3"></input>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xl">Email</label>
                            <input type="email" name="email" placeholder="example@email.com" className="w-73 border-1 border-gray-800 rounded-xs p-3"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-xl">Subject</label>
                        <input type="text" name="subject" placeholder="Enter the subject" className="w-full lg:w-150 b border-1 border-gray-800 rounded-xs p-3"></input>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xl">Message</label>
                        <textarea name="message" placeholder="Type your message" className="w-full lg:w-150 b border-1 border-gray-800 rounded-xs p-3 resize-none"></textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button type="submit" className="bg-gradient-to-r from-[#8932ad] to-[#ed4064] text-white font-bold py-2 px-4 rounded-sm hover:bg-gradient-to-l transition duration-300">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}