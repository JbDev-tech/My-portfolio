"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const sections: HTMLElement[] = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setOpen(false);
  };

  return (
    
    <header className="sticky top-0 z-50 w-full bg-black/80 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <Link
          href="#accueil"
          onClick={() => handleLinkClick("accueil")}
          className="text-xl font-bold"
        >
          <span className="text-[#BC2AF0]">{"</>"}</span>{" "}
          jbDev-Tech
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden items-center gap-10 text-sm md:flex">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => handleLinkClick(sectionId)}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-[#BC2AF0]"
                      : "text-white hover:text-[#BC2AF0]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Télécharger le CV - desktop */}
        <a
          href="/cv.pdf"
          download
          className="hidden items-center gap-2 rounded-full bg-[#BC2AF0] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80 md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Télécharger CV
        </a>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="md:hidden"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Navigation mobile */}
      {open && (
        <div className="border-t border-white/10 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 py-4">
            {links.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => handleLinkClick(sectionId)}
                    className={`block py-1 transition-colors duration-300 ${
                      isActive
                        ? "text-[#BC2AF0]"
                        : "text-white hover:text-[#BC2AF0]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Télécharger le CV - mobile */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#BC2AF0] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            <Download className="h-4 w-4" />
            Télécharger CV
          </a>
        </div>
      )}
    </header>
  );
}