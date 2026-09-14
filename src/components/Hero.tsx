"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24"
        >
            <div className="container z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto max-w-5xl"
                >
                    <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                        Hi, I&apos;m Zargham Haider
                    </p>

                    <h1 className="text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.09em] text-foreground">
                        Business Development
                        <span className="mt-2 block text-foreground/70">Manager & Growth Strategist</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base text-foreground/70 sm:text-xl">
                        6+ years of proven success in client acquisition, B2B sales, and revenue growth across global markets.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#activities"
                            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-stone-400 hover:bg-white"
                        >
                            View My Work
                        </a>
                        <a
                            href="/Zargham_BDM.pdf"
                            download="Zargham_Haider_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/85"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-foreground/70">
                        <span className="rounded-full border border-stone-300 bg-white/80 px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/80">
                            Lahore, Pakistan
                        </span>
                        <a
                            href="mailto:zarghamh96@gmail.com"
                            className="rounded-full border border-stone-300 bg-white/80 px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground"
                        >
                            zarghamh96@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zargham-haider-189492161/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-stone-300 bg-white/80 px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Aliwaris512"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-stone-300 bg-white/80 px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground"
                        >
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="text-foreground/50" size={28} />
            </motion.div>
        </section>
    );
}
