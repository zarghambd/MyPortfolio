"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const activities = [
    {
        title: "Client Acquisition & Upwork Growth",
        role: "Key Achievement",
        period: "Ongoing",
        description: "Closed multiple high-value projects helping agencies and SMEs scale revenue through strategic bidding and platform optimization on Upwork and other freelancing platforms.",
        icon: <Award className="w-8 h-8 text-accent" />
    },
    {
        title: "B2B Sales Strategy",
        role: "Key Achievement",
        period: "Ongoing",
        description: "Designed and implemented sales workflows that improved client retention and strengthened partnerships, driving consistent revenue growth across global markets.",
        icon: <Award className="w-8 h-8 text-accent" />
    },
    {
        title: "Global Market Expansion",
        role: "Key Achievement",
        period: "UAE & Pakistan",
        description: "Built business pipelines in UAE and Pakistan, managing hybrid and remote teams to penetrate new markets and establish a strong international client base.",
        icon: <Award className="w-8 h-8 text-accent" />
    },
    {
        title: "Workflow Optimization",
        role: "Key Achievement",
        period: "Ongoing",
        description: "Enhanced CRM systems and proposal processes, reducing lead response time by 30% and significantly improving conversion rates across all managed accounts.",
        icon: <BookOpen className="w-8 h-8 text-accent" />
    }
];

export default function Activities() {
    return (
        <section id="activities" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Activities & Courses</h2>
                    <div className="h-1 w-20 bg-accent rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10 hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="mb-6 bg-background rounded-full p-4 w-fit border border-accent/20">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-accent text-sm font-medium mb-4">{item.role} • {item.period}</p>
                            <p className="text-foreground/70 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
