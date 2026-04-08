"use client";

import { useEffect, useState } from "react";

// Remplissez avec vos URLs profondes Doctolib
const doctolibUrls = {
  paris: {
    osteo: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/motives?specialityId=10&telehealth=false&placeId=practice-528728&motiveCategoryIds%5B%5D=536392&pid=practice-528728&source=profile", // URL exacte Paris
    drainage: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/availabilities?specialityId=10&telehealth=false&placeId=practice-528728&motiveIds%5B%5D=8713974&pid=practice-528728&vmids%5B%5D=8713974&visit_motive_category_ids%5B%5D=536393&speciality_ids%5B%5D=10&source=deep_link",
  },
  sevres: {
    osteo: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/motives?specialityId=10&telehealth=false&placeId=practice-201327&motiveCategoryIds%5B%5D=536392&pid=practice-201327&source=profile", // URL exacte Sèvres
    drainage: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/availabilities?specialityId=10&telehealth=false&placeId=practice-201327&motiveCategoryIds%5B%5D=536393&motiveIds%5B%5D=8713974&pid=practice-201327&source=profile",
  },
};

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");

  // Écouteur global pour ouvrir la modale
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const triggerBtn = e.target.closest(".trigger-booking-modal");
      if (triggerBtn) {
        e.preventDefault();
        setStep(1);
        setLocation("");
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Gestion du scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setStep(2);
  };

  const handleServiceSelect = (service) => {
      const finalUrl = doctolibUrls[location][service];

      // 🚀 ENVOI DE L'ÉVÉNEMENT À GOOGLE TAG MANAGER
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "rdv_doctolib_final", // Le nom qu'on va donner au déclencheur dans GTM
          service_type: service,       // 'osteo' ou 'drainage'
          location: location           // 'paris' ou 'sevres'
        });
      }

      // Ouverture de Doctolib
      window.open(finalUrl, "_blank");
      setIsOpen(false);
    };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay sombre */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Conteneur de la Modale */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 transform transition-all animate-fade-in-up">

        {/* Bouton Fermer */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary transition"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 && (
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Où souhaitez-vous consulter ?</h3>
            <div className="space-y-4">

              {/* CABINET PARIS 15 */}
              <button
                onClick={() => handleLocationSelect("paris")}
                className="w-full flex flex-col items-center justify-center p-5 border-2 border-light hover:border-[#0596DE] rounded-2xl transition hover:bg-offwhite group"
              >
                <span className="text-lg font-bold text-[#1E293B] group-hover:text-[#0596DE] transition">
                  📍 Cabinet Paris 15
                </span>
                <span className="text-sm font-normal text-graywarm mt-1">
                  28 rue Letellier, 75015 Paris
                </span>
              </button>

              {/* CABINET SÈVRES */}
              <button
                onClick={() => handleLocationSelect("sevres")}
                className="w-full flex flex-col items-center justify-center p-5 border-2 border-light hover:border-[#0596DE] rounded-2xl transition hover:bg-offwhite group"
              >
                <span className="text-lg font-bold text-[#1E293B] group-hover:text-[#0596DE] transition">
                  📍 Cabinet Sèvres
                </span>
                <span className="text-sm font-normal text-graywarm mt-1">
                  104 Grande Rue, 92310 Sèvres
                </span>
              </button>

            </div>
          </div>
        )}

        {step === 2 && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-graywarm hover:text-primary mb-4 flex items-center justify-center gap-1 mx-auto transition"
            >
              ← Retour au choix du cabinet
            </button>
            <h3 className="text-2xl font-bold text-primary mb-6">Pour quel type de soin ?</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleServiceSelect("osteo")}
                className="w-full flex items-center justify-center gap-3 p-4 bg-primary text-white rounded-2xl text-lg font-semibold shadow-md hover:bg-primary/90 transition transform hover:-translate-y-1"
              >
                🦴 Ostéopathie
              </button>
              <button
                onClick={() => handleServiceSelect("drainage")}
                className="w-full flex items-center justify-center gap-3 p-4 bg-[#FAF6F3] border border-[#E8D8CE] text-[#1E293B] rounded-2xl text-lg font-semibold shadow-sm hover:bg-[#F3ECE7] transition transform hover:-translate-y-1"
              >
                ✨ Drainage Lymphatique Renata França
              </button>
            </div>

            {/* Petit rappel de l'adresse sélectionnée en étape 2 (optionnel mais pro) */}
            <p className="mt-6 text-xs text-graywarm italic">
              Lieu : {location === "paris" ? "28 rue Letellier, Paris 15" : "104 Grande Rue, Sèvres"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
