import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <p className="text-8xl mb-6">🎨</p>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">Looks like this canvas is empty!</p>
        <Link href="/"
          className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition font-medium">
          Back to Home
        </Link>
      </section>
      <Footer />
    </main>
  );
}