"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 w-full">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-25">
                <div className="flex flex-col md:flex-row items-center gap-5 mb-4 md:mb-0">
                    <div className="flex flex-row gap-1">
                        <Image src="/logo.png" alt="" width={170} height={170}/>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex flex-row gap-3 mb-2">
                            <p className="cursor-pointer"><Link href="/about">About</Link></p>
                            <p className="cursor-pointer"><Link href="/contact">Contact</Link></p>
                            <p className="cursor-pointer"><Link href="/about">Github</Link></p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 text-sm text-gray-400 items-center">
                            <p className="cursor-pointer"><Link href="/terms">Terms of Service</Link></p>
                            <p>Copyright &copy; {new Date().getFullYear()} ChromaCare</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href="https://www.gmail.com/chromacarehq/" passHref>
                        <Image src="/gmail.svg" alt="Gmail" width={30} height={30} className="cursor-pointer"/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/chromacarehq/" passHref>
                        <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} className="cursor-pointer"/>
                    </Link>
                    <Link href="https://github.com/AnirudhSekar/Chroma-Website" passHref>
                        <Image src="/github.svg" alt="Github" width={30} height={30} className="cursor-pointer"/>
                    </Link>
                </div>
            </div>
        </footer>
    );
}