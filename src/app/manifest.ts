import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Zargham Haider Portfolio",
        short_name: "Zargham Haider",
        description: "Senior Business Development Manager and Growth Strategist portfolio.",
        start_url: "/",
        display: "standalone",
        background_color: "#f8f8f6",
        theme_color: "#f8f8f6",
        lang: "en",
        icons: [
            {
                src: "/favicon.svg?v=5",
                sizes: "any",
                type: "image/svg+xml",
                purpose: "any",
            },
        ],
    };
}
