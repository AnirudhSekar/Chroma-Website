import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
        <Navbar/>
        <main className="flex-grow p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Contact/>
        </main>
        <Footer/>
    </div>
  );
}
