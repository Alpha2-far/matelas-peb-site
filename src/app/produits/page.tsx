import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nos Produits - Matelas PEB | 1 Place, 2 Places, 3 Places, Médical",
  description:
    "Découvrez la gamme complète Matelas PEB au Bénin. Matelas 1 place, 2 places, 3 places, semi-dur, super ordinaire et dur médical. Livraison gratuite partout au Bénin.",
  keywords: [
    "matelas PEB Bénin",
    "matelas 1 place Cotonou",
    "matelas 2 places Bénin",
    "matelas 3 places",
    "matelas médical",
    "matelas semi-dur",
  ],
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-green-500 flex-shrink-0">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const productDetails = [
  {
    id: 4,
    name: "Matelas PEB Super Ordinaire",
    description: "Confort de qualité exceptionnelle. Pour des nuits paisibles et reposantes.",
    features: [
      "Mousse haute densité",
      "Tissu résistant et respirant",
      "Finition soignée",
      "Livraison gratuite",
    ],
    prices: {
      ep15: { p1: 48500, p2: 65500, p3: 85000 },
      ep20: { p1: 68500, p2: 85000, p3: 110000 },
    },
    slug: "matelas-super-ordinaire",
  },
  {
    id: 5,
    name: "Matelas PEB Semi-Dur",
    description: "Confort soutenu pour un sommeil de qualité. Pour des nuits apaisantes.",
    features: [
      "Fermeté équilibrée",
      "Support du dos optimisé",
      "Adapté à tous les dormeurs",
      "Respirabilité maximale",
    ],
    prices: {
      ep15: { p1: 65215, p2: 101440, p3: 130425 },
      ep20: { p1: 86945, p2: 135255, p3: 173900 },
    },
    slug: "matelas-semi-dur",
  },
  {
    id: 6,
    name: "Matelas PEB Dur",
    description: "Soutien ferme pour un sommeil réparateur. Pour un repos optimal.",
    features: [
      "Fermeté optimale",
      "Recommandé pour problèmes de dos",
      "Support orthopédique",
      "Mousse haute densité renforcée",
    ],
    prices: {
      ep15: { p1: 81515, p2: 126800, p3: 163030 },
      ep20: { p1: 108685, p2: 169065, p3: 217370 },
    },
    slug: "matelas-dur",
  },
];

export default function ProduitsPage() {
  return (
    <>
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-indigo-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-indigo-300 font-semibold tracking-wide uppercase">
              Notre Catalogue
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Tous nos matelas Matelas PEB
            </h1>
            <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
              Une gamme complète de matelas de qualité supérieure pour tous les besoins
              et tous les budgets au Bénin.
            </p>
          </div>
        </section>


        {/* Detailed Product Descriptions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Détails de nos modèles</h2>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez les caractéristiques de chaque matelas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {productDetails.map((product) => (
                <div
                  key={product.id}
                  id={product.slug}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>

                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckIcon />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Épaisseur 15cm :</p>
                        <div className="grid grid-cols-3 gap-2 text-sm mb-3">
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">1 Place</div>
                            <div className="font-bold text-indigo-600">{product.prices.ep15.p1.toLocaleString()} FCFA</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">2 Places</div>
                            <div className="font-bold text-indigo-600">{product.prices.ep15.p2.toLocaleString()} FCFA</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">3 Places</div>
                            <div className="font-bold text-indigo-600">{product.prices.ep15.p3.toLocaleString()} FCFA</div>
                          </div>
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mb-2">Épaisseur 20cm :</p>
                        <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">1 Place</div>
                            <div className="font-bold text-indigo-600">{product.prices.ep20.p1.toLocaleString()} FCFA</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">2 Places</div>
                            <div className="font-bold text-indigo-600">{product.prices.ep20.p2.toLocaleString()} FCFA</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-xs text-gray-500">3 Places</div>
                            <div className="font-bold text-indigo-600">{product.prices.ep20.p3.toLocaleString()} FCFA</div>
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/22967611844?text=Bonjour, je suis intéressé par le ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center gap-2 w-full justify-center"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Commander sur WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
