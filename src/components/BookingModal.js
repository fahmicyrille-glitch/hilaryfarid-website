"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_LINK } from "@/config/contact";
import {
  IconPhone,
  IconCalendar,
  IconMapPin,
  IconBone,
  IconDroplets,
  IconArrowLeft,
} from "@/components/icons/UiIcons";

// URLs profondes Doctolib
const doctolibUrls = {
  paris: {
    osteo: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/motives?specialityId=10&telehealth=false&placeId=practice-528728&motiveCategoryIds%5B%5D=536392&pid=practice-528728&source=profile",
    drainage: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/availabilities?specialityId=10&telehealth=false&placeId=practice-528728&motiveIds%5B%5D=8713974&pid=practice-528728&vmids%5B%5D=8713974&visit_motive_category_ids%5B%5D=536393&speciality_ids%5B%5D=10&source=deep_link",
  },
  sevres: {
    osteo: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/motives?specialityId=10&telehealth=false&placeId=practice-201327&motiveCategoryIds%5B%5D=536392&pid=practice-201327&source=profile",
    drainage: "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/availabilities?specialityId=10&telehealth=false&placeId=practice-201327&motiveCategoryIds%5B%5D=536393&motiveIds%5B%5D=8713974&pid=practice-201327&source=profile",
  },
};

const CABINETS = {
  paris: { label: "Cabinet Paris 15", address: "28 rue Letellier, 75015 Paris" },
  sevres: { label: "Cabinet Sèvres", address: "104 Grande Rue, 92310 Sèvres" },
};

