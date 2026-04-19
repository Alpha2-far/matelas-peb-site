"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://matelaspebbenin.com/wp-content/uploads/elementor/thumbs/photo_2025-08-26_19-42-28-rau74jvggvlrjck3mqr9i50q3sbchye8jjaxs1eq84.jpg",
    alt: "Matelas PEB exposition",
  },
  {
    url: "https://matelaspebbenin.com/wp-content/uploads/elementor/thumbs/photo_2025-08-26_19-42-20-rau74ixma1kh7qlgs8cmxn99iefza9ai7engarg4ec.jpg",
    alt: "Matelas PEB confort",
  },
  {
    url: "https://matelaspebbenin.com/wp-content/uploads/elementor/thumbs/311172749_205229695213418_3367851764060428532_n-qmgnb4wz0889oy4ngpxl3p6mk3y2trqb8dcumlhgzo.jpg",
    alt: "Matelas PEB livraison",
  },
  {
    url: "https://matelaspebbenin.com/wp-content/uploads/elementor/thumbs/342217961_187342964113259_2056363829639776712_n-qmgnb8obrkdezdz6urk3do8gxnfjok58kvysjpbwas.jpg",
    alt: "Matelas PEB stock",
  },
  {
    url: "https://matelaspebbenin.com/wp-content/uploads/elementor/thumbs/photo_2025-08-26_19-42-11-rau74hzs37j6w4mtxpy0d5hsx0km2k6rv9zythhikk.jpg",
    alt: "Matelas PEB showroom",
  },
  {
    url: "https://boutiquematelaspeb.bj/wp-content/uploads/2025/06/WhatsApp-Image-2025-09-20-at-16.10.03-769x1024.jpeg",
    alt: "Matelas PEB emballage",
  },
  {
    url: "https://boutiquematelaspeb.bj/wp-content/uploads/2025/06/mat5.webp",
    alt: "Matelas PEB premium",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
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
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">Découvrez notre univers</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Galerie Matelas PEB
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez notre section portfolio pour plonger dans l&apos;univers captivant des matelas PEB.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Container */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-white group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].url}
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
                className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md text-indigo-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white active:scale-90"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md text-indigo-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white active:scale-90"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-indigo-600 w-8" 
                    : "bg-gray-300 hover:bg-indigo-300"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
