"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const skills = {
  Frontend: [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  ],
  Backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Prisma", icon: "devicon-prisma-original text-white" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  ],
  "Outils & Autres": [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "Redis", icon: "devicon-redis-plain colored" },
  ],
};

type Category = keyof typeof skills;

export default function Skills() {
  const [active, setActive] = useState<Category>("Frontend");
  const categories = Object.keys(skills) as Category[];

  return (
    <section
      id="competences"
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
    >
      {/* Glow de fond */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(188,42,240,0.25),transparent)] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-[#BC2AF0] sm:text-sm">
            Mon expertise
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
            Compétences & <span className="text-[#BC2AF0]">Technologies</span>
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#BC2AF0]" />
        </Reveal>

        {/* Boutons catégories */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:px-6 sm:text-sm ${
                  active === category
                    ? "bg-[#BC2AF0] text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Liste des compétences */}
        <Reveal key={active} delay={150}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-6">
            {skills[active].map((skill, index) => (
              <li
                key={skill.name}
                className="flex h-28 w-[calc(50%-0.375rem)] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:h-36 sm:w-40 sm:gap-4 sm:p-4 md:w-44"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <i
                  className={`${skill.icon} text-4xl sm:text-5xl`}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold sm:text-sm">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}