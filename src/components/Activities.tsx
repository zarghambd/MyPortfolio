"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const activities = [
    {
        title: "Client Acquisition & Upwork Growth",
        role: "Key Achievement",
        period: "Ongoing",
        description: "Closed multiple high-value projects helping agencies and SMEs scale revenue through strategic bidding and platform optimization on Upwork and other freelancing platforms.",
        icon: <Award className="w-8 h-8 text-accent" />,
    },
    {
        title: "B2B Sales Strategy",
        role: "Key Achievement",
        period: "Ongoing",
        description: "Designed and implemented sales workflows that improved client retention and strengthened partnerships, driving consistent revenue growth across global markets.",
        icon: <Award className="w-8 h-8 text-accent" />,
    },
    {
        title: "Global Market Expansion",
        role: "Key Achievement",
        period: "UAE & Pakistan",
        description: "Built business pipelines in UAE and Pakistan, managing hybrid and remote teams to penetrate new markets and establish a strong international client base.",
        icon: <Award className="w-8 h-8 text-accent" />,
    },
    {
        title: "Workflow Optimization",
        role: "Key Achievement",
        period: "Ongoing",
        description: "Enhanced CRM systems and proposal processes, reducing lead response time by 30% and significantly improving conversion rates across all managed accounts.",
        icon: <BookOpen className="w-8 h-8 text-accent" />,
    },
];

export default function Activities() {
    return (
        <section id="activities" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.08),transparent_25%)]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="section-label mb-4">Activities</div>
                    <h2 className="text-[2.5rem] font-bold leading-[1] tracking-[-0.07em] text-foreground md:text-[4.25rem]">
                        Growth-focused work that moves businesses forward.
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {activities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04] hover:shadow-[0_26px_60px_rgba(0,0,0,0.28)]"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-background">
                                {item.icon}
                            </div>

                            <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em] text-foreground">
                                {item.title}
                            </h3>

                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                                {item.role} • {item.period}
                            </p>

                            <p className="text-sm leading-7 text-foreground/70">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
