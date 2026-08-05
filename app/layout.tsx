import type { Metadata } from "next";
import { Work_Sans, Nunito_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Portafolio GLP-1 Friendly | B Nutrition",
  description:
    "Catálogo de productos con fibra y proteína para acompañar tu tratamiento GLP-1.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${workSans.variable} ${nunitoSans.variable} ${montserrat.variable} font-nunito antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
