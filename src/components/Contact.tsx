"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setSubmitted(true);
        setIsSubmitting(false);
        setFormState({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.06),transparent_25%)]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="section-label mb-4">Contact</div>
                    <h2 className="text-[2.5rem] font-bold leading-[1] tracking-[-0.07em] text-foreground md:text-[4.25rem]">
                        Let&apos;s build something meaningful.
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
                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                            <div className="mb-4 flex items-center gap-3 text-accent">
                                <Mail size={20} />
                                <span className="text-xs font-medium uppercase tracking-[0.2em]">Email</span>
                            </div>
                            <a
                                href="mailto:zarghamh96@gmail.com"
                                className="block text-lg text-foreground/80 hover:text-accent"
                            >
                                zarghamh96@gmail.com
                            </a>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                            <div className="mb-4 flex items-center gap-3 text-accent">
                                <Linkedin size={20} />
                                <span className="text-xs font-medium uppercase tracking-[0.2em]">LinkedIn</span>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/zargham-haider-189492161/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-lg text-foreground/80 hover:text-accent"
                            >
                                linkedin.com/in/zargham-haider-189492161
                            </a>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                            <div className="mb-4 flex items-center gap-3 text-accent">
                                <MapPin size={20} />
                                <span className="text-xs font-medium uppercase tracking-[0.2em]">Location</span>
                            </div>
                            <p className="text-lg text-foreground/80">Lahore, Pakistan</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-[30px] border border-white/10 bg-white/[0.02] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.28)] md:p-8"
                    >
                        {submitted ? (
                            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                    <Send size={30} />
                                </div>
                                <h3 className="mb-2 text-2xl font-semibold text-foreground">Message Sent!</h3>
                                <p className="text-foreground/70">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-accent"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/70">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
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
                                        className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
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
                                        className="w-full resize-none rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-accent/90 disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
