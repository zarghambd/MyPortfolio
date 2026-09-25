import type { Metadata, Viewport } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = "https://zargham.online";
const firaSans = Fira_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-fira-sans",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Zargham Haider | Business Development Manager & Growth Strategist",
        template: "%s | Zargham Haider",
    },
    description:
        "Zargham Haider is a Business Development Manager and Growth Strategist with 6+ years of experience in B2B sales, client acquisition, strategic partnerships, and revenue growth across global markets.",
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
    category: "business",
    applicationName: "Zargham Haider Portfolio",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    icons: {
        icon: "/favicon.svg?v=5",
        shortcut: "/favicon.svg?v=5",
        apple: "/favicon.svg?v=5",
    },
    openGraph: {
        title: "Zargham Haider | Business Development Manager & Growth Strategist",
        description:
            "Senior Business Development Manager and Growth Strategist driving client acquisition, B2B sales, strategic partnerships, and revenue growth across global markets.",
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
            "Senior Business Development Manager and Growth Strategist driving client acquisition, B2B sales, strategic partnerships, and revenue growth across global markets.",
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
    manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f8f8f6" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
    colorScheme: "light dark",
};

export const appleWebApp = {
    capable: true,
    title: "Zargham Haider Portfolio",
    statusBarStyle: "default" as const,
};

import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${firaSans.variable} antialiased font-sans`}>
                <Providers>
                    {children}
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
