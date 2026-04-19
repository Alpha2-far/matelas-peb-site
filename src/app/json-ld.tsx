export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Matelas PEB",
    url: "https://matelaspeb-bj.com",
    logo: "https://matelaspeb-bj.com/logo.png",
    description:
      "Vente de matelas premium au Bénin. Livraison gratuite partout au pays.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+229-XX-XX-XX-XX",
      contactType: "customer service",
      availableLanguage: ["French"],
    },
    sameAs: [],
    telephone: "+229-67-61-18-44,+229-01-66-20-01-20",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Matelas PEB",
    image: "https://matelaspeb-bj.com/og-image.jpg",
    "@id": "https://matelaspeb-bj.com",
    url: "https://matelaspeb-bj.com",
    telephone: "+229-XX-XX-XX-XX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cotonou",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.3703,
      longitude: 2.3912,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Bénin",
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Matelas Premium Matelas PEB",
    image: "https://matelaspeb-bj.com/og-image.jpg",
    description:
      "Matelas premium de qualité supérieure disponible au Bénin. Plusieurs modèles disponibles.",
    brand: {
      "@type": "Brand",
      name: "Matelas PEB",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "45000",
      highPrice: "150000",
      priceCurrency: "XOF",
      availability: "https://schema.org/InStock",
      url: "https://matelaspeb-bj.com/produits",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
