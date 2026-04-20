"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quelles sont les dimensions disponibles pour le matelas PEB 1 Place ?",
    answer:
      "Le matelas PEB 1 Place est disponible en taille 90 cm x 190 cm. C'est idéal pour les chambres d'enfants, les dortoirs ou les espaces restreints. Avec sa taille compacte, il offre un confort exceptionnel pour une nuit de sommeil reposante.",
  },
  {
    question: "Quelles sont les dimensions du matelas PEB 2 Places ?",
    answer:
      "Le matelas PEB 2 Places est disponible en taille 140 cm x 190 cm. C'est un choix populaire pour les couples ou les personnes recherchant un espace plus généreux pour dormir. Il offre un soutien exceptionnel et un confort supérieur pour une nuit de sommeil réparatrice.",
  },
  {
    question: "Quelles sont les dimensions du matelas PEB 3 Places ?",
    answer:
      "Le matelas PEB 3 Places est disponible en taille 160 cm x 200 cm. Parfait pour les familles ou les personnes qui recherchent un espace généreux pour dormir, ce matelas offre un confort spacieux pour une nuit de sommeil paisible. Il est confortable et résistant.",
  },
  {
    question: "Quels sont les délais de livraison au Bénin ?",
    answer:
      "À Cotonou et environs : livraison sous 24-48h. Pour les autres villes du Bénin (Porto-Novo, Parakou, Bohicon, etc.) : livraison sous 2-5 jours ouvrables. La livraison est gratuite partout au Bénin.",
  },
  {
    question: "Quelle est la garantie des matelas PEB ?",
    answer:
      "Tous nos matelas sont garantis. Les modèles standard ont une garantie de 5 ans. Les modèles Super Ordinaire et Dur Médical ont une garantie de 10 ans contre tout défaut de fabrication.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons le paiement à la livraison (espèces ou Mobile Money comme MTN Mobile Money, Moov Money). Vous ne payez qu'après avoir reçu et vérifié votre matelas.",
  },
  {
    question: "Livrez-vous dans tout le Bénin ?",
    answer:
      "Oui ! Nous livrons dans toutes les villes du Bénin : Cotonou, Porto-Novo, Parakou, Bohicon, Natitingou, Abomey, Lokossa, Ouidah, et tous les autres départements. La livraison est gratuite partout au Bénin.",
  },
  {
    question: "Quelle est la différence entre les modèles Semi-Dur, Super Ordinaire et Dur Médical ?",
    answer:
      "Matelas Semi-Dur : fermeté équilibrée, adapté à tous. Super Ordinaire : matériaux premium, confort supérieur, garantie 10 ans. Dur Médical : fermeté optimale, recommandé pour les problèmes de dos, support orthopédique.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Questions fréquentes</h2>
          <p className="mt-4 text-lg text-gray-600">Tout ce que vous devez savoir sur nos matelas.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span
                  className={`text-indigo-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Vous avez d&apos;autres questions ?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/22967611844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp: +229 67 61 18 44
            </a>
            <a
              href="https://wa.me/2290166200120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp: +229 01 66 20 01 20
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
