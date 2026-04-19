import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Matelas PEB 1 place",
    description: "Confort exceptionnel pour une nuit de sommeil paisible. Matelas PEB une place, parfait pour tous.",
    slug: "matelas-1-place",
  },
  {
    id: 2,
    name: "Matelas PEB 2 places",
    description: "Duo parfait pour des nuits douces. Matelas PEB deux places, pour un sommeil réparateur.",
    slug: "matelas-2-places",
  },
  {
    id: 3,
    name: "Matelas PEB 3 places",
    description: "Confort pour toute la famille. Matelas PEB trois places, pour des nuits paisibles et revitalisantes.",
    slug: "matelas-3-places",
  },
  {
    id: 5,
    name: "Matelas PEB Super Ordinaire",
    description: "Confort de qualité exceptionnelle. Matelas PEB Super Ordinaire, pour des nuits paisibles et reposantes.",
    slug: "matelas-super-ordinaire",
  },
  {
    id: 4,
    name: "Matelas PEB Semi Dur",
    description: "Confort soutenu pour un sommeil de qualité. Matelas PEB semi-dur, pour des nuits apaisantes.",
    slug: "matelas-semi-dur",
  },
  {
    id: 6,
    name: "Matelas PEB dur médical",
    description: "Soutien ferme pour un sommeil réparateur. Matelas PEB dur médical, pour un repos optimal.",
    slug: "matelas-dur-medical",
  },
];

interface ProductsProps {
  showTitle?: boolean;
  showLink?: boolean;
}

export default function Products({ showTitle = true }: ProductsProps) {
  // If showTitle is false, we might be on a page where we don't want to show this component at all,
  // or we just want the right grid. Given the new layout, it's a strongly integrated single block.
  // We'll keep the whole section together.
  if (!showTitle) return null;

  return (
    <section className="py-24 bg-white" id="produits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Image */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-16 h-1.5 bg-[rgb(218,165,32)] mb-6"></div>
            <h2 className="text-4xl font-bold text-indigo-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Nos gammes de produits
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Explorez notre vaste gamme de matelas conçus pour répondre à tous
              vos besoins en matière de sommeil.
            </p>
            
            <div className="relative mt-auto w-full max-w-sm">
              {/* Golden offset box */}
              <div className="absolute top-6 left-6 w-full h-full bg-[rgb(218,165,32)]/80 -z-10"></div>
              {/* Image */}
              <div className="bg-gray-200 aspect-[4/3] w-full overflow-hidden shadow-sm">
                <img 
                  src="https://matelaspebbenin.com/wp-content/uploads/2024/04/Oreillers2-1140x641-1.jpg" 
                  alt="Lits et Matelas PEB" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Products Text Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {products.map((product) => (
              <Link 
                href={`/produits#${product.slug}`} 
                key={product.id}
                className="group block"
              >
                <div className="h-full border-l-2 border-transparent pl-4 transition-all duration-300 group-hover:border-indigo-600 group-hover:pl-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
