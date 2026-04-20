import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Matelas PEB",
  description:
    "Politique de confidentialité de Matelas PEB. Protection de vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <main className="pt-8">
        <section className="bg-indigo-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Politique de Confidentialité</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h2>Collecte des données</h2>
            <p>
              Matelas PEB collecte uniquement les données nécessaires au traitement de vos
commandes : nom, prénom, adresse de livraison, numéro de téléphone. Ces
informations sont utilisées uniquement pour vous contacter concernant votre commande.
            </p>

            <h2>Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul>
              <li>Traiter vos commandes</li>
              <li>Vous contacter concernant la livraison</li>
              <li>Gérer la garantie de vos produits</li>
            </ul>

            <h2>Protection des données</h2>
            <p>
              Vos données sont stockées de manière sécurisée et ne sont jamais transmises à
des tiers. Nous ne vendons ni ne louons vos informations personnelles.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément à la loi, vous disposez d&apos;un droit d&apos;accès, de modification et de
suppression de vos données. Pour exercer ces droits, contactez-nous via WhatsApp
au +229 67 61 18 44 ou au +229 01 66 20 01 20.
            </p>

            <h2>Cookies</h2>
            <p>
              Notre site utilise des cookies techniques pour son bon fonctionnement. Aucun
cookie publicitaire n&apos;est utilisé.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
