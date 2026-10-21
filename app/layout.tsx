import type { Metadata } from "next";
import { Iosevka_Charon } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";

const iosevka = Iosevka_Charon({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jbDev-Tech | Développeur Web Full-Stack",
  description: "Portfolio de Jean Baptiste, développeur web full-stack.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className={`${iosevka.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
