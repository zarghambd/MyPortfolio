"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, MapPin, Linkedin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden py-8 md:py-12">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <div className="section-label mb-4">Contact</div>
                    <h2
                        className="max-w-4xl text-[1.5rem] font-normal leading-tight tracking-normal text-foreground md:text-[2rem]"
                        style={{ fontFamily: '"Segoe Print", "Bradley Hand", cursive' }}
                    >
                        Turning Conversations Into Business Opportunities.
                    </h2>
                </motion.div>

                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-5"
                    >
                        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
                            <div className="mb-4 flex items-center gap-3 text-foreground/70">
                                <Mail size={18} />
                                <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">Email</span>
                            </div>
                            <a
                                href="mailto:zarghamh96@gmail.com"
                                className="block text-base text-foreground/80 hover:text-foreground"
                            >
                                zarghamh96@gmail.com
                            </a>
                        </div>

                        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
                            <div className="mb-4 flex items-center gap-3 text-foreground/70">
                                <Linkedin size={18} />
                                <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">LinkedIn</span>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/zargham-haider-189492161/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-base text-foreground/80 hover:text-foreground"
                            >
                                linkedin.com/in/zargham-haider-189492161
                            </a>
                        </div>

                        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
                            <div className="mb-4 flex items-center gap-3 text-foreground/70">
                                <Phone size={18} />
                                <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">Phone</span>
                            </div>
                            <a href="tel:+923241017481" className="block text-base text-foreground/80 hover:text-foreground">
                                +92 324 1017481
                            </a>
                        </div>

                        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
                            <div className="mb-4 flex items-center gap-3 text-foreground/70">
                                <MapPin size={18} />
                                <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">Location</span>
                            </div>
                            <p className="text-base text-foreground/80">Lahore, Pakistan</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex h-fit self-start flex-col rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)] md:p-8"
                    >
                        <div>
                            <CalendarDays size={22} className="mb-5 text-foreground" />
                            <h3 className="max-w-sm text-xl font-medium text-foreground">Let&apos;s discuss your next growth opportunity.</h3>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">Choose a convenient time for a focused 1:1 consultation.</p>
                            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">I help businesses build stronger pipelines, win clients, and turn growth opportunities into lasting results.</p>
                            <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-foreground">Let&apos;s connect and explore what&apos;s next.</p>
                        </div>
                        <a
                            href="https://calendly.com/zarghamh96"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-80"
                        >
                            Book a 1:1 Consultation
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
