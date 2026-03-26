import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/data";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    appleWebApp: {
        title: "Himanshu",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "dark h-full",
                "antialiased",
                geistSans.variable,
                geistMono.variable,
                figtree.variable,
            )}
        >
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}
