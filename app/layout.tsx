import type { Metadata } from "next";
import AnnouncementBar from "./components/AnnouncementBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVOIA — AI Longevity Consultation",
  description:
    "Konsultasi AI Longevity Pertama Anda, gratis. Mulai perjalanan hidup sehat bersama EVOIA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="bg-[#FFFEE8]">
      <body className="min-h-full flex flex-col antialiased">
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
