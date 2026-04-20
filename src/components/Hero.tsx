"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Darker Overlay for better contrast */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://dxm.dam.cofel.fr/api/wedia/dam/transform/qj4kecufsui9gig4x91k1tb5jw/out?t=resize&uuid=qj4kecufsui9gig4x91k1tb5jw&type=image&width=1920&height=1080"
          alt="Matelas premium dans une chambre élégante"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20 sm:py-0">
        <div className={`transition-all duration-700 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="text-indigo-300 font-semibold tracking-widest uppercase mb-3 sm:mb-4 block text-xs sm:text-sm">
            Votre partenaire confort au Bénin
          </span>
          <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Des matelas premium pour votre bien-être
          </h1>
        </div>

        <div className={`transition-all duration-700 delay-300 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Livraison gratuite à Cotonou, Porto-Novo et partout au Bénin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/produits"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Découvrir la gamme
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
