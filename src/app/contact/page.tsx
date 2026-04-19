import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact - Matelas PEB | WhatsApp +229 67 61 18 44",
  description:
    "Contactez Matelas PEB pour toute commande ou question. WhatsApp: +229 67 61 18 44 / +229 01 66 20 01 20. Téléphone: +229 01 67 61 18 44. Livraison gratuite partout au Bénin.",
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-green-500 flex-shrink-0">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-indigo-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Contactez-nous
            </h1>
            <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
              Nous sommes là pour vous aider. Contactez-nous par WhatsApp ou téléphone
              pour commander votre matelas.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/22967611844"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-500 hover:border-green-600 hover:shadow-xl transition-all text-center group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#22C55E">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h2>
                <p className="text-gray-600 text-sm mb-2">Réponse rapide</p>
                <div className="text-green-600 font-bold text-lg">+229 67 61 18 44</div>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/2290166200120"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-500 hover:border-green-600 hover:shadow-xl transition-all text-center group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#22C55E">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">WhatsApp 2</h2>
                <p className="text-gray-600 text-sm mb-2">Second contact</p>
                <div className="text-green-600 font-bold text-lg">+229 01 66 20 01 20</div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2290167611844"
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-500 hover:border-indigo-600 hover:shadow-xl transition-all text-center group"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Téléphone</h2>
                <p className="text-gray-600 text-sm mb-2">Lun-Sam : 8h-18h</p>
                <div className="text-indigo-600 font-bold text-lg">+229 01 67 61 18 44</div>
              </a>
            </div>

            {/* Info section */}
            <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre zone de livraison</h2>
                  <p className="text-gray-600 mb-6">
                    Nous sommes basés à Cotonou et livrons dans tout le Bénin.
                    Notre service de livraison couvre toutes les villes du pays.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium text-gray-900">Cotonou, Bénin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13" rx="1"/>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                          <circle cx="5.5" cy="18.5" r="2.5"/>
                          <circle cx="18.5" cy="18.5" r="2.5"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium text-gray-900">Livraison gratuite</p>
                        <p className="text-gray-600">Partout au Bénin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium text-gray-900">Horaires</p>
                        <p className="text-gray-600">Lundi - Samedi : 8h00 - 18h00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                  <div className="text-xl font-bold text-indigo-900 mb-4">Livraison dans tout le Bénin</div>
                  <ul className="text-gray-600 text-left space-y-3 mt-4">
                    <li className="flex items-center gap-2"><CheckIcon /> Cotonou</li>
                    <li className="flex items-center gap-2"><CheckIcon /> Porto-Novo</li>
                    <li className="flex items-center gap-2"><CheckIcon /> Parakou</li>
                    <li className="flex items-center gap-2"><CheckIcon /> Bohicon</li>
                    <li className="flex items-center gap-2"><CheckIcon /> Natitingou</li>
                    <li className="flex items-center gap-2"><CheckIcon /> Et toutes les autres villes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
