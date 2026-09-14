"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Users, ClipboardList } from "lucide-react";

const services = [
    {
        icon: <TrendingUp size={40} />,
        title: "B2B Sales Strategy",
        description: "Designing and executing tailored sales strategies to acquire high-value clients and drive consistent revenue growth for businesses."
    },
    {
        icon: <Handshake size={40} />,
        title: "Client Acquisition",
        description: "Leveraging platforms like Upwork, Fiverr, and Freelancer.com to identify, engage, and close deals with global clients."
    },
    {
        icon: <Users size={40} />,
        title: "Business Development",
        description: "Building strong partnerships, expanding into new markets, and managing relationships to scale business operations sustainably."
    },
    {
        icon: <ClipboardList size={40} />,
        title: "Proposal & Bid Management",
        description: "Crafting compelling proposals and managing the full bid lifecycle to maximize win rates and secure high-value contracts."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
                    <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-foreground/5 p-8 rounded-xl border border-foreground/10 hover:border-accent/50 hover:bg-foreground/10 transition-all duration-300 group"
                        >
                            <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-foreground/70 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
