'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artworks from '@/data/artworks';

export default function Shop() {
  const available = artworks.filter((art) => art.available);

  return (
    <main className="min-h-screen bg-white">
      <Navbar active="shop" />

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Shop</h2>
        <p className="text-center text-gray-400 mb-10">Own a piece of original art</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {available.map((product) => (
            <div key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-contain bg-gray-50"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg">{product.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{product.medium}</p>
                <button className="mt-3 w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition font-medium text-sm">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 bg-rose-50 text-center">
        <h2 className="text-2xl font-bold mb-3">Want something custom?</h2>
        <p className="text-gray-400 mb-6">Commission a painting made just for you</p>
        <a href="/contact"
          className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition font-medium inline-block">
          Request a Commission
        </a>
      </section>

      <Footer />
    </main>
  );
}