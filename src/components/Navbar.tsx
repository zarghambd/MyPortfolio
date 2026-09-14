"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 32);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-stone-200 bg-[#f5f3ef]/85 backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link href="#hero" className="text-xl font-semibold tracking-[-0.06em] text-foreground">
                    ZH.
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full border border-stone-300 bg-white/70 p-2 text-foreground/80 transition-colors hover:border-stone-400 hover:text-foreground"
                            aria-label="Toggle color theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full border border-stone-300 bg-white/70 p-2 text-foreground/80 transition-colors hover:border-stone-400 hover:text-foreground"
                            aria-label="Toggle color theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}

                    <button
                        className="text-foreground/80 hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute left-0 top-20 w-full overflow-hidden border-t border-stone-200 bg-[#f5f3ef] md:hidden"
                    >
                        <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-6 py-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-foreground/80 hover:text-foreground"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
