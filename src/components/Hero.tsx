"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const links = [
    { label: "zarghamh96@gmail.com", href: "mailto:zarghamh96@gmail.com", icon: Mail },
    { label: "+92 324 1017481", href: "tel:+923241017481", icon: Phone },
    { label: "linkedin.com/in/zargham-haider-189492161", href: "https://www.linkedin.com/in/zargham-haider-189492161/", icon: Linkedin },
];

export default function Hero() {
    return (
        <section id="hero" className="py-6 pb-2 md:py-8">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="space-y-8"
            >
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted">
                    <span className="h-2 w-2 rounded-full bg-foreground" />
                    Available for Consultation
                </div>

                <div className="space-y-4">
                    <p className="text-[0.78rem] font-medium uppercase tracking-[0.2em] text-muted">hello, i&apos;m</p>
                    <h1
                        className="max-w-5xl text-[1.5rem] font-normal leading-tight tracking-normal text-foreground sm:text-[1.8rem] lg:text-[2.1rem]"
                        style={{ fontFamily: '"Segoe Print", "Bradley Hand", cursive' }}
                    >
                        Zargham Haider
                    </h1>
                    <p className="max-w-2xl text-base text-muted md:text-lg">
                        Business Development Manager & Growth Strategist helping businesses win high-value clients, build scalable sales pipelines, and accelerate revenue growth.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a href="#about" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-foreground hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
                        About me
                    </a>
                    <a href="/Zargham_BDM.pdf" download="Zargham_Haider_CV.pdf" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90">
                        <Download size={16} />
                        Download CV
                    </a>
                </div>

                <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-muted">
                        <MapPin size={16} />
                        <span>Lahore, Pakistan</span>
                    </div>

                    {links.map(({ label, href, icon: Icon }) => (
                        <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-3 text-muted hover:text-foreground">
                            <Icon size={16} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
