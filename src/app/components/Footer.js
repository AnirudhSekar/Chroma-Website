"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 w-full flex flex-col items-center">
            <div className="flex flex-row gap-20">
            </div>
            <div className="container mx-auto text-center justify-left flex flex-row items-center gap-5">
                <div>
                    <Image src="/logo.png" alt="" width={170} height={170}/>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-3">
                        <p className="cursor-pointer"><Link href="/about" passHref/>About</p>
                        <p className="cursor-pointer"><Link href="/contact" passHref/>Contact</p>
                        <p className="cursor-pointer"><Link href="/about" passHref/>Github</p>
                    </div>
                    <div className="flex flex-row gap-3 text-sm text-gray-400">
                        <p className="cursor-pointer"><Link href="/terms" passHref/>Terms of Service</p>
                        <p>Copyright &copy; {new Date().getFullYear()} ChromaCare</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
