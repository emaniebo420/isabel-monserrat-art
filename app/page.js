import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <span className="text-2xl font-bold tracking-tight">Isabel Monserrat's Art ✦</span>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/gallery" className="hover:text-rose-500 transition">Gallery</Link>
          <Link href="/shop" className="hover:text-rose-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="hover:text-rose-500 transition">Contact</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-rose-50">
        <h1 className="text-5xl font-bold mb-4">Art That Speaks to the Soul</h1>
        <p className="text-lg text-gray-500 mb-8">Original paintings, prints & commissions by Isabel Monserrat</p>
        <div className="flex gap-4">
          <Link href="/gallery" className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition">
            View Gallery
          </Link>
          <Link href="/shop" className="border border-rose-500 text-rose-500 px-6 py-3 rounded-full hover:bg-rose-50 transition">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}