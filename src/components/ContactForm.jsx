"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // honeypot anti-spam
  const [botField, setBotField] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (botField !== "") return; // bot → ignore

    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    // Envoi AJAX vers FormSubmit
    const res = await fetch(
      "https://formsubmit.co/ajax/hilaryfarid.osteopathe@gmail.com",
      {
        method: "POST",
        body: data,
      }
    );

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }
  };

  return (
    <div>
      {/* ✔ Message de succès */}
      {success && (
        <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 animate-fade-in">
          🎉 Votre message a bien été envoyé ! Je vous réponds rapidement.
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
          value="Nouveau message depuis le site Hilary Farid"
        />

        {/* Nom */}
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* 📞 Nouveau champ téléphone (non obligatoire) */}
        <input
          type="tel"
          name="telephone"
          placeholder="Votre numéro de téléphone (optionnel)"
          className="w-full p-3 border rounded-lg"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Votre message"
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
              Envoi en cours…
            </span>
          ) : (
            "Envoyer le message"
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
