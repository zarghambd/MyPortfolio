"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-20"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.18),transparent_30%),linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(10,10,10,0.8)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.4, 0.18] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-[140px]"
            />

            <div className="container z-10 mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-5 text-lg font-medium text-accent"
                >
                    Hi, I&apos;m Zargham Haider
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto max-w-[1100px] text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.09em] text-foreground"
                >
                    Business Development
                    <span className="mt-3 block text-foreground/60">Manager & Growth Strategist</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mx-auto mt-6 max-w-2xl text-base text-foreground/70 sm:text-xl"
                >
                    6+ years of proven success in client acquisition, B2B sales, and revenue growth across global markets.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <a
                        href="#activities"
                        className="inline-flex items-center justify-center rounded-full border border-accent/70 px-8 py-3 text-base font-medium text-accent hover:bg-accent hover:text-background"
                    >
                        View My Work
                    </a>
                    <a
                        href="/Zargham_BDM.pdf"
                        download="Zargham_Haider_CV.pdf"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-medium text-background hover:bg-accent/90"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/60"
                >
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-foreground/75">
                        Lahore, Pakistan
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-foreground/75">
                        Business Development
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-foreground/75">
                        Global Sales Growth
                    </span>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="text-foreground/60" size={28} />
            </motion.div>
        </section>
    );
}
