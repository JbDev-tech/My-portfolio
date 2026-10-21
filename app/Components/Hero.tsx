import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden px-7 py-7">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Partie texte */}
        <div>
          <Reveal delay={0}>
            <p className="text-2xl">Bonjour, je suis</p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-2 text-6xl font-bold">
              Jean{" "}
              <span className="inline-block bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text font-bold uppercase tracking-widest text-transparent">
                Baptiste
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <h2 className="mt-4 text-5xl font-bold">
              Développeur{" "}
              <span className="bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text text-transparent">
                Web Junior
              </span>
            </h2>
          </Reveal>

          <Reveal delay={450}>
            <p className="mt-8 max-w-xl text-lg text-white/70">
              Je conçois des applications web modernes avec React et Next.js, en travaillant sur l’interface utilisateur et la gestion des données.
              Je recherche un stage pour renforcer mes compétences, 
              apprendre au contact de professionnels et contribuer à des projets concrets.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href="#projets"
                className="rounded-full border border-white px-10 py-4 text-lg transition-colors duration-300 hover:border-[#BC2AF0] hover:text-[#BC2AF0]"
              >
                Voir mes projets
              </a>

              <a
                href="#contact"
                className="rounded-full bg-[#BC2AF0] px-10 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105"
              >
                Me contacter
              </a>
            </div>
          </Reveal>
        </div>

        {/* Partie portrait */}
        <Reveal delay={300} className="relative flex justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(188,42,240,0.35),transparent)]" />

          <Image
            src="/avatar.png"
            alt="Portrait illustré de Jean Baptiste"
            width={1280}
            height={1280}
            priority
            className="relative h-auto w-full max-w-125 mask-[linear-gradient(to_bottom,black_70%,transparent)]"
          />
        </Reveal>
      </div>
    </section>
  );
}