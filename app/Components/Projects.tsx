
"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Talk AI",
    description:
      "Application web qui permet de discuter avec le contenu d’une page web grâce à l’intelligence artificielle. Collez une URL et posez vos questions sur son contenu.",
    image: "/talk-ai.png",
    tags: ["Next.js", "TypeScript", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/JbDev-tech/talk_ai",
    demo: "https://talk-ai-xi.vercel.app/",
  },
   {
    title: "AgriMétéo",
    description:
      "Application web de suivi agricole : gérez vos parcelles, vos cultures et vos relevés, consultez la météo sur 5 jours et recevez des conseils adaptés à chaque culture et à son stade de croissance.",
    image: "/agrimeteo.png",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
    github: "https://github.com/JbDev-tech/agrimeteo",
    demo: "https://agrimeteo-tree.vercel.app/",
  },
];

const GithubIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  return (
    <section
      id="projets"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#BC2AF0]/20 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[140px] md:h-[500px] md:w-[500px]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <Reveal delay={150}>
          <p className="inline-block bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent sm:text-sm">
            Mes réalisations
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Mes <span className="text-[#BC2AF0]">Projets</span>
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#BC2AF0]" />
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:mt-16 sm:gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group w-full min-w-0 max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#BC2AF0]/50 hover:shadow-[0_0_30px_rgba(188,42,240,0.12)]"
              >
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={`Capture d’écran de ${project.title}`}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 48px), 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-3 top-3 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir le code source de ${project.title} sur GitHub`}
                      title="Voir le code source"
                      className="rounded-full border border-white/10 bg-black/70 p-2 text-white backdrop-blur-md transition hover:bg-[#BC2AF0]"
                    >
                      <GithubIcon size={20} />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visiter ${project.title}`}
                      title="Visiter l’application"
                      className="rounded-full border border-white/10 bg-black/70 p-2 text-white backdrop-blur-md transition hover:bg-[#BC2AF0]"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-bold transition-colors group-hover:text-[#BC2AF0]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="max-w-full break-words rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 sm:px-3 sm:text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#BC2AF0]/10 px-4 py-2.5 text-sm font-semibold text-[#D98BFF] transition hover:bg-[#BC2AF0] hover:text-white"
                  >
                    Découvrir le projet
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
