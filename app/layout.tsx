import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { SideNav } from "@/components/side-nav";
import { Terminal } from "@/components/terminal";
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

const siteName = "L.PAPAPETROU // LEAD_FRONTEND_DEVELOPER";
const siteDescription =
  "Lead frontend developer working in React and TypeScript. Frontend architecture and the shared component library for ClearSkies at Odyssey Cybersecurity.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lefkos.dev"),
  title: {
    default: siteName,
    template: "%s // L.PAPAPETROU",
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName: "Lefkos Papapetrou",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="relative min-h-full bg-background font-sans text-body-md text-foreground"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-accent focus:bg-background focus:px-4 focus:py-3 focus:font-display focus:text-label-caps focus:uppercase focus:tracking-widest focus:text-accent"
        >
          SKIP_TO_CONTENT
        </a>
        <SideNav />
        <TopBar />
        <main
          id="main-content"
          className="flex flex-col pb-section-gap pt-24 lg:ml-72 lg:pt-0"
        >
          {children}
        </main>
        <Footer />
        <Terminal />
      </body>
    </html>
  );
}
