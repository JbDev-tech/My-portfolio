"use client";

import { useActionState, useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/actions/Contact";

const EMAIL = "jeanahli6@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/yawo-jeanb-ahli/";

// Durée d'affichage du message (en millisecondes)
const MESSAGE_DURATION = 5000;

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#BC2AF0] focus:outline-none";

const iconCircleClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BC2AF0]";

const initialState: ContactState = { status: "idle", message: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );

  // Garde en mémoire le résultat déjà masqué
  const [hiddenState, setHiddenState] = useState<ContactState | null>(null);

  // Masque le message après quelques secondes
  useEffect(() => {
    if (!state.message) return;

    const timer = setTimeout(() => setHiddenState(state), MESSAGE_DURATION);
    return () => clearTimeout(timer);
  }, [state]);

  const showMessage = Boolean(state.message) && hiddenState !== state;

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#BC2AF0] sm:text-sm">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">
            Travaillons <span className="text-[#BC2AF0]">ensemble</span>
          </h2>
          <div className="mx-auto mt-3 h-0.75 w-16 bg-[#BC2AF0]" />
        </div>

        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-base text-white/70 sm:text-lg">
              Je recherche un stage en développement web. Écrivez-moi, je
              réponds rapidement.
            </p>

            <ul className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              <li className="flex items-center gap-4">
                <span className={iconCircleClass}>
                  <Mail className="h-5 w-5" />
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="min-w-0 break-all text-sm sm:text-base"
                >
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-center gap-4">
                <span className={iconCircleClass}>
                  <LinkedinIcon size={20} className="text-white" />
                </span>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-all text-sm sm:text-base"
                >
                  linkedin.com/in/yawo-jeanb-ahli
                </a>
              </li>

              <li className="flex items-center gap-4">
                <span className={iconCircleClass}>
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0 text-sm sm:text-base">
                  Lomé, Togo · Disponible à distance
                </span>
              </li>
            </ul>
          </div>

          <form
            action={formAction}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Nom*
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={100}
                defaultValue={state.values?.name}
                placeholder="Votre nom"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue={state.values?.email}
                placeholder="Votre email"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={3000}
                defaultValue={state.values?.message}
                placeholder="Votre message"
                className={fieldClass}
              />
            </div>

            {/* Champ piège anti-spam */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-full bg-[#BC2AF0] px-6 py-3 font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Envoi en cours…" : "Envoyer le message"}
            </button>

            {showMessage && (
              <p
                role="status"
                className={`text-sm ${
                  state.status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}