import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Products />
        <Gallery />
        <Testimonials />
        <CTA />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
