// src/components/Footer.js
import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/config/contact";

export default function Footer() {
  return (
    <footer
      className="bg-offwhite border-t border-graywarm/40 mt-16 py-10"
      aria-label="Pied de page"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* 3 colonnes */}
        <div className="grid md:grid-cols-3 gap-10 text-primary">

          {/* Colonne 1 */}
          <div>
            <h3 className="text-xl font-semibold">Hilary Farid</h3>
            <p className="text-graywarm mt-2 leading-relaxed">
              Ostéopathe DO – Sèvres & Paris 15. <br />
              Spécialisée nourrissons, grossesse, post-accouchement et drainage
              lymphatique méthode Renata França.
            </p>
          </div>

          {/* Colonne 2 */}
          <div>
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="mt-3 space-y-2 text-graywarm">
              {[
                ["Accueil", "/"],
                ["Ostéopathie", "/osteopathie"],
                ["Drainage", "/drainage"],
                ["Tarifs", "/tarifs"],
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

          {/* Colonne 3 */}
          <div>
            <h4 className="font-semibold text-lg">Contact</h4>
            <p className="text-graywarm mt-2 leading-relaxed">
              Téléphone :{" "}
              <a
                href={`tel:${PHONE_LINK}`}
                className="text-primary hover:underline"
              >
                {PHONE}
              </a>
              <br />
              E-mail :{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary hover:underline"
              >
                {EMAIL}
              </a>
            </p>

            {/* Bouton doctolib */}
            <button
              type="button"
              className="trigger-booking-modal mt-4 inline-block bg-primary text-offwhite px-6 py-2 rounded-lg hover:bg-secondary transition duration-300"
            >
              Prendre rendez-vous sur Doctolib
            </button>

            {/* Liens Google Maps */}
            <div className="mt-5 text-graywarm text-sm space-y-2">
              <a
                href="https://www.google.com/maps/place/104+Grande+Rue,+92310+Sèvres"
                target="_blank"
                className="block hover:text-primary hover:underline"
              >
                📍 Cabinet de Sèvres
              </a>
              <a
                href="https://www.google.com/maps/place/28+Rue+Letellier,+75015+Paris"
                target="_blank"
                className="block hover:text-primary hover:underline"
              >
                📍 Cabinet Paris 15
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
