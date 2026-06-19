'use client';
import Link from 'next/link';

const artworks = [
  { id: 1, title: "Oasis", medium: "Oil on Canvas", price: 35000, image: "/images/art1.jpg" },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold tracking-tight">Isabel Monserrat  ♥</Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/gallery" className="text-rose-500">Gallery</Link>
          <Link href="/shop" className="hover:text-rose-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="hover:text-rose-500 transition">Contact</Link>
        </div>
      </nav>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery</h2>
        <p className="text-center text-gray-400 mb-10">A collection of original works</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {artworks.map((art) => (
            <div key={art.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg">{art.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{art.medium}</p>
                <p className="text-rose-500 font-bold mt-1 text-sm md:text-base">₱{art.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <p className="font-semibold text-gray-600 mb-1">Isabel Monserrat  ♥</p>
        <p>© 2026 Isabel Monserrat. All rights reserved.</p>
      </footer>
    </main>
  );
}