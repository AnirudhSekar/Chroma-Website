"use client"

import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            <Navbar/>
            <main className="flex-grow p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <About/>
            </main>
            <Footer/>
        </div>
    )
}