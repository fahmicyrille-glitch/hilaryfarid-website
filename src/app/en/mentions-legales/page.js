// src/app/en/mentions-legales/page.js
"use client";

import { FadeIn } from "@/components/MotionWrapper";

export default function MentionsLegalesEnPage() {
  return (
    <main className="bg-offwhite min-h-screen py-16 md:py-24 px-6 text-graywarm leading-relaxed">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-primary">
            Legal Notice
          </h1>
          <p className="mt-4 text-graywarm">
            Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-light p-8 md:p-14">
          <section className="space-y-8 text-base">
            <p>
              This is a courtesy English translation. The French version remains
              the legally binding reference and French law governs this website.
              In accordance with French law n°2004-575 of 21 June 2004 for
              confidence in the digital economy, users of the site are informed
              of the identity of the various parties involved in its creation
              and its ongoing management.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                1. Website Publisher
              </h2>
              <p>
                <strong>Hilary Farid</strong><br />
                Osteopath D.O.<br />
                Phone: <a href="tel:+33672014539" className="text-doctolib font-medium hover:underline underline-offset-4">06 72 01 45 39</a><br />
                Email: <a href="mailto:hilaryfarid.osteopathe@gmail.com" className="text-doctolib font-medium hover:underline underline-offset-4">hilaryfarid.osteopathe@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                2. Clinics
              </h2>
              <p>
                <strong>Paris 15 clinic:</strong> 28 rue Letellier – 75015 Paris<br />
                <strong>Sèvres clinic:</strong> 104 Grande Rue – 92310 Sèvres
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                3. Hosting
              </h2>
              <p>
                The site is hosted by:<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723 – United States<br />
                Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-doctolib font-medium hover:underline underline-offset-4">https://vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                4. Intellectual Property
              </h2>
              <p>
                The site and each of the elements composing it (text, images,
                graphics, logo, structure, etc.) are protected by intellectual
                property law. Any reproduction, representation or adaptation,
                in whole or in part, without prior written authorisation is
                strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                5. Liability
              </h2>
              <p>
                The information provided on this site is for informational
                purposes only and does not, under any circumstances, replace
                medical advice. Osteopathy is a complementary, non-invasive manual therapy for
                wellness and prevention.
              </p>
            </div>
          </section>
        </div>
      </FadeIn>
    </main>
  );
}
