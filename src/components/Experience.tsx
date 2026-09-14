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
            "Leading market analysis, planning, and sales initiatives to exceed revenue targets."
        ]
    },
    {
        role: "Senior Business Developer",
        company: "CodeSuite",
        location: "Dubai, UAE (Hybrid)",
        period: "Oct 2024 – Present",
        description: [
            "Identifying new growth opportunities and building strong partnerships.",
            "Driving client acquisition and negotiating contracts in competitive markets.",
            "Leading market analysis, planning, and sales initiatives to exceed revenue targets."
        ]
    },
    {
        role: "Business Development Manager",
        company: "Byte Sailors",
        location: "Lahore, Pakistan (Remote)",
        period: "Mar 2024 – Apr 2025",
        description: [
            "Managed global clients and scaled business operations through digital platforms.",
            "Executed strategic business development campaigns and client outreach."
        ]
    },
    {
        role: "Business Development Manager",
        company: "IT Extension",
        location: "Lahore, Pakistan (On-site)",
        period: "Feb 2024 – Oct 2024",
        description: [
            "Provided consultancy and led sales initiatives for IT services.",
            "Successfully closed multiple B2B deals through tailored proposals."
        ]
    },
    {
        role: "Business Development Representative",
        company: "PureLogics",
        location: "Lahore, Pakistan (On-site)",
        period: "Jan 2023 – Apr 2024",
        description: [
            "Focused on CRM management, bid preparation, and lead generation.",
            "Developed customized solutions and maintained strong client accounts."
        ]
    },
    {
        role: "Business Development Executive",
        company: "SpyreSync",
        location: "Lahore, Pakistan (On-site)",
        period: "Jun 2022 – Jan 2023",
        description: [
            "Handled freelancing platforms, client acquisition, and business growth strategies."
        ]
    },
    {
        role: "Business Development Executive",
        company: "Value Business Solutions",
        location: "Lahore, Pakistan",
        period: "Jan 2021 – Jan 2022",
        description: [
            "Specialized in proposal writing, B2B sales, and bid management."
        ]
    },
    {
        role: "Representative",
        company: "Call Center",
        location: "Lahore, Pakistan",
        period: "Mar 2019 – Jan 2020",
        description: [
            "Handled inbound and outbound client communications to support business operations."
        ]
    },
    {
        role: "Archive Engineer",
        company: "Dunya News",
        location: "Lahore, Pakistan",
        period: "Feb 2018 – Feb 2019",
        description: [
            "Managed and maintained media archives ensuring accurate cataloguing and retrieval of content."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Employment History</h2>
                    <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-accent/20 hover:border-accent transition-colors duration-300"
                        >
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent" />

                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="mb-4 text-foreground/70 font-medium">
                                {exp.company}, {exp.location}
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80">
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
