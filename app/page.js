import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar active="home" />

      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 bg-rose-50">
        <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-3">
          Original Art by Isabel Monserrat
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Art That Speaks<br />to the Soul
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md">
          Handcrafted paintings, prints & commissions — straight from Tagaytay, Philippines
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:justify-center">
          <Link href="/gallery"
            className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition text-base font-medium">
            View Gallery
          </Link>
          <Link href="/shop"
            className="border border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-50 transition text-base font-medium">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <h2 className="text-2xl font-bold text-center mb-10">Why collectors love Isabel's work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <p className="text-4xl mb-3">🎨</p>
            <p className="font-semibold mb-1">100% Original</p>
            <p className="text-gray-400 text-sm">Every piece is one of a kind</p>
          </div>
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <p className="text-4xl mb-3">🚚</p>
            <p className="font-semibold mb-1">Ships Nationwide</p>
            <p className="text-gray-400 text-sm">Delivered safely across the PH</p>
          </div>
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <p className="text-4xl mb-3">✏️</p>
            <p className="font-semibold mb-1">Custom Commissions</p>
            <p className="text-gray-400 text-sm">Your vision, her brushstroke</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-rose-500 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Want a custom painting?</h2>
        <p className="text-rose-100 mb-6">Commission a piece made just for you</p>
        <Link href="/contact"
          className="bg-white text-rose-500 px-8 py-3 rounded-full font-medium hover:bg-rose-50 transition inline-block">
          Request a Commission
        </Link>
      </section>

      <Footer />
    </main>
  );
}