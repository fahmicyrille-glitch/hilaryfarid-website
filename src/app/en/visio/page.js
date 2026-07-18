import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";

export default function VisioEnPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAFA] to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-offwhite/10 border border-offwhite/20 text-xs tracking-widest uppercase mb-6">
            New remote service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Hilary's expertise, <br />
            <span className="text-light italic font-light">wherever you are.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-offwhite/80 max-w-2xl mx-auto font-light leading-relaxed">
            Can't make it in person? A 30-minute video session to assess your posture, understand your pain and learn the right movements.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <SlideUp>
            <div className="space-y-10 pt-10">
              <div>
                <h2 className="text-3xl font-semibold text-primary">Why choose a video consultation?</h2>
                <p className="mt-4 text-graywarm text-lg leading-relaxed">
                  This isn't a hands-on manipulation session, but an expert <strong>advice session</strong> dedicated to your everyday comfort. Ideal in the following cases:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 border border-graywarm/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4EBE1] text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Post-partum & Breastfeeding</h3>
                  <p className="text-sm text-graywarm leading-relaxed">
                    Advice on babywearing, breastfeeding positions and gentle recovery exercises, without leaving home.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 border border-graywarm/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4EBE1] text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Remote Work & Ergonomics</h3>
                  <p className="text-sm text-graywarm leading-relaxed">
                    Live assessment of your workstation via webcam to relieve pain (neck, lower back).
                  </p>
                </div>

                {/* Card 3 */}
                <div className="sm:col-span-2 group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 border border-graywarm/10 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#F4EBE1] text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Acute Pain &amp; Muscle Spasm</h3>
                    <p className="text-sm text-graywarm leading-relaxed">
                      While waiting for an in-person appointment, learn targeted self-massage and stretching techniques to ease acute pain.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== EXPERTISE BLOCK (MAGAZINE DESIGN) ===== */}
              <div className="mt-12 bg-white border border-secondary/20 rounded-3xl overflow-hidden shadow-lg flex flex-col sm:flex-row">

                {/* Large photo on the left (or on top on mobile) */}
                <div className="relative w-full sm:w-2/5 h-64 sm:h-auto">
                  <Image
                    src="/cabinet-sevres/hilary-sevres.webp"
                    alt="Hilary Farid, Osteopath D.O."
                    fill
                    className="object-cover object-[70%_20%]"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>

                {/* Text content on the right */}
                <div className="p-8 sm:p-10 sm:w-3/5 relative z-10 bg-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                  <h3 className="text-2xl font-semibold text-primary mb-4 relative z-10 flex items-center gap-3">
                    <svg className="w-7 h-7 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Certified Expertise
                  </h3>

                  <p className="text-sm text-graywarm mb-6 relative z-10 leading-relaxed">
                    Your sessions draw on specific postgraduate training to ensure safe care for you and your baby:
                  </p>

                  <ul className="space-y-5 relative z-10">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-0.5">✓</span>
                      <div>
                        <span className="block font-semibold text-primary text-sm">Suckling Disorders & Breastfeeding (2024)</span>
                        <span className="block text-xs text-graywarm mt-0.5 leading-relaxed">Management of restrictive oral ties and jaw disorders (Centre YGY).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-0.5">✓</span>
                      <div>
                        <span className="block font-semibold text-primary text-sm">Paediatrics &amp; Infants (2023)</span>
                        <span className="block text-xs text-graywarm mt-0.5 leading-relaxed">Specialisation in colic, reflux and asymmetries (Centre YGY).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-0.5">✓</span>
                      <div>
                        <span className="block font-semibold text-primary text-sm">Pregnancy & Post-partum (2025)</span>
                        <span className="block text-xs text-graywarm mt-0.5 leading-relaxed">Mobility, lower back pain and pelvic comfort (CFPCO).</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* ===== END EXPERTISE BLOCK ===== */}
            </div>
          </SlideUp>

          {/* ================= RIGHT COLUMN (STICKY PRICE CARD) ================= */}
          <div className="sticky top-28 z-30 pt-10 lg:pt-0">
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-light/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <span className="inline-block bg-[#F4EBE1] text-secondary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide mb-3">
                        Digital Session
                      </span>
                      <h3 className="text-2xl font-semibold text-primary">Video Consultation</h3>
                    </div>
                    <span className="text-4xl md:text-5xl font-bold text-primary">€40</span>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-graywarm/20 via-graywarm/20 to-transparent mb-8" />

                  <ul className="space-y-5 text-graywarm">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-base"><strong>30 minutes</strong> one-on-one video session.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-base">Personalised <strong>visual analysis and assessment</strong>.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-base">Learn <strong>self-relief techniques</strong>.</span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="trigger-booking-modal mt-10 flex items-center justify-center w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(189,146,116,0.3)] hover:shadow-[0_15px_25px_rgba(189,146,116,0.4)] hover:-translate-y-1 transition-all duration-300"
                  >
                    Book my slot
                  </button>

                  <div className="mt-6 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-xs text-graywarm font-medium">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      100% secure payment via Stripe
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </main>
  );
}
