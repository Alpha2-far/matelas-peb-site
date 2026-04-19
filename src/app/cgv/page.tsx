import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Matelas PEB",
  description:
    "Conditions générales de vente de Matelas PEB. Livraison, paiement, garantie et politique de retour.",
};

export default function CGVPage() {
  return (
    <>
      <main className="pt-8">
        <section className="bg-indigo-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Conditions Générales de Vente</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h2>1. Commandes</h2>
            <p>
              Les commandes peuvent être passées par WhatsApp au +229 67 61 18 44 ou par
téléphone au +229 01 67 61 18 44. Une commande est ferme après confirmation par
notre équipe.
            </p>

            <h2>2. Prix et Paiement</h2>
            <p>
              Les prix sont indiqués en Francs CFA (FCFA) et sont susceptibles de modification
sans préavis. Le paiement s'effectue à la livraison en espèces ou par Mobile Money
(MTN Mobile Money, Moov Money).
            </p>

            <h2>3. Livraison</h2>
            <p>
              La livraison est gratuite partout au Bénin. Les délais sont de 24-48h à Cotonou
et de 2-5 jours pour les autres villes. Le client doit vérifier l'état du matelas à la
réception.
            </p>

            <h2>4. Garantie</h2>
            <p>
              Nos matelas sont garantis contre tout défaut de fabrication : 5 ans pour les
modèles standard, 10 ans pour les modèles Super Ordinaire et Dur Médical. La
garantie ne couvre pas l'usure normale ni les dommages dus à une mauvaise
utilisation.
            </p>

            <h2>5. Rétractation et Retour</h2>
            <p>
              Le client dispose d'un délai de 7 jours à compter de la livraison pour signaler
tout défaut. Le retour ou échange est possible uniquement en cas de défaut de
fabrication constaté.
            </p>

            <h2>6. Responsabilité</h2>
            <p>
              Matelas PEB ne pourra être tenu responsable des retards de livraison dus à des
circonstances indépendantes de sa volonté (conditions météorologiques, problèmes
de transport, etc.).
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
