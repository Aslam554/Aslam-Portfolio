import { Plus_Jakarta_Sans, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mirza Aslam Beg — Software Engineer & Full Stack Developer",
  description: "Software Engineer specializing in building high-performance, scalable web applications. 5x Intern, 1000+ LeetCode Solved.",
  keywords: [
    "Mirza Aslam Beg",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Portfolio"
  ],
  authors: [{ name: "Mirza Aslam Beg" }],
  openGraph: {
    title: "Mirza Aslam Beg — Software Engineer",
    description: "Full Stack Developer building fast, modern, production-ready web applications.",
    url: "https://aslambeg.com",
    siteName: "Mirza Aslam Beg Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-indigo-500/20 selection:text-indigo-400">
        {children}
      </body>
    </html>
  );
}
