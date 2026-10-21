
import Image from "next/image";
import { MapPin, Briefcase, Download } from "lucide-react";

const badges = [
  {
    icon: MapPin,
    text: "Lomé, Togo · Présentiel ou à distance",
  },
  {
    icon: Briefcase,
    text: "Disponible pour un stage",
  },
];

export default function About() {
  return (
    <section
      id="a-propos"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête de la section */}
        <div className="text-center">
          <p className="inline-block bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent sm:text-sm">
            Me concernant
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            À propos de{" "}
            <span className="text-[#C084FC]">moi</span>
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#BC2AF0]" />
        </div>

        <div className="mt-8 grid min-w-0 items-center gap-8 sm:mt-10 sm:gap-10 md:grid-cols-2 md:gap-12">
          <div className="min-w-0">
            <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
              Étudiant en Licence 3 Génie Logiciel à Lomé, je
              m'intéresse à la conception et au développement
              d'applications web modernes. J'utilise notamment{" "}
              <span className="font-medium text-[#C084FC]">
                React
              </span>{" "}
              et{" "}
              <span className="font-medium text-[#C084FC]">
                Next.js
              </span>{" "}
              pour créer des interfaces interactives et apprendre
              à structurer des applications complètes. À travers
              mes projets personnels et académiques, je consolide
              mes compétences techniques et développe de bonnes
              pratiques de programmation. Je recherche un stage
              en développement web pour contribuer à des projets
              concrets et progresser au sein d'une équipe.
            </p>

            <ul className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
              {badges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <li
                    key={badge.text}
                    className="inline-flex max-w-full min-w-0 items-center gap-2 rounded-2xl border border-[#BC2AF0]/20 bg-[#BC2AF0]/10 py-2 pl-2 pr-3 text-xs text-white/90 transition-colors duration-300 hover:border-[#BC2AF0]/50 hover:bg-[#BC2AF0]/20 sm:gap-3 sm:rounded-full sm:pr-4 sm:text-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#BC2AF0] sm:h-10 sm:w-10">
                      <Icon
                        className="h-4 w-4 text-black sm:h-5 sm:w-5"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="break-words">
                      {badge.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href="/cv.pdf"
              download
              className="mt-7 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-[#BC2AF0] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#a31fd1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C084FC] sm:mt-8 sm:px-7 sm:text-base"
            >
              <Download
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              />
              Télécharger mon CV
            </a>
          </div>
          
          <div className="relative flex min-w-0 justify-center">
            {/* Halo violet */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(188,42,240,0.28),transparent)] blur-sm sm:h-56 sm:w-56 md:h-64 md:w-64"
            />

            <Image
              src="/about.png"
              alt="Portrait illustré de Jean Baptiste"
              width={1280}
              height={1280}
              sizes="(max-width: 639px) 90vw, (max-width: 767px) 80vw, (max-width: 1279px) 45vw, 560px"
              className="relative z-10 h-auto w-full max-w-[320px] object-contain [mask-image:linear-gradient(to_bottom,black_75%,transparent)] sm:max-w-[380px] md:max-w-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
