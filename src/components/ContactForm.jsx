"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_LINK, EMAIL } from "@/config/contact";

export default function ContactForm() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") ?? false;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // honeypot anti-spam
  const [botField, setBotField] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (botField !== "") return; // bot → ignore

    setLoading(true);
    setError(false);

    const form = e.target;
    const data = new FormData(form);

    try {
      // Envoi AJAX vers FormSubmit
      const res = await fetch(
        "https://formsubmit.co/ajax/hilaryfarid.osteopathe@gmail.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ✔ Message de succès */}
      {success && (
        <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 animate-fade-in">
          🎉 {isEn ? "Your message has been sent! I'll get back to you shortly." : "Votre message a bien été envoyé ! Je vous réponds rapidement."}
        </div>
      )}

      {/* ⚠ Message d'erreur avec solution de repli */}
      {error && (
        <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 animate-fade-in">
          {isEn ? (
            <>
              ⚠️ The form couldn't be sent right now. Please contact me directly by phone at{" "}
              <a href={`tel:${PHONE_LINK}`} className="font-semibold underline">{PHONE}</a> or by email at{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.
            </>
          ) : (
            <>
              ⚠️ Le formulaire n'a pas pu être envoyé pour le moment. Contactez-moi directement par téléphone au{" "}
              <a href={`tel:${PHONE_LINK}`} className="font-semibold underline">{PHONE}</a> ou par e-mail à{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.
            </>
          )}
        </div>
      )}

      {/* === FORMULAIRE === */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Honeypot invisible anti-spam */}
        <input
          type="text"
          name="_honey"
          className="hidden"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value={isEn ? "New message from Hilary Farid's website (EN)" : "Nouveau message depuis le site Hilary Farid"}
        />

        {/* Nom */}
        <input
          type="text"
          name="name"
          placeholder={isEn ? "Your name" : "Votre nom"}
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder={isEn ? "Your email" : "Votre e-mail"}
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* 📞 Champ téléphone (non obligatoire) */}
        <input
          type="tel"
          name="telephone"
          placeholder={isEn ? "Your phone number (optional)" : "Votre numéro de téléphone (optionnel)"}
          className="w-full p-3 border rounded-lg"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder={isEn ? "Your message" : "Votre message"}
          rows={5}
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* Bouton */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-primary text-offwhite py-3 rounded-lg font-semibold transition
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-secondary"}
          `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-offwhite border-t-transparent rounded-full animate-spin"></span>
              {isEn ? "Sending…" : "Envoi en cours…"}
            </span>
          ) : (
            isEn ? "Send Message" : "Envoyer le message"
          )}
        </button>
      </form>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
