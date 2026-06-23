import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="about" />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: '#f0e8dc' }}>
          <span className="text-5xl">👩‍🎨</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">Hi, I'm Isabel</h2>
        <p className="text-center text-lg mb-8" style={{ color: '#c9a84c' }}>
          Artist · Painter · Creator
        </p>
        <div className="space-y-5 text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
          <p>I'm a self-taught artist based in Tagaytay, Philippines, passionate about capturing emotions and moments through color and texture.</p>
          <p>My work spans oil painting, watercolor, and acrylic — each medium offering a unique way to express the beauty I see in everyday life.</p>
          <p>Every piece I create is original and one-of-a-kind. I also take commissions for custom portraits, landscapes, and abstract pieces.</p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl p-6" style={{ background: '#f0e8dc' }}>
            <p className="text-3xl font-bold" style={{ color: '#6b1e2e' }}>50+</p>
            <p className="text-sm mt-1" style={{ color: '#6b6b6b' }}>Artworks Created</p>
          </div>
          <div className="rounded-2xl p-6" style={{ background: '#f0e8dc' }}>
            <p className="text-3xl font-bold" style={{ color: '#6b1e2e' }}>30+</p>
            <p className="text-sm mt-1" style={{ color: '#6b6b6b' }}>Happy Collectors</p>
          </div>
          <div className="rounded-2xl p-6" style={{ background: '#f0e8dc' }}>
            <p className="text-3xl font-bold" style={{ color: '#6b1e2e' }}>5+</p>
            <p className="text-sm mt-1" style={{ color: '#6b6b6b' }}>Years Creating</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact"
            className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block text-white"
            style={{ background: '#6b1e2e' }}>
            Commission a Piece
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}