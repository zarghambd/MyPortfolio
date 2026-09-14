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
        <section id="experience" className="relative overflow-hidden py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="section-label mb-4">Experience</div>
                    <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.07em] text-foreground md:text-6xl">
                        Employment History
                    </h2>
                </motion.div>

                <div className="mx-auto max-w-4xl">
                    <div className="space-y-8 border-l border-stone-300 pl-6 md:pl-8">
                        {experiences.map((exp, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="relative rounded-[24px] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]"
                            >
                                <span className="absolute -left-[1.05rem] top-8 h-3 w-3 rounded-full border-4 border-background bg-foreground" />

                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-background text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-foreground/70">
                                            {exp.company.slice(0, 2).toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                                {exp.role}
                                            </h3>
                                            <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">
                                                {exp.company}, {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <span className="w-fit rounded-full border border-stone-300 bg-background px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-foreground/60">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="mt-5 ml-4 list-disc space-y-2 text-sm leading-7 text-foreground/75 md:text-base">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
