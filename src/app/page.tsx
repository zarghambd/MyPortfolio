"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [loading]);

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-black/10 selection:text-foreground">
            {loading && <Loader onComplete={() => setLoading(false)} />}

            <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
                <Navbar />
                <Hero />
                <About />
                <Activities />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
