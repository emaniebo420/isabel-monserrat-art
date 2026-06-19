import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link href="/" className="text-2xl font-bold tracking-tight">Isabel Monserrat's Art  ♥</Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/gallery" className="hover:text-rose-500 transition">Gallery</Link>
          <Link href="/shop" className="hover:text-rose-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="text-rose-500">Contact</Link>
        </div>
      </nav>

      <section className="max-w-xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-400 mb-12">Commission a piece or ask anything!</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" placeholder="Your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={5} placeholder="Tell me about your commission or inquiry..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <button className="w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition font-medium text-lg">
            Send Message
          </button>
        </div>

        <div className="mt-12 text-center text-gray-400 space-y-2">
          <p>📧 lebasimonserrat@gmail.com</p>
          <p>📱 Facebook: /isabelmonserrat14</p>
          <p>📸 Instagram: @lebasimonserrat</p>
        </div>
      </section>
    </main>
  );
}