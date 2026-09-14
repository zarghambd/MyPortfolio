"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Business Development Manager",
        company: "CodeSuite",
        location: "Dubai, UAE (Hybrid)",
        period: "Jun 2025 – Present",
        description: [
            "Identifying new growth opportunities and building strong partnerships.",
            "Driving client acquisition and negotiating contracts in competitive markets.",
            "Leading market analysis, planning, and sales initiatives to exceed revenue targets.",
        ],
    },
    {
        role: "Senior Business Developer",
        company: "CodeSuite",
        location: "Dubai, UAE (Hybrid)",
        period: "Oct 2024 – Present",
        description: [
            "Identifying new growth opportunities and building strong partnerships.",
            "Driving client acquisition and negotiating contracts in competitive markets.",
            "Leading market analysis, planning, and sales initiatives to exceed revenue targets.",
        ],
    },
    {
        role: "Business Development Manager",
        company: "Byte Sailors",
        location: "Lahore, Pakistan (Remote)",
        period: "Mar 2024 – Apr 2025",
        description: [
            "Managed global clients and scaled business operations through digital platforms.",
            "Executed strategic business development campaigns and client outreach.",
        ],
    },
    {
        role: "Business Development Manager",
        company: "IT Extension",
        location: "Lahore, Pakistan (On-site)",
        period: "Feb 2024 – Oct 2024",
        description: [
            "Provided consultancy and led sales initiatives for IT services.",
            "Successfully closed multiple B2B deals through tailored proposals.",
        ],
    },
    {
        role: "Business Development Representative",
        company: "PureLogics",
        location: "Lahore, Pakistan (On-site)",
        period: "Jan 2023 – Apr 2024",
        description: [
            "Focused on CRM management, bid preparation, and lead generation.",
            "Developed customized solutions and maintained strong client accounts.",
        ],
    },
    {
        role: "Business Development Executive",
        company: "SpyreSync",
        location: "Lahore, Pakistan (On-site)",
        period: "Jun 2022 – Jan 2023",
        description: [
            "Handled freelancing platforms, client acquisition, and business growth strategies.",
        ],
    },
    {
        role: "Business Development Executive",
        company: "Value Business Solutions",
        location: "Lahore, Pakistan",
        period: "Jan 2021 – Jan 2022",
        description: [
            "Specialized in proposal writing, B2B sales, and bid management.",
        ],
    },
    {
        role: "Representative",
        company: "Call Center",
        location: "Lahore, Pakistan",
        period: "Mar 2019 – Jan 2020",
        description: [
            "Handled inbound and outbound client communications to support business operations.",
        ],
    },
    {
        role: "Archive Engineer",
        company: "Dunya News",
        location: "Lahore, Pakistan",
        period: "Feb 2018 – Feb 2019",
        description: [
            "Managed and maintained media archives ensuring accurate cataloguing and retrieval of content.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden bg-background/50 py-24 md:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.06),transparent_30%)]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="section-label mb-4">Experience</div>
                    <h2 className="text-[2.5rem] font-bold leading-[1] tracking-[-0.07em] text-foreground md:text-[4.25rem]">
                        Employment History
                    </h2>
                </motion.div>

                <div className="mx-auto max-w-4xl space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="relative border-l-2 border-accent/20 pl-8 transition-colors duration-300 hover:border-accent"
                        >
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent" />

                            <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                    {exp.role}
                                </h3>
                                <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">
                                {exp.company}, {exp.location}
                            </div>

                            <ul className="ml-4 list-disc space-y-2 text-sm leading-7 text-foreground/75 md:text-base">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
