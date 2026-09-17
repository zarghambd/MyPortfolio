"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            );
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer id="footer" className="border-t border-[var(--border)] py-8 md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-xl font-semibold tracking-[-0.06em] text-foreground"
                    >
                        Zargham Haider
                    </motion.p>
                    <p className="mt-1 text-sm text-muted">Lahore, Pakistan • Local time {time}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted">
                    <a href="mailto:zarghamh96@gmail.com" className="hover:text-foreground">Email</a>
                    <a href="https://www.linkedin.com/in/zargham-haider-189492161/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
                    <a href="/Zargham_BDM.pdf" download="Zargham_Haider_CV.pdf" className="hover:text-foreground">Resume</a>
                </div>
            </div>
        </footer>
    );
}
