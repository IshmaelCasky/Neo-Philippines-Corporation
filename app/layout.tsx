import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Font Configuration: Montserrat is used as the primary font for the project.

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neo Philippines Corporation",
  description:
    "A leading and reliable enterprise in food manufacturing and general merchandise, creating inclusive impact by 2035.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js"
          async
        />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
