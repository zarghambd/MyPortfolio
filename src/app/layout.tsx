import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://zargham.online";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Zargham Haider | Business Development Manager & Growth Strategist",
        template: "%s | Zargham Haider",
    },
    description:
        "Portfolio of Zargham Haider, a Business Development Manager with 6+ years of success in client acquisition, B2B sales, and revenue growth across global markets.",
    keywords: [
        "Zargham Haider",
        "Business Development Manager",
        "B2B Sales",
        "Client Acquisition",
        "Revenue Growth",
        "Growth Strategist",
        "Portfolio",
        "Business Development",
    ],
    authors: [{ name: "Zargham Haider" }],
    creator: "Zargham Haider",
    publisher: "Zargham Haider",
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
            "6+ years driving client acquisition, B2B sales, and revenue growth across global markets. Explore my portfolio and experience.",
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
            "6+ years driving client acquisition, B2B sales, and revenue growth across global markets.",
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

import { Providers } from "./providers";

// ... (imports remain)

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased font-sans`}>
                <Providers>
                    <SmoothScroll />
                    <CustomCursor />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
