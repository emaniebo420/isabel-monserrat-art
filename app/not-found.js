import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <p className="text-8xl mb-6">🎨</p>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8" style={{ color: '#6b6b6b' }}>Looks like this canvas is empty!</p>
        <Link href="/"
          className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block text-white"
          style={{ background: '#6b1e2e' }}>
          Back to Home
        </Link>
      </section>
      <Footer />
    </main>
  );
}