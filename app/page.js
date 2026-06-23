import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="home" />

      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6"
        style={{ background: '#faf7f2' }}>
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: '#c9a84c' }}>
            Original Art by Isabel Monserrat
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#1a1a1a' }}>
            Art That Speaks<br />to the Soul
          </h1>
          <p className="text-base md:text-lg mb-10 max-w-md"
            style={{ color: '#6b6b6b' }}>
            Handcrafted paintings, prints & commissions — straight from Tagaytay, Philippines
          </p>
          <div className="flex flex-col items-center gap-3 w-full sm:flex-row sm:justify-center">
          <Link href="/gallery"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white transition hover:opacity-90 text-center"
            style={{ background: '#6b1e2e' }}>
            View Gallery
          </Link>
          <Link href="/shop"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition hover:opacity-90 text-center"
            style={{ border: '2px solid #6b1e2e', color: '#6b1e2e' }}>
            Shop Now
          </Link>
</div>
        </FadeIn>
      </section>

      <section className="px-6 py-16 bg-white">
        <FadeIn>
          <h2 className="text-2xl font-bold text-center mb-10">Why collectors love Isabel's work</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center p-6 rounded-2xl" style={{ background: '#faf7f2' }}>
              <p className="text-4xl mb-3">🎨</p>
              <p className="font-semibold mb-1">100% Original</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Every piece is one of a kind</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 rounded-2xl" style={{ background: '#faf7f2' }}>
              <p className="text-4xl mb-3">🚚</p>
              <p className="font-semibold mb-1">Ships Nationwide</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Delivered safely across the PH</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 rounded-2xl" style={{ background: '#faf7f2' }}>
              <p className="text-4xl mb-3">✏️</p>
              <p className="font-semibold mb-1">Custom Commissions</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Your vision, her brushstroke</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-12 text-center text-white"
        style={{ background: '#6b1e2e' }}>
        <FadeIn>
          <h2 className="text-2xl font-bold mb-3">Want a custom painting?</h2>
          <p className="mb-6" style={{ color: '#f9d4da' }}>Commission a piece made just for you</p>
          <Link href="/contact"
            className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block"
            style={{ background: '#c9a84c', color: '#1a1a1a' }}>
            Request a Commission
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}