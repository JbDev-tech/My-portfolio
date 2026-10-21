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
      className="relative overflow-hidden px-6 py-24 md:px-10"
    >
      {/* Glow de fond */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(188,42,240,0.25),transparent)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-[#BC2AF0]">
            Mon expertise
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Compétences & <span className="text-[#BC2AF0]">Technologies</span>
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#BC2AF0]" />
        </Reveal>

        {/* Boutons catégories */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
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

        {/* Liste des compétences – se réanime à chaque changement grâce à key={active} */}
        <Reveal key={active} delay={150}>
          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {skills[active].map((skill, index) => (
              <li
                key={skill.name}
                className="flex h-36 w-40 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <i
                  className={`${skill.icon} text-5xl`}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}