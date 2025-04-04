"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 w-full">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} ChromaCare. All rights reserved.</p>
                <p>Designed by ChromaCare</p>
            </div>
        </footer>
    );
}