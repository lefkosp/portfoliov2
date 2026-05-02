import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { SideNav } from "@/components/side-nav";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L.PAPAPETROU // FRONTEND_ENGINEER",
  description:
    "Frontend Engineer focused on architecting robust, scalable client-side applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="relative min-h-full bg-background font-sans text-body-md text-foreground"
        suppressHydrationWarning
      >
        <SideNav />
        <TopBar />
        <main className="flex flex-col pb-section-gap pt-24 lg:ml-72 lg:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
