"use client";

import { motion } from "framer-motion";

const skills = [
    "B2B Sales",
    "Client Acquisition",
    "Proposal Writing",
    "Account Management",
    "Upwork",
    "Fiverr",
    "Freelancer.com",
    "HubSpot",
    "Zoho CRM",
    "Salesforce (Basic)",
    "Relationship Building",
    "Negotiation",
    "Workflow Optimization",
    "Strategic Planning",
];

const achievements = [
    "Closed multiple high-value projects, helping agencies and SMEs scale revenue.",
    "Designed B2B sales workflows that improved client retention and long-term partnerships.",
    "Built sales pipelines across the UAE and Pakistan while managing hybrid and remote teams.",
    "Enhanced CRM processes and proposal systems, reducing lead response time by 30%.",
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
                        Business Development Manager and Growth Strategist with 6+ years of proven success in client acquisition, B2B sales, and revenue growth across global markets. Specialized in Upwork, Fiverr, and Freelancer.com, with expertise in building strong client relationships, executing sales strategies, and negotiating high-value contracts.
                    </p>

                    <p className="max-w-2xl text-[0.9rem] leading-7 text-muted md:text-[0.98rem]">
                        Passionate about helping brands scale sustainably through tailored business development strategies and process optimization.
                    </p>
                </div>

                <div className="border-t border-[var(--border)] pt-7">
                    <div className="section-label mb-4">Skills</div>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-[var(--border)] bg-[var(--chip)] px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-foreground">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="border-t border-[var(--border)] pt-7">
                    <div className="section-label mb-4">Key achievements</div>
                    <ul className="max-w-2xl space-y-3 pl-5 text-left text-[0.9rem] leading-6 text-muted">
                        {achievements.map((achievement) => <li key={achievement} className="list-disc marker:text-foreground">{achievement}</li>)}
                    </ul>
                </div>

                <div className="border-t border-[var(--border)] pt-7">
                    <div className="section-label mb-4">Education</div>
                    <div className="max-w-2xl text-left">
                        <p className="text-[0.95rem] font-medium text-foreground">BS in Information Technology</p>
                        <p className="mt-1 text-[0.9rem] leading-6 text-muted">Bahauddin Zakariya University<br />Sep 2015 – Jun 2019</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
