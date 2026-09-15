"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
            <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-1">
                <Link href="#hero" className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-black text-[0.55rem] font-bold text-white dark:bg-white dark:text-black">
                        ZH
                    </span>
                    <span className="text-lg font-semibold tracking-[-0.06em] text-foreground">zargham.online</span>
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted hover:text-foreground">
                            {link.name}
                        </Link>
                    ))}

                    {mounted && (
                        <button
                            type="button"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-black transition-colors hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                            aria-label="Toggle color theme"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    {mounted && (
                        <button
                            type="button"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-black dark:bg-black dark:text-white"
                            aria-label="Toggle color theme"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-black dark:bg-black dark:text-white"
                        aria-label="Toggle navigation menu"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium uppercase tracking-[0.18em] text-muted hover:text-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
