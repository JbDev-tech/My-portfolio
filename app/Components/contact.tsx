
"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "jeanahli6@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/yawo-jeanb-ahli/";

const fieldClass =
  "w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#BC2AF0] focus:outline-none sm:px-4 sm:text-base";

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Message de ${name} via le portfolio`
    );
    const body = encodeURIComponent(
      `${message}\n\nDe : ${name} (${email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <p className="inline-block bg-linear-to-r from-white to-[#BC2AF0] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent sm:text-sm">
              Contact
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Travaillons{" "}
              <span className="text-[#BC2AF0]">ensemble</span>
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-16 bg-[#BC2AF0]" />
          </div>
        </Reveal>

        <div className="mt-10 grid min-w-0 items-start gap-10 sm:mt-12 sm:gap-12 md:mt-16 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <Reveal delay={150}>
              <p className="text-base leading-7 text-white/70 sm:text-lg">
                Je recherche un stage en développement web.
                Écrivez-moi, je réponds rapidement.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-7 space-y-5 sm:mt-10 sm:space-y-6">
                <li className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BC2AF0] text-white sm:h-12 sm:w-12">
                    <Mail className="h-5 w-5" />
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all text-sm transition-colors hover:text-[#BC2AF0] sm:text-base"
                  >
                    {EMAIL}
                  </a>
                </li>

                <li className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BC2AF0] text-white sm:h-12 sm:w-12">
                    <LinkedinIcon size={20} />
                  </span>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-sm transition-colors hover:text-[#BC2AF0] sm:text-base"
                  >
                    linkedin.com/in/yawo-jeanb-ahli
                  </a>
                </li>

                <li className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BC2AF0] text-white sm:h-12 sm:w-12">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 text-sm leading-6 sm:text-base">
                    Lomé, Togo · Disponible à distance
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <form
              onSubmit={handleSubmit}
              className="w-full min-w-0 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-5 lg:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm"
                >
                  Nom*
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm"
                >
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#BC2AF0] px-4 py-3 text-sm font-semibold transition hover:bg-[#a020d0] sm:text-base"
              >
                Envoyer le message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
