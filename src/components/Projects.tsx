"use client";

import { useState } from "react";
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
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    return (
        <section id="projects" className="relative overflow-hidden py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="section-label mb-4">Selected Work</div>
                    <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.07em] text-foreground md:text-6xl">
                        Projects built for real people and real outcomes.
                    </h2>
                </motion.div>

                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-wrap gap-3">
                        {projects.map((project, index) => (
                            <button
                                key={project.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`rounded-full border px-4 py-2 text-left transition-colors ${
                                    activeIndex === index
                                        ? "border-foreground bg-foreground text-background"
                                        : "border-stone-300 bg-white/80 text-foreground/75 hover:border-stone-400"
                                }`}
                            >
                                <span className="block text-sm font-medium">{project.title}</span>
                                <span
                                    className={`mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.16em] ${
                                        activeIndex === index ? "text-background/75" : "text-foreground/50"
                                    }`}
                                >
                                    {project.tags.slice(0, 2).join(" • ")}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <motion.div
                            key={activeProject.title}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden rounded-[30px] border border-stone-200 bg-white/80 shadow-[0_18px_40px_rgba(17,17,17,0.04)]"
                        >
                            <div className="relative h-[320px] w-full overflow-hidden bg-stone-200 md:h-[420px]">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            key={`${activeProject.title}-details`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="rounded-[30px] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]"
                        >
                            <h3 className="text-3xl font-semibold tracking-[-0.05em] text-foreground">
                                {activeProject.title}
                            </h3>
                            <p className="mt-4 text-base leading-7 text-foreground/70">
                                {activeProject.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {activeProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-stone-300 bg-background px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-foreground/70"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={activeProject.links.demo}
                                    className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-foreground hover:border-stone-400"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a
                                    href={activeProject.links.git}
                                    className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-foreground hover:border-stone-400"
                                >
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
