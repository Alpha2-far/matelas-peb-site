import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "À Propos - Matelas PEB | Votre Expert Matelas au Bénin",
  description:
    "Découvrez Matelas PEB, votre spécialiste matelas au Bénin depuis plusieurs années. Qualité premium et service client exceptionnel.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-indigo-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              À propos de Matelas PEB
            </h1>
            <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
              Votre expert en matelas premium au Bénin depuis plusieurs années.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section id="histoire" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-indigo-600 font-semibold tracking-wide uppercase">
                  Notre Histoire
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 mb-4">
                  Une passion pour le sommeil de qualité
                </h2>
                <div className="prose text-gray-600 space-y-4">
                  <p>
                    Matelas PEB est né d&apos;une observation simple : au Bénin, il
                    était difficile de trouver des matelas de qualité à des prix
                    abordables. Beaucoup de gens dormaient sur des matelas
                    inconfortables qui nuisaient à leur santé.
                  </p>
                  <p>
                    C&apos;est ainsi qu&apos;est née l&apos;idée de créer une entreprise qui
                    mettrait à disposition des matelas premium, fabriqués avec les
                    meilleures technologies, mais accessibles à tous.
                  </p>
                  <p>
                    Aujourd&apos;hui, nous avons accompagné plus de 1000 familles
                    béninoises dans leur quête d&apos;un sommeil réparateur. Notre
                    mission reste inchangée : offrir le meilleur du confort à
                    chaque Béninois.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl aspect-square overflow-hidden shadow-lg">
                <Image
                  src="https://matelaspebbenin.com/wp-content/uploads/2024/04/311172749_205229695213418_3367851764060428532_n.jpg"
                  alt="Boutique et équipe Matelas PEB"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="valeurs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold tracking-wide uppercase">
                Nos Valeurs
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Ce qui nous guide chaque jour
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-bold">01</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Qualité Premium
                </h3>
                <p className="text-gray-600">
                  Nous ne compromettons jamais sur la qualité. Chaque matelas est
                  fabriqué avec les meilleurs matériaux et contrôlé
                  rigoureusement.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-bold">02</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Service Client
                </h3>
                <p className="text-gray-600">
                  Notre équipe est disponible 7j/7 pour vous conseiller et
                  répondre à vos questions. Votre satisfaction est notre priorité.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-bold">03</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Confiance
                </h3>
                <p className="text-gray-600">
                  Paiement à la livraison, satisfaction client, retour possible sous
                  30 jours. Nous construisons la confiance par des actions
                  concrètes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">4</div>
                <div className="text-gray-600">Modèles disponibles</div>
              </div>
              <div>
                <div className="text-indigo-600 font-bold text-xl uppercase tracking-wider">Qualité</div>
                <div className="text-gray-600">Mousse haute densité</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
                <div className="text-gray-600">Départements livrés</div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
