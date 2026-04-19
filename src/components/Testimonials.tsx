"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    name: "Marie K.",
    location: "Cotonou",
    rating: 5,
    text: "Excellent matelas ! Je dors tellement mieux depuis que j'ai acheté le modèle mémoire de forme. La livraison a été rapide et le service client est au top.",
  },
  {
    name: "Jean P.",
    location: "Porto-Novo",
    rating: 5,
    text: "J'ai hésité longtemps mais je ne regrette pas mon achat. Le matelas orthopédique a soulagé mes douleurs de dos. Je recommande vivement !",
  },
  {
    name: "Aminata S.",
    location: "Parakou",
    rating: 5,
    text: "Paiement à la livraison, très professionnel. Le matelas est de qualité supérieure. Mes enfants adorent aussi leur nouveau lit.",
  },
  {
    name: "Paul D.",
    location: "Abomey-Calavi",
    rating: 5,
    text: "Deuxième achat chez Matelas PEB. Toujours aussi satisfait. Le rapport qualité-prix est imbattable au Bénin.",
  },
  {
    name: "Koffi A.",
    location: "Bohicon",
    rating: 5,
    text: "La qualité de la mousse est impressionnante. Après 6 mois d'utilisation, le matelas n'a pas bougé d'un centimètre. Bravo !",
  },
  {
    name: "Sènami V.",
    location: "Ouidah",
    rating: 5,
    text: "Enfin un vrai matelas confortable disponible localement. Fini les soucis de dos au réveil. Merci Matelas PEB !",
  },
  {
    name: "Femi O.",
    location: "Natitingou",
    rating: 5,
    text: "Livré jusque dans le nord sans problème. Le service est sérieux et le produit est conforme à mes attentes. Très durable.",
  },
  {
    name: "Latifa M.",
    location: "Djougou",
    rating: 5,
    text: "Le matelas super ordinaire est une merveille. Doux au toucher et ferme comme il faut. Je conseille à tout le monde.",
  },
  {
    name: "Rachid T.",
    location: "Lokossa",
    rating: 5,
    text: "Excellent accueil téléphonique et conseils avisés. J'ai pris le modèle médical et je sens déjà la différence sur mon sommeil.",
  },
  {
    name: "Gildas H.",
    location: "Cotonou",
    rating: 5,
    text: "Rapide, efficace et produit de luxe. C'est le meilleur investissement que j'ai fait pour ma maison cette année.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 bg-indigo-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">Témoignages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Plus de 1000 clients satisfaits à travers tout le Bénin nous font confiance.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto px-4">
          <div className="relative min-h-[380px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-indigo-100 border border-indigo-100/50 cursor-grab active:cursor-grabbing relative"
              >
                <div className="absolute top-8 right-8 text-indigo-100">
                  <Quote size={64} />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl text-gray-800 mb-8 leading-relaxed font-medium relative z-10 italic">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-indigo-600 font-medium">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-indigo-600 shadow-xl border border-gray-100 hover:bg-indigo-600 hover:text-white transition-all z-10 active:scale-90"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-indigo-600 shadow-xl border border-gray-100 hover:bg-indigo-600 hover:text-white transition-all z-10 active:scale-90"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-indigo-600 w-10" 
                    : "bg-indigo-200 hover:bg-indigo-400 font-bold"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
