"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Nos Matelas", href: "/produits" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyles = isScrolled
    ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
    : isHomePage
    ? "bg-transparent border-transparent py-5"
    : "bg-white border-b border-gray-100 py-5";

  const textColor = isScrolled || !isHomePage
    ? "text-gray-900"
    : "text-white";

  const navLinkColor = isScrolled || !isHomePage
    ? "text-gray-700 hover:text-indigo-600"
    : "text-white/80 hover:text-white";

  // Global header visible everywhere
  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerStyles}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 20C4 18 6 14 16 14C26 14 28 18 28 20V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V20Z"/>
                  <rect x="2" y="24" width="28" height="4" rx="1" fill="white" opacity="0.7"/>
                  <ellipse cx="16" cy="14" rx="12" ry="3" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <span className={`text-xl font-bold transition-colors ${textColor}`}>
                MATELAS <span className={isScrolled || !isHomePage ? "text-indigo-600" : "text-indigo-300"}>PEB</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? "text-indigo-600"
                    : navLinkColor
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Commander
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage 
                  ? "text-gray-700 hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-4 px-4 rounded-xl transition-all duration-200 ${
                    pathname === item.href
                      ? "text-indigo-600 bg-indigo-50 shadow-sm"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-5 py-4 rounded-xl font-bold text-center shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Commander
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