const isMobileDevice = () =>
  typeof navigator !== "undefined" &&
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const pushDataLayer = (payload) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  // Étapes : "channel" → ("phone") ou ("location" → "service")
  const [step, setStep] = useState("channel");
  const [location, setLocation] = useState("");
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // Cabinet pré-sélectionné selon la page visitée
  const presetLocation = pathname?.startsWith("/sevres")
    ? "sevres"
    : pathname?.startsWith("/paris15")
    ? "paris"
    : "";

  // Écouteur global pour ouvrir la modale
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const triggerBtn = e.target.closest(".trigger-booking-modal");
      if (triggerBtn) {
        e.preventDefault();
        lastFocusedRef.current = triggerBtn;
        setStep("channel");
        setLocation("");
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // On rend le focus au bouton d'origine (a11y)
    lastFocusedRef.current?.focus?.();
  }, []);

  // Scroll lock + focus initial + Échap + focus trap
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  /* ---------- Choix du canal ---------- */
  const handlePhoneChoice = () => {
    const mobile = isMobileDevice();
    pushDataLayer({
      event: "rdv_phone",
      device: mobile ? "mobile" : "desktop",
    });
    if (mobile) {
      // Sur téléphone : appel direct
      window.location.href = `tel:${PHONE_LINK}`;
      setIsOpen(false);
    } else {
      // Sur ordinateur : on affiche le numéro
      setStep("phone");
    }
  };

  const handleDoctolibChoice = () => {
    if (presetLocation) {
      setLocation(presetLocation);
      setStep("service");
    } else {
      setStep("location");
    }
  };

  /* ---------- Workflow Doctolib ---------- */
  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setStep("service");
  };

  const handleServiceSelect = (service) => {
    const finalUrl = doctolibUrls[location][service];

    pushDataLayer({
      event: "rdv_doctolib_final",
      service_type: service, // 'osteo' ou 'drainage'
      location: location, // 'paris' ou 'sevres'
    });

    window.open(finalUrl, "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay sombre */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={close}
      />

      {/* Conteneur de la Modale */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Prendre rendez-vous"
        tabIndex={-1}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 transform transition-all animate-fade-in-up outline-none"
      >
        {/* Bouton Fermer */}
        <button
          onClick={close}
          aria-label="Fermer"
          className="absolute top-4 right-4 text-gray-400 hover:text-primary transition"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ============ ÉTAPE : CANAL (téléphone ou Doctolib) ============ */}
        {step === "channel" && (
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Prendre rendez-vous
            </h3>
            <p className="text-sm text-graywarm mb-6">
              Choisissez la façon la plus simple pour vous.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleDoctolibChoice}
                className="w-full flex items-center gap-4 p-5 bg-doctolib text-white rounded-2xl shadow-md hover:bg-doctolib-dark transition transform hover:-translate-y-0.5 text-left"
              >
                <span className="shrink-0 w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                  <IconCalendar className="w-6 h-6" />
                </span>
                <span>
                  <span className="block text-lg font-bold">Réserver sur Doctolib</span>
                  <span className="block text-sm text-white/85">
                    Créneaux en ligne, 24h/24
                  </span>
                </span>
              </button>

              <button
                onClick={handlePhoneChoice}
                className="w-full flex items-center gap-4 p-5 border-2 border-light hover:border-primary rounded-2xl transition hover:bg-offwhite text-left group"
              >
                <span className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <IconPhone className="w-6 h-6" />
                </span>
                <span>
                  <span className="block text-lg font-bold text-ink group-hover:text-primary transition">
                    Par téléphone
                  </span>
                  <span className="block text-sm text-graywarm">
                    Échangez directement avec Hilary
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ============ ÉTAPE : TÉLÉPHONE (affichage du numéro, desktop) ============ */}
        {step === "phone" && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => setStep("channel")}
              className="text-sm text-graywarm hover:text-primary mb-4 flex items-center justify-center gap-1 mx-auto transition"
            >
              <IconArrowLeft className="w-4 h-4" /> Retour
            </button>
            <span className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <IconPhone className="w-7 h-7" />
            </span>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Appelez directement
            </h3>
            <p className="text-sm text-graywarm mb-5">
              Hilary vous répond ou vous rappelle au plus vite.
            </p>
            <a
              href={`tel:${PHONE_LINK}`}
              className="block text-3xl font-bold text-ink tracking-wide bg-offwhite border border-light rounded-2xl py-4 hover:border-primary transition"
            >
              {PHONE}
            </a>
            <p className="mt-4 text-xs text-graywarm">
              Du lundi au samedi, selon le cabinet (Sèvres / Paris 15).
            </p>
          </div>
        )}

        {/* ============ ÉTAPE : CABINET ============ */}
        {step === "location" && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => setStep("channel")}
              className="text-sm text-graywarm hover:text-primary mb-4 flex items-center justify-center gap-1 mx-auto transition"
            >
              <IconArrowLeft className="w-4 h-4" /> Retour
            </button>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Où souhaitez-vous consulter ?
            </h3>
            <div className="space-y-4">
              {Object.entries(CABINETS).map(([key, cab]) => (
                <button
                  key={key}
                  onClick={() => handleLocationSelect(key)}
                  className="w-full flex flex-col items-center justify-center p-5 border-2 border-light hover:border-doctolib rounded-2xl transition hover:bg-offwhite group"
                >
                  <span className="flex items-center gap-2 text-lg font-bold text-ink group-hover:text-doctolib transition">
                    <IconMapPin className="w-5 h-5" /> {cab.label}
                  </span>
                  <span className="text-sm font-normal text-graywarm mt-1">
                    {cab.address}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ============ ÉTAPE : SOIN ============ */}
        {step === "service" && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => setStep("location")}
              className="text-sm text-graywarm hover:text-primary mb-4 flex items-center justify-center gap-1 mx-auto transition"
            >
              <IconArrowLeft className="w-4 h-4" /> Changer de cabinet
            </button>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Pour quel type de soin ?
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => handleServiceSelect("osteo")}
                className="w-full flex items-center justify-center gap-3 p-4 bg-primary text-white rounded-2xl text-lg font-semibold shadow-md hover:bg-primary/90 transition transform hover:-translate-y-1"
              >
                <IconBone className="w-6 h-6" /> Ostéopathie
              </button>
              <button
                onClick={() => handleServiceSelect("drainage")}
                className="w-full flex items-center justify-center gap-3 p-4 bg-cream border border-cream-border text-ink rounded-2xl text-lg font-semibold shadow-sm hover:bg-[#F3ECE7] transition transform hover:-translate-y-1"
              >
                <IconDroplets className="w-6 h-6" /> Drainage Renata França
              </button>
            </div>

            <p className="mt-6 text-xs text-graywarm italic flex items-center justify-center gap-1.5">
              <IconMapPin className="w-3.5 h-3.5" />
              {CABINETS[location]?.label} – {CABINETS[location]?.address}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
