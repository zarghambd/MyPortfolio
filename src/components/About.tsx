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
    "Salesforce",
    "Relationship Building",
    "Negotiation",
    "Workflow Optimization",
    "Strategic Planning",
    "Lead Generation",
    "Bid Management",
    "CRM Management",
    "Market Analysis",
];

const education = [
    {
        school: "Bahauddin Zakariya University",
        degree: "Bachelor of Science in Information Technology (BSIT)",
        year: "Sep 2015 – Jun 2019",
    },
];

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="section-label mb-4">About</div>
                    <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.07em] text-foreground md:text-6xl">
                        Building growth through strategy, trust, and measurable results.
                    </h2>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-base leading-8 text-foreground/80 sm:text-lg">
                            Business Development Manager and Growth Strategist with 6+ years of proven success in client acquisition, B2B sales, and revenue growth across global markets. Specialized in platforms like Upwork, Fiverr, and Freelancer.com with expertise in building strong client relationships and executing sales strategies.
                        </p>
                        <p className="text-base leading-8 text-foreground/70">
                            Experienced in negotiating high-value contracts and passionate about helping brands scale sustainably through tailored business development strategies and process optimization. Proven track record of reducing lead response times and expanding pipelines in UAE and Pakistan markets.
                        </p>

                        <div className="pt-4">
                            <h3 className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground/60">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full border border-stone-300 bg-white/80 px-3 py-2 text-xs font-medium text-foreground/80"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="rounded-[28px] border border-stone-200 bg-white/80 p-6 shadow-[0_16px_40px_rgba(17,17,17,0.04)]"
                    >
                        <h3 className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground/60">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <div key={index} className="border-l-2 border-stone-300 pl-4">
                                    <h4 className="text-lg font-medium text-foreground">{edu.school}</h4>
                                    <p className="mt-1 text-sm text-foreground/70">{edu.degree}</p>
                                    <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground/60">
                                        {edu.year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
