// src/components/Footer.js
import Link from "next/link";
import { PHONE, PHONE_LINK } from "@/config/contact";
import { HOURS_DISPLAY_SEVRES, HOURS_DISPLAY_PARIS15 } from "@/config/siteConfig";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBadgeCheck,
} from "@/components/icons/UiIcons";

export default function Footer() {
  return (
    <footer
      className="bg-offwhite border-t border-graywarm/40 mt-16 py-10"
      aria-label="Pied de page"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* 4 colonnes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-primary">

          {/* Colonne 1 — Marque */}
          <div>
            <h3 className="text-xl font-semibold">Hilary Farid</h3>
            <p className="text-graywarm mt-2 leading-relaxed">
              Ostéopathe DO – Sèvres & Paris 15. <br />
              Spécialisée nourrissons, grossesse, post-accouchement et drainage
              lymphatique méthode Renata França.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary">
              <IconBadgeCheck className="w-5 h-5 shrink-0" />
              Praticienne certifiée Renata França
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="mt-3 space-y-2 text-graywarm">
              {[
                ["Accueil", "/"],
                ["Ostéopathie", "/osteopathie"],
                ["Drainage Renata França", "/drainage"],
                ["Carte cadeau", "/carte-cadeau"],
                ["Tarifs", "/tarifs"],
                ["Blog", "/blog"],
                ["Témoignages", "/temoignages"],
                ["Sèvres", "/sevres"],
                ["Paris 15", "/paris15"],
                ["À propos", "/a-propos"],
                ["Contact", "/contact"],
                ["Mentions légales", "/mentions-legales"],
                ["Politique de confidentialité", "/politique-confidentialite"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="inline-block hover:text-primary transition-all duration-200 hover:translate-x-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Horaires par cabinet */}
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <IconClock className="w-5 h-5" /> Horaires
            </h4>

            {/* Sèvres */}
            <div className="mt-3 flex items-center gap-1.5">
              <IconMapPin className="w-4 h-4 text-secondary shrink-0" />
              <p className="text-base font-bold text-primary">Sèvres</p>
            </div>
            <ul className="mt-1 space-y-0.5 text-sm text-graywarm">
              {HOURS_DISPLAY_SEVRES.map(({ day, hours }) => (
                <li key={day} className={`flex justify-between gap-3 ${hours === "Fermé" ? "opacity-40" : ""}`}>
                  <span>{day}</span>
                  <span className="font-medium text-primary">{hours}</span>
                </li>
              ))}
            </ul>

            {/* Paris 15 */}
            <div className="mt-4 pt-3 border-t border-light/60 flex items-center gap-1.5">
              <IconMapPin className="w-4 h-4 text-secondary shrink-0" />
              <p className="text-base font-bold text-primary">Paris 15</p>
            </div>
            <ul className="mt-1 space-y-0.5 text-sm text-graywarm">
              {HOURS_DISPLAY_PARIS15.map(({ day, hours }) => (
                <li key={day} className={`flex justify-between gap-3 ${hours === "Fermé" ? "opacity-40" : ""}`}>
                  <span>{day}</span>
                  <span className="font-medium text-primary">{hours}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="trigger-booking-modal mt-3 text-xs font-semibold text-doctolib underline underline-offset-4 hover:text-doctolib-dark transition-colors"
            >
              Réserver un créneau sur Doctolib →
            </button>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="mt-3 space-y-2 text-graywarm">
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <IconPhone className="w-4 h-4 shrink-0" /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <IconMail className="w-4 h-4 shrink-0" /> Formulaire de contact
              </Link>
            </div>

            {/* Bouton doctolib */}
            <button
              type="button"
              className="trigger-booking-modal mt-4 inline-block bg-primary text-offwhite px-6 py-2 rounded-lg hover:bg-secondary transition duration-300"
            >
              Prendre rendez-vous
            </button>

            {/* Liens Google Maps */}
            <div className="mt-5 text-graywarm text-sm space-y-2">
              <a
                href="https://share.google/vyqDUNKOo1q0HmayO"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary hover:underline"
              >
                <IconMapPin className="w-4 h-4 shrink-0" /> Cabinet de Sèvres
              </a>
              <a
                href="https://share.google/fQuSNhyJKa5uEN5gK"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary hover:underline"
              >
                <IconMapPin className="w-4 h-4 shrink-0" /> Cabinet Paris 15
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-graywarm/30 mt-10 pt-6 text-center text-graywarm text-sm">
          <p>© {new Date().getFullYear()} Hilary Farid – Ostéopathe DO</p>
          <p>Sèvres & Paris 15 – Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
