import Link from 'next/link';

const artworks = [
  { id: 1, title: "Sunset in Tagaytay", medium: "Oil on Canvas", price: 3500 },
  { id: 2, title: "Morning Bloom", medium: "Watercolor", price: 2800 },
  { id: 3, title: "Silent Waters", medium: "Acrylic", price: 4200 },
  { id: 4, title: "Golden Hour", medium: "Oil on Canvas", price: 5000 },
  { id: 5, title: "Wildflowers", medium: "Watercolor", price: 2200 },
  { id: 6, title: "Midnight Sky", medium: "Acrylic", price: 3800 },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link href="/" className="text-2xl font-bold tracking-tight">Isabel Monserrat's Art ✦</Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/gallery" className="text-rose-500">Gallery</Link>
          <Link href="/shop" className="hover:text-rose-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="hover:text-rose-500 transition">Contact</Link>
        </div>
      </nav>

      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
        <p className="text-center text-gray-400 mb-12">A collection of original works</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artworks.map((art) => (
            <div key={art.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="w-full h-64 bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition">
                <span className="text-rose-300 text-5xl">🎨</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{art.title}</h3>
                <p className="text-gray-400 text-sm">{art.medium}</p>
                <p className="text-rose-500 font-bold mt-1">₱{art.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}