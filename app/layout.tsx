import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Sahukar Group - All Problem, One Solution",
  description: "From home to business, we solve everything under one trusted name. Premium local-to-corporate service ecosystem in Indore, Madhya Pradesh.",
  keywords: "Sahukar Group, Krishna Sahukar, business services, Indore, corporate solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${montserrat.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
