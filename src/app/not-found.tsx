import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </main>
  );
}
