import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keerthi | Frontend Developer Portfolio",
  description:
    "Portfolio of Keerthi, a frontend and React.js developer building responsive websites with HTML, CSS, JavaScript, React.js and Next.js.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth bg-slate-950 antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}