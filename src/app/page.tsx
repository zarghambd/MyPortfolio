import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Zargham Haider",
        url: "https://zargham.online",
        image: "https://zargham.online/profile.webp",
        jobTitle: "Senior Business Development Manager",
        description:
            "Senior Business Development Manager and Growth Strategist specializing in B2B sales, client acquisition, strategic partnerships, and revenue growth.",
        email: "mailto:zarghamh96@gmail.com",
        telephone: "+923241017481",
        knowsAbout: [
            "Business Development",
            "B2B Sales",
            "Client Acquisition",
            "Strategic Partnerships",
            "SaaS Sales",
            "Revenue Growth",
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressCountry: "PK",
        },
        sameAs: ["https://www.linkedin.com/in/zargham-haider-189492161/"],
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-black/10 selection:text-foreground dark:selection:bg-white/20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
