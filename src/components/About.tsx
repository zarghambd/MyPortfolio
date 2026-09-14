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
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(74,222,128,0.08),transparent_25%)]" />

            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <div className="section-label mb-4">About</div>
                    <h2 className="text-[2.5rem] font-bold leading-[1] tracking-[-0.07em] text-foreground md:text-[4.25rem]">
                        Building growth through strategy, trust, and measurable results.
                    </h2>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto w-full max-w-xl"
                    >
                        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.4)]">
                            <img
                                src="/profile.jpg"
                                alt="Zargham Haider"
                                className="h-[520px] w-full rounded-[24px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-5">
                            <p className="text-base text-foreground/80 sm:text-lg">
                                Business Development Manager and Growth Strategist with 6+ years of proven success in client acquisition, B2B sales, and revenue growth across global markets. Specialized in platforms like Upwork, Fiverr, and Freelancer.com with expertise in building strong client relationships and executing sales strategies.
                            </p>
                            <p className="text-sm text-foreground/65 sm:text-base">
                                Experienced in negotiating high-value contracts and passionate about helping brands scale sustainably through tailored business development strategies and process optimization. Proven track record of reducing lead response times and expanding pipelines in UAE and Pakistan markets.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_50px_rgba(0,0,0,0.24)]">
                            <h3 className="mb-4 text-lg font-semibold text-foreground">Education</h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-accent/50 pl-4">
                                        <h4 className="font-medium text-foreground">{edu.school}</h4>
                                        <p className="mt-1 text-sm text-foreground/70">{edu.degree}</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold text-foreground">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground/80"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
