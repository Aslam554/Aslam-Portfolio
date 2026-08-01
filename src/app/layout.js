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
  metadataBase: new URL("https://aslam-portfolio-indol.vercel.app"),
  title: "Mirza Aslam Beg — Software Engineer & Full Stack Developer",
  description: "Mirza Aslam Beg is a Software Engineer & Full Stack Developer building fast, scalable, and production-ready web applications for startups and businesses.",
  keywords: [
    "Mirza Aslam Beg",
    "Aslam Beg",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Aslam Coding",
    "Portfolio"
  ],
  authors: [{ name: "Mirza Aslam Beg", url: "https://x.com/aslambeg84" }],
  creator: "Mirza Aslam Beg",
  icons: {
    icon: "/mirza-aslam-beg.jpeg",
    shortcut: "/mirza-aslam-beg.jpeg",
    apple: "/mirza-aslam-beg.jpeg",
  },
  openGraph: {
    title: "Mirza Aslam Beg — Software Engineer & Full Stack Developer",
    description: "Software Engineer & Full Stack Developer building fast, scalable, and production-ready web applications.",
    url: "https://aslam-portfolio-indol.vercel.app",
    siteName: "Mirza Aslam Beg Portfolio",
    images: [
      {
        url: "/mirza-aslam-beg.jpeg",
        width: 800,
        height: 800,
        alt: "Mirza Aslam Beg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirza Aslam Beg — Software Engineer",
    description: "Software Engineer & Full Stack Developer. Delivered 5+ Production Projects & 5 Internships.",
    creator: "@aslambeg84",
    images: ["/mirza-aslam-beg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/mirza-aslam-beg.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/mirza-aslam-beg.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/mirza-aslam-beg.jpeg" />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-indigo-500/20 selection:text-indigo-400">
        {children}
      </body>
    </html>
  );
}
