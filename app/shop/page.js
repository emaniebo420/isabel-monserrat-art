'use client';
import Link from 'next/link';

const products = [
  { id: 1, title: "Oasis", medium: "Oil on Canvas", price: 35000, image: "/images/art1.jpg", available: true },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold tracking-tight">Isabel Monserrat  ♥</Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/gallery" className="hover:text-rose-500 transition">Gallery</Link>
          <Link href="/shop" className="text-rose-500">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="hover:text-rose-500 transition">Contact</Link>
        </div>
      </nav>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Shop</h2>
        <p className="text-center text-gray-400 mb-10">Own a piece of original art</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg">{product.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{product.medium}</p>
                {product.available ? (
                  <button className="mt-3 w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition font-medium text-sm">
                    Buy Now
                  </button>
                ) : (
                  <button className="mt-3 w-full bg-gray-200 text-gray-400 py-2 rounded-full cursor-not-allowed font-medium text-sm" disabled>
                    Sold Out
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 bg-rose-50 text-center">
        <h2 className="text-2xl font-bold mb-3">Want something custom?</h2>
        <p className="text-gray-400 mb-6">Commission a painting made just for you</p>
        <Link href="/contact" className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition font-medium inline-block">
          Request a Commission
        </Link>
      </section>

      <footer className="px-6 py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <p className="font-semibold text-gray-600 mb-1">Isabel Monserrat  ♥</p>
        <p>© 2026 Isabel Monserrat. All rights reserved.</p>
      </footer>
    </main>
  );
}