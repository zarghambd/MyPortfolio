"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Moodflik",
        description: "Full-stack web & mobile application focused on enhancing user engagement through personalized content. Built responsive UIs and integrated APIs.",
        tags: ["Web/Mobile", "Full-Stack", "API Integration", "UI/UX"],
        links: { demo: "https://www.moodflik.com/", git: "https://github.com/Aliwaris512" },
        image: "/moodflick.png",
    },
    {
        title: "SeniorThrive",
        description: "Healthcare SaaS platform supporting senior wellness. Implemented dashboard workflows, questionnaires, and profile management.",
        tags: ["SaaS", "Healthcare", "Dashboard", "Frontend"],
        links: { demo: "https://seniorthrive.com/", git: "https://github.com/Aliwaris512" },
        image: "/seniorthrive.png",
    },
    {
        title: "The 95 Star",
        description: "Airport shuttle service app. Designed reusable components and built a responsive UI for a seamless user experience.",
        tags: ["Vue.js", "Node.js", "Shuttle Service", "Frontend"],
        links: { demo: "https://www.the95star.com/", git: "https://github.com/Aliwaris512" },
        image: "/the95star.png",
    },
    {
        title: "Student Portal - Superior University",
        description: "University portal for managing student data (Student & Teacher Dashboards). Features role-based access, JWT auth, and REST API integration.",
        tags: ["React", "Python", "FastAPI", "JWT"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://placehold.co/600x400/111/444/png?text=Student+Portal",
    },
    {
        title: "Expense Tracker",
        description: "Efficient expense tracking app using Vue 3 Composition API. Focuses on modular code and reactive state management for real-time data.",
        tags: ["Vue 3", "Composition API", "Finance", "State Mgmt"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://placehold.co/600x400/111/444/png?text=Expense+Tracker",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(74,222,128,0.06),transparent_25%)]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="section-label mb-4">Selected Work</div>
                    <h2 className="text-[2.5rem] font-bold leading-[1] tracking-[-0.07em] text-foreground md:text-[4.25rem]">
                        Projects built for real people and real outcomes.
                    </h2>
                </motion.div>

                <motion.div className="cursor-grab overflow-hidden active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -((projects.length * 450) - 1000) }}
                        className="flex space-x-8 pb-10"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group relative min-w-[85vw] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] shadow-[0_24px_60px_rgba(0,0,0,0.26)] md:min-w-[400px]"
                                whileHover={{ scale: 1.02, y: -10 }}
                            >
                                <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                                    />
                                </div>

                                <div className="relative z-20 p-6 md:p-8">
                                    <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-foreground group-hover:text-accent">
                                        {project.title}
                                    </h3>
                                    <p className="mb-6 text-sm leading-7 text-foreground/70">{project.description}</p>

                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <a
                                            href={project.links.demo}
                                            className="flex items-center text-sm font-bold text-foreground hover:text-accent"
                                        >
                                            <ExternalLink size={18} className="mr-2" /> Live Demo
                                        </a>
                                        <a
                                            href={project.links.git}
                                            className="flex items-center text-sm font-bold text-foreground hover:text-accent"
                                        >
                                            <Github size={18} className="mr-2" /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
