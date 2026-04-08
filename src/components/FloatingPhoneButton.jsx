"use client";

export default function FloatingPhoneButton() {
  return (
    <a
      href="tel:+33672014539"
      className="fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0596DE] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#047cbd] md:bottom-8 md:right-24"
      aria-label="Appeler Hilary Farid"
    >
      {/* Icône de téléphone animée */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-20"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 h-6 w-6"
        >
          <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
        </svg>
      </div>
    </a>
  );
}
