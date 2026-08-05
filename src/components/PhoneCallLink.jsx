"use client";

import { PHONE_LINK } from "@/config/contact";

/**
 * Lien d'appel avec suivi. Les pages sont des composants serveur et ne peuvent
 * pas porter de onClick : c'est ce wrapper qui pousse `phone_call_click`,
 * l'événement sur lequel est branchée la conversion Google Ads.
 */
export default function PhoneCallLink({
  className,
  children,
  source = "sticky_mobile_bar",
  "aria-label": ariaLabel,
}) {
  const track = () => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "phone_call_click", source });
  };

  return (
    <a href={`tel:${PHONE_LINK}`} onClick={track} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
