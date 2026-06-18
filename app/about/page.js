import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link href="/" className="text-2xl font-bold tracking-tight">Isabel Monserrat's Art ✦</Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/gallery" className="hover:text-rose-500 transition">Gallery</Link>
          <Link href="/shop" className="hover:text-rose-500 transition">Shop</Link>
          <Link href="/about" className="text-rose-500">About</Link>
          <Link href="/contact" className="hover:text-rose-500 transition">Contact</Link>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-8 py-20">
        <div className="w-32 h-32 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl">👩‍🎨</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">Hi, I'm Isabel Monserrat</h2>
        <p className="text-center text-rose-400 mb-8 text-lg">Artist · Painter · Creator</p>
        <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
          <p>I'm a self-taught artist based in Cavite, Philippines, passionate about capturing emotions and moments through color and texture.</p>
          <p>My work spans oil painting, watercolor, and acrylic — each medium offering a unique way to express the beauty I see in everyday life.</p>
          <p>Every piece I create is original and one-of-a-kind. I also take commissions for custom portraits, landscapes, and abstract pieces.</p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-rose-50 rounded-xl p-6">
            <p className="text-3xl font-bold text-rose-500">50+</p>
            <p className="text-gray-400 text-sm mt-1">Artworks Created</p>
          </div>
          <div className="bg-rose-50 rounded-xl p-6">
            <p className="text-3xl font-bold text-rose-500">30+</p>
            <p className="text-gray-400 text-sm mt-1">Happy Collectors</p>
          </div>
          <div className="bg-rose-50 rounded-xl p-6">
            <p className="text-3xl font-bold text-rose-500">5+</p>
            <p className="text-gray-400 text-sm mt-1">Years Creating</p>
          </div>
        </div>
      </section>
    </main>
  );
}