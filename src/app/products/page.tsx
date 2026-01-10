import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/product-components/ProductCard";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products | Virtec",
  description: "Virtec takes pride in manufacturing the best of measuring equipments for HVAC sector. We deliver the best quality products at the best price in the industry.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Our <span className="text-primary-yellow">Products</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Virtec takes pride in manufacturing the best of measuring equipments for HVAC sector. We deliver the best quality products at the best price in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
