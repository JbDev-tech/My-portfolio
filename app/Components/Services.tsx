
import { CodeXml, Palette, Database } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Développement web",
    description:
      "Conception et développement d’applications web modernes et responsives avec React, Next.js et Tailwind CSS. Architecture en composants réutilisables pour garantir un code maintenable et évolutif.",
    icon: CodeXml,
  },
  {
    title: "Design d’interface",
    description:
      "Réalisation de maquettes et de prototypes sur Figma en amont du développement. Définition de la structure, des composants et de la charte graphique pour une interface claire et cohérente.",
    icon: Palette,
  },
  {
    title: "Back-end et bases de données",
    description:
      "Développement de la logique serveur avec Node.js et Next.js. Modélisation et gestion des données avec Prisma et PostgreSQL, pour des applications fiables et bien structurées.",
    icon: Database,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="inline-block bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent sm:text-sm">
            Ce que je fais
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Mes <span className="text-[#BC2AF0]">services</span>
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:mt-12 sm:gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <Icon
                    className="h-7 w-7 text-[#BC2AF0] sm:h-8 sm:w-8"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-base font-bold sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
