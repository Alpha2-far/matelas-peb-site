"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showOptions && (
        <div className="flex flex-col gap-2 mb-2">
          <a
            href="https://wa.me/22967611844?text=Bonjour, je suis intéressé par vos matelas !"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium hover:bg-green-700 transition-all"
          >
            WhatsApp 1
          </a>
          <a
            href="https://wa.me/2290166200120?text=Bonjour, je suis intéressé par vos matelas !"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium hover:bg-green-700 transition-all"
          >
            WhatsApp 2
          </a>
        </div>
      )}
      <button
        onClick={() => setShowOptions(!showOptions)}
        aria-label="Contactez-nous sur WhatsApp"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse-green"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.588c-.394 1.11-1.946 2.032-3.198 2.302-.856.182-1.974.328-5.738-1.234-4.816-1.998-7.916-6.882-8.158-7.2-.232-.318-1.946-2.588-1.946-4.938 0-2.348 1.232-3.504 1.67-3.982.394-.432 1.038-.628 1.654-.628.198 0 .376.01.536.018.438.018.658.044.946.734.36.858 1.232 3.004 1.34 3.224.11.218.218.516.068.814-.14.306-.264.442-.482.692-.218.25-.426.442-.644.71-.198.232-.422.482-.176.92.246.432 1.094 1.8 2.35 2.916 1.614 1.432 2.974 1.878 3.396 2.086.422.208.668.176.914-.108.254-.29 1.082-1.264 1.372-1.698.284-.432.57-.36.96-.216.394.14 2.494 1.176 2.92 1.39.426.218.71.324.814.504.108.178.108 1.04-.286 2.148z"/>
        </svg>
      </button>
    </div>
  );
}
