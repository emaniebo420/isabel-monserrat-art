import Link from 'next/link';

const products = [
  { id: 1, title: "Sunset in Cavite", medium: "Oil on Canvas", price: 3500, available: true },
  { id: 2, title: "Morning Bloom", medium: "Watercolor", price: 2800, available: true },
  { id: 3, title: "Silent Waters", medium: "Acrylic", price: 4200, available: false },
  { id: 4, title: "Golden Hour", medium: "Oil on Canvas", price: 5000, available: true },
  { id: 5, title: "Wildflowers", medium: "Watercolor", price: 2200, available: true },
  { id: 6, title: "Midnight Sky", medium: "Acrylic", price: 3800, available: false },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link href="/" className="text-2xl font-bold tracking-tight">Maria's Art ✦</Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/gallery" className="hover:text-rose-500 transition">Gallery</Link>
          <Link href="/shop" className="text-rose-500">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="hover:text-rose-500 transition">Contact</Link>
        </div>
      </nav>

      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Shop</h2>
        <p className="text-center text-gray-400 mb-12">Own a piece of original art</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="w-full h-64 bg-rose-100 flex items-center justify-center">
                <span className="text-rose-300 text-5xl">🎨</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-400 text-sm">{product.medium}</p>
                <p className="text-rose-500 font-bold text-lg mt-1">₱{product.price.toLocaleString()}</p>
                {product.available ? (
                  <button className="mt-3 w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition font-medium">
                    Buy Now
                  </button>
                ) : (
                  <button className="mt-3 w-full bg-gray-200 text-gray-400 py-2 rounded-full cursor-not-allowed font-medium" disabled>
                    Sold Out
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}