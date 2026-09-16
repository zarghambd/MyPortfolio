"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

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
                        className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)] md:p-8"
                    >
                        <form action="https://formsubmit.co/zarghamh96@gmail.com" method="POST" className="space-y-5">
                                <input type="hidden" name="_subject" value="New consultation request from zargham.online" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="https://zargham.online/#contact" />
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/70">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-2xl border border-[var(--border)] bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/70">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-2xl border border-[var(--border)] bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/70">Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full resize-none rounded-2xl border border-[var(--border)] bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-foreground/85"
                                >
                                    Send Message
                                </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
