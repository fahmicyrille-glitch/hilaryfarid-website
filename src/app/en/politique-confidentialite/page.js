// src/app/en/politique-confidentialite/page.js

export default function PolitiqueConfidentialiteEnPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 md:py-24 px-6 text-graywarm leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
        Privacy Policy
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">1. Data Collection</h2>
          <p>
            Personal data collected on this site (via the contact form) is used solely for the management of your appointment requests and for communication between the patient and Hilary Farid.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">2. Use of Cookies</h2>
          <p>
            This site uses cookies (Google Analytics, GTM) to analyse traffic and improve the user experience. You can disable these cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">3. Your Rights</h2>
          <p>
            In accordance with the French "Informatique et Libertés" law and the GDPR, you have the right to access, rectify and delete data concerning you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">4. Contact</h2>
          <p>
            For any questions regarding your data, you can contact us by email at: <br />
            <span className="font-medium">contact@hilaryfarid-osteopathe.fr</span>
          </p>
        </section>
      </div>
    </main>
  );
}
