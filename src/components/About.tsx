"use client";

import { motion } from "framer-motion";

const skills = [
    "Business Development",
    "Growth Strategy",
    "B2B Sales",
    "Client Acquisition",
    "Lead Generation",
    "Strategic Partnerships",
    "SaaS Sales",
    "Sales Negotiation",
    "Consultative Selling",
    "Account Management",
    "Market Expansion",
    "Staff Augmentation",
    "Sales Process Optimization",
    "Team Leadership",
    "International Business Development",
    "Upwork",
    "Fiverr",
    "Freelancer.com",
    "WellFound",
];

export default function About() {
    return (
        <section id="about" className="pb-8 pt-3 md:pb-12 md:pt-4">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="space-y-7"
            >
                <div className="space-y-5">
                    <motion.div
                        aria-label="hello"
                        className="hello-text text-[1.6rem] leading-none text-foreground md:text-[2rem]"
                        style={{ fontFamily: '"Segoe Print", "Bradley Hand", cursive' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.18 } },
                        }}
                    >
                        {"hello".split("").map((letter, index) => (
                            <motion.span
                                key={`${letter}-${index}`}
                                aria-hidden="true"
                                variants={{
                                    hidden: { opacity: 0, y: 8 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.65, ease: "easeOut" }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    <p className="max-w-2xl text-[0.9rem] leading-7 text-muted md:text-[0.98rem]">
                        Business Development Manager and Growth Strategist with 6+ years of proven experience in client acquisition, B2B sales, and revenue growth across global markets. Skilled in leveraging platforms such as Upwork, Fiverr, and Freelancer.com to generate opportunities, build lasting client relationships, and execute effective sales strategies.
                    </p>

                    <p className="max-w-2xl text-[0.9rem] leading-7 text-muted md:text-[0.98rem]">
                        Experienced in negotiating high-value contracts and working with clients across the US, Europe, UAE, and Pakistan. Passionate about helping businesses scale sustainably through tailored business development strategies, process optimization, and strategic relationship management. Proven track record of strengthening sales pipelines, improving lead response times, and driving business growth across diverse markets.
                    </p>
                </div>

                <div className="pt-2">
                    <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">Skills</div>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-[var(--border)] bg-[var(--chip)] px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-foreground">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
