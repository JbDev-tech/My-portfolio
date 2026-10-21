
"use client";

import { useState } from "react";
import {
  Code2,
  Atom,
  Layout,
  Wind,
  Server,
  Database,
  Box,
  GitBranch,
  HardDrive,
} from "lucide-react";
import Reveal from "./Reveal";

const skills = {
  Frontend: [
    { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
    { name: "React", icon: Atom, color: "#61DAFB" },
    { name: "Next.js", icon: Layout, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: Wind, color: "#38BDF8" },
  ],
  Backend: [
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "Prisma", icon: Box, color: "#2D3748" },
    { name: "PostgreSQL", icon: Database, color: "#4169E1" },
  ],
  "Outils & Autres": [
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "Redis", icon: HardDrive, color: "#DC382D" },
  ],
};

type Category = keyof typeof skills;

export default function Skills() {
  const [active, setActive] = useState<Category>("Frontend");
  const categories = Object.keys(skills) as Category[];

  return (
    <section
      id="competences"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BC2AF0]/20 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="inline-block bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent sm:text-sm">
            Mes compétences
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Compétences &{" "}
            <span className="text-[#BC2AF0]">Technologies</span>
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#BC2AF0]" />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:scale-105 sm:px-6 sm:text-sm ${
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

        <Reveal key={active} delay={200}>
          <ul className="mt-8 grid grid-cols-2 justify-items-center gap-3 min-[480px]:grid-cols-2 min-[480px]:gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {skills[active].map((skill) => {
              const Icon = skill.icon;

              return (
                <li
                  key={skill.name}
                  className="group flex h-32 w-full max-w-44 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#BC2AF0]/50 hover:bg-white/10 sm:h-36 sm:gap-3 sm:p-4 sm:hover:-translate-y-2"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    style={{ color: skill.color }}
                    className="transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                  />

                  <span className="text-center text-xs font-semibold text-white/90 sm:text-sm">
                    {skill.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
