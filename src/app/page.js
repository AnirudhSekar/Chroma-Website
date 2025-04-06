import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Contact from "./components/contact/page";
import Hero from "./components/Hero";
import Market from "./components/Market";
import Impact from "./components/Impact";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
        <Navbar/>
        <Hero />
        <Impact />
        <Market />
        <Footer/>
    </div>
  );
}
