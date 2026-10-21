"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  values?: { name: string; email: string; message: string };
};

const SUCCESS_MESSAGE = "Merci ! Votre message a bien été envoyé.";

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Anti-spam : ce champ caché doit rester vide (les robots le remplissent)
  if (formData.get("website")) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, message };

  if (!name || !email || !message) {
    return { status: "error", message: "Merci de remplir tous les champs.", values };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Adresse email invalide.", values };
  }
  if (name.length > 100 || message.length > 3000) {
    return { status: "error", message: "Votre message est trop long.", values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Accepte le nouveau nom (CONTACT_TO_EMAIL) et l'ancien (CONTACT_EMAIL)
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Variables manquantes :",
      !apiKey ? "RESEND_API_KEY" : "",
      !to ? "CONTACT_TO_EMAIL (ou CONTACT_EMAIL)" : ""
    );
    return {
      status: "error",
      message: "Le service d'envoi n'est pas configuré. Réessayez plus tard.",
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `Nouveau message de ${name.replace(/[\r\n]+/g, " ")}`,
      text: `De : ${name} (${email})\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "L'envoi a échoué. Réessayez plus tard.",
        values,
      };
    }

    return { status: "success", message: SUCCESS_MESSAGE };
  } catch (e) {
    console.error("Erreur d'envoi :", e);
    return {
      status: "error",
      message: "Une erreur est survenue. Réessayez plus tard.",
      values,
    };
  }
}