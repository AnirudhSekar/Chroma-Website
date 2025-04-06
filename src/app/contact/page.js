"use client"
import Image from "next/image";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            <Navbar/>
            <main className="flex-grow p-8 sm:p-20 mt-12 font-[family-name:var(--font-geist-sans)]">
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}