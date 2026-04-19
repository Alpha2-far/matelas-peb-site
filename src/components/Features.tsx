const features = [
  {
    number: "01",
    title: "Livraison Gratuite",
    description: "Livraison gratuite partout au Bénin. Cotonou, Porto-Novo, Parakou et toutes les villes.",
  },
  {
    number: "02",
    title: "Paiement à la Livraison",
    description: "Payez uniquement lorsque vous recevez votre matelas. Aucun risque pour vous.",
  },
  {
    number: "03",
    title: "Qualité Premium",
    description: "Mousse haute densité, ressorts ensachés, tissus antibactériens de qualité.",
  },
  {
    number: "04",
    title: "Confort Optimal",
    description: "Conçus pour un sommeil réparateur. Soutien optimal pour votre dos.",
  },
  {
    number: "05",
    title: "Service Client 7j/7",
    description: "Notre équipe est disponible tous les jours pour vous conseiller et répondre à vos questions.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">Pourquoi nous choisir</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            La meilleure expérience d&apos;achat de matelas au Bénin
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Des milliers de clients satisfaits nous font confiance pour leur confort nocturne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-sm">{feature.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
