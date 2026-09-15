"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
    {
        role: "Business Development Manager",
        company: "CodeSuite",
        logo: "/logos/Codesuite.png.png",
        location: "Dubai, UAE (Hybrid)",
        period: "Jun 2025 – Present",
        description: [
            "At CodeSuite, I lead strategic business development initiatives focused on building long-term partnerships with startups and SaaS companies.",
            "My role centers on identifying high-potential opportunities, understanding client growth objectives, and aligning them with scalable web and SaaS development solutions.",
            "Rather than pursuing short-term wins, I focus on securing long-term engagements that create sustained value for both clients and the company.",
            "Secured long-term clients through strategic outreach and consultative selling.",
            "Built and maintained strong relationships with founders, CTOs, and product leaders.",
            "Positioned CodeSuite as a reliable full-stack and SaaS development partner.",
            "Structured cost-efficient development teams while maintaining high code quality standards.",
            "Collaborated with technical teams to ensure smooth project scoping, delivery, and client satisfaction.",
            "Through a consultative approach, I help clients move from initial discussions to long-term technology partnerships — ensuring continuity, scalability, and measurable business impact."
        ],
    },
    {
        role: "Senior Business Developer",
        company: "CodeSuite",
        logo: "/logos/Codesuite.png.png",
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
        logo: "/logos/bytesailors.png.png",
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
        logo: "/logos/IT Extension.png.png",
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
        logo: "/logos/purelogics.png.png",
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
        logo: "/logos/spyresync.png.png",
        location: "Lahore, Pakistan (On-site)",
        period: "Jun 2022 – Jan 2023",
        description: [
            "Handled freelancing platforms, client acquisition, and business growth strategies.",
        ],
    },
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="experience" className="py-8 md:py-12">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="space-y-8"
            >
                <div className="flex items-end justify-between gap-6">
                    <h2 className="section-label">Experience</h2>
                    <p className="text-right text-[0.68rem] uppercase tracking-[0.14em] text-muted">6+ years of growth</p>
                </div>

                <div className="relative space-y-0 before:absolute before:bottom-6 before:left-[2.7rem] before:top-6 before:w-px before:bg-[var(--border)]">
                    {experiences.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={`${item.company}-${item.period}`} className={`relative overflow-hidden border-b bg-[var(--card)] transition-colors first:border-t ${isOpen ? "border-foreground/40" : "border-[var(--border)]"}`}>
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left md:px-5"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-white p-1 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-black dark:bg-white">
                                            <span className="relative flex h-full w-full items-center justify-center overflow-hidden">
                                                <span aria-hidden="true">{item.company.slice(0, 2)}</span>
                                                <img
                                                    src={item.logo}
                                                    alt={`${item.company} logo`}
                                                    width="40"
                                                    height="40"
                                                    className="absolute inset-0 h-full w-full object-contain"
                                                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                                                />
                                            </span>
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-foreground md:text-base">{item.role}</p>
                                            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-muted">{item.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:gap-5">
                                        <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted">{item.period}</span>
                                        <ChevronDown size={18} className={`shrink-0 text-muted transition-transform ${isOpen ? "rotate-180 text-foreground" : ""}`} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="border-t border-[var(--border)] px-4 py-4 md:px-5"
                                    >
                                        <div className="mb-3 text-[0.7rem] uppercase tracking-[0.16em] text-muted">{item.location}</div>
                                        <ul className="space-y-2 pl-5 text-[0.92rem] leading-7 text-muted">
                                            {item.description.map((point) => (
                                                <li key={point} className="list-disc">{point}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
