import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zargham.online";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Zargham Haider | Business Development Manager & Growth Strategist",
        template: "%s | Zargham Haider",
    },
    description:
        "Zargham Haider is a Senior Business Development Manager and Growth Strategist specializing in B2B sales, client acquisition, partnerships, and revenue growth.",
    keywords: [
        "Zargham Haider",
        "Business Development Manager",
        "B2B Sales",
        "Client Acquisition",
        "Revenue Growth",
        "Growth Strategist",
        "Strategic Partnerships",
        "SaaS Sales",
        "Consultative Selling",
        "Market Expansion",
        "Sales Process Optimization",
        "Lahore Business Development Manager",
        "Portfolio",
        "Business Development",
    ],
    authors: [{ name: "Zargham Haider" }],
    creator: "Zargham Haider",
    publisher: "Zargham Haider",
    category: "business",
    applicationName: "Zargham Haider Portfolio",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    openGraph: {
        title: "Zargham Haider | Business Development Manager & Growth Strategist",
        description:
            "Senior Business Development Manager and Growth Strategist specializing in B2B sales, client acquisition, partnerships, and revenue growth.",
        url: siteUrl,
        siteName: "Zargham Haider Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/profile.webp",
                width: 800,
                height: 800,
                alt: "Zargham Haider — Business Development Manager",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Zargham Haider | Business Development Manager & Growth Strategist",
        description:
            "Senior Business Development Manager and Growth Strategist specializing in B2B sales, client acquisition, partnerships, and revenue growth.",
        images: ["/profile.webp"],
        creator: "@zarghamhaider",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f8f8f6" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

import { Providers } from "./providers";

// ... (imports remain)

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased font-sans">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
