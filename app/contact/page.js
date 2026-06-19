'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const data = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_6skuisd',
          template_id: 'template_r54705m',
          user_id: '0iOcFS39UQGB6QU74',
          template_params: data,
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold tracking-tight">Isabel Monserrat ♥</Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/gallery" className="hover:text-rose-500 transition">Gallery</Link>
          <Link href="/shop" className="hover:text-rose-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-rose-500 transition">About</Link>
          <Link href="/contact" className="text-rose-500">Contact</Link>
        </div>
      </nav>

      <section className="max-w-xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-400 mb-12">Commission a piece or ask anything!</p>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 text-center">
            ✅ Message sent! Isabel will get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-center">
            ❌ Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input name="name" type="text" placeholder="Your name" required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input name="email" type="email" placeholder="your@email.com" required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="message" rows={5} placeholder="Tell me about your commission or inquiry..." required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition font-medium text-lg disabled:opacity-50">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400 space-y-2">
          <p>📧 lebasimonserrat@gmail.com</p>
          <a href="https://facebook.com/isabelmonserrat14" target="_blank" className="hover:text-rose-500 transition block">📘 Facebook: /isabelmonserrat14</a>
          <a href="https://instagram.com/lebasimonserrat" target="_blank" className="hover:text-rose-500 transition block">📸 Instagram: @lebasimonserrat</a>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <p className="font-semibold text-gray-600 mb-1">Isabel Monserrat ♥</p>
        <p>© 2026 Isabel Monserrat. All rights reserved.</p>
      </footer>
    </main>
  );
}