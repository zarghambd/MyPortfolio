"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const experiences = [
    {
        role: "Business Development Manager",
        company: "CodeSuite",
        logo: "/logos/Codesuite.png.png",
        location: "Dubai, UAE (Hybrid)",
        period: "Jun 2025 – Present",
        description: [
            "Identify new growth opportunities and build strong, long-term client partnerships across international markets.",
            "Drive end-to-end client acquisition, from prospecting through contract negotiation, in competitive markets.",
            "Lead market analysis, strategic planning, and sales initiatives to exceed monthly and quarterly revenue targets.",
            "Oversee a team of business developers, setting targets, coaching performance, and reviewing pipeline health.",
            "Own key account relationships post-sale, driving upsells and long-term retention.",
        ],
    },
    {
        role: "Senior Business Developer",
        company: "CodeSuite",
        logo: "/logos/Codesuite.png.png",
        location: "Dubai, UAE (Hybrid)",
        period: "Oct 2024 – Present",
        description: [
            "Identify new growth opportunities and build strong, long-term client partnerships.",
            "Drive client acquisition and negotiate contracts in competitive international markets.",
            "Lead market analysis, strategic planning, and sales initiatives to exceed revenue targets.",
        ],
    },
    {
        role: "Business Development Manager",
        company: "Byte Sailors",
        logo: "/logos/bytesailors.png.png",
        location: "Lahore, Pakistan (Remote)",
        period: "Mar 2024 – Apr 2025",
        description: [
            "Managed a global client portfolio and scaled business operations through digital platforms.",
            "Executed strategic business development campaigns and targeted client outreach.",
        ],
    },
    {
        role: "Business Development Manager",
        company: "IT Extension",
        logo: "/logos/IT Extension.png.png",
        location: "Lahore, Pakistan (On-site)",
        period: "Feb 2024 – Oct 2024",
        description: [
            "Provided consultancy and led sales initiatives for IT services clients.",
            "Closed multiple B2B deals through tailored, high-conversion proposals.",
        ],
    },
    {
        role: "Business Development Representative",
        company: "PureLogics",
        logo: "/logos/purelogics.png.png",
        location: "Lahore, Pakistan (On-site)",
        period: "Jan 2023 – Apr 2024",
        description: [
            "Owned CRM management, bid preparation, and end-to-end lead generation.",
            "Developed customized client solutions and maintained strong, long-term accounts.",
        ],
    },
    {
        role: "Business Development Executive",
        company: "SpyreSync",
        logo: "/logos/spyresync.png.png",
        location: "Lahore, Pakistan (On-site)",
        period: "Jun 2022 – Jan 2023",
        description: [
            "Managed freelancing-platform client acquisition and business growth strategy.",
        ],
    },
    {
        role: "Business Development Executive",
        company: "Value Business Solutions",
        logo: "/logos/value business solutions.png",
        location: "Lahore, Pakistan",
        period: "Jan 2021 – Jan 2022",
        description: ["Specialized in proposal writing, B2B sales, and competitive bid management."],
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

                <div className="relative space-y-3 before:absolute before:bottom-6 before:left-[2.7rem] before:top-6 before:w-px before:bg-[var(--border)]">
                    {experiences.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <Collapsible
                                key={`${item.company}-${item.period}`}
                                open={isOpen}
                                onOpenChange={(open) => setOpenIndex(open ? index : -1)}
                                className={`relative overflow-hidden rounded-[30px] border bg-[var(--card)] transition-colors ${isOpen ? "border-foreground/40" : "border-[var(--border)]"}`}
                            >
                                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left md:px-5">
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
                                </CollapsibleTrigger>

                                <CollapsibleContent className="border-t border-[var(--border)] px-4 py-4 md:px-5">
                                        <div className="mb-3 text-[0.7rem] uppercase tracking-[0.16em] text-muted">{item.location}</div>
                                        <ul className="max-w-2xl space-y-2 pl-5 text-[0.92rem] leading-7 text-muted">
                                            {item.description.map((point) => (
                                                <li key={point} className="list-disc">{point}</li>
                                            ))}
                                        </ul>
                                </CollapsibleContent>
                            </Collapsible>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
