'use client';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="contact" />

      <section className="max-w-xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center mb-12" style={{ color: '#6b6b6b' }}>
          Commission a piece or ask anything!
        </p>

        {status === 'success' && (
          <div className="border px-4 py-3 rounded-xl mb-6 text-center"
            style={{ background: '#f0fdf4', borderColor: '#86efac', color: '#166534' }}>
            ✅ Message sent! Isabel will get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="border px-4 py-3 rounded-xl mb-6 text-center"
            style={{ background: '#fef2f2', borderColor: '#fca5a5', color: '#991b1b' }}>
            ❌ Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#4a4a4a' }}>Name</label>
            <input name="name" type="text" placeholder="Your name" required
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 bg-white"
              style={{ borderColor: '#e8e0d5', focusRingColor: '#6b1e2e' }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#4a4a4a' }}>Email</label>
            <input name="email" type="email" placeholder="your@email.com" required
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 bg-white"
              style={{ borderColor: '#e8e0d5' }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#4a4a4a' }}>Message</label>
            <textarea name="message" rows={5} placeholder="Tell me about your commission or inquiry..." required
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 bg-white"
              style={{ borderColor: '#e8e0d5' }} />
          </div>
          <button type="submit" disabled={loading}
            className="w-full text-white py-3 rounded-full font-medium text-lg transition hover:opacity-90 disabled:opacity-50"
            style={{ background: '#6b1e2e' }}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 text-center space-y-2" style={{ color: '#6b6b6b' }}>
          <p>📧 lebasimonserrat@gmail.com</p>
          <a href="https://facebook.com/isabelmonserrat14" target="_blank"
            className="block transition hover:opacity-70"
            style={{ color: '#6b1e2e' }}>
            📘 Facebook: /isabelmonserrat14
          </a>
          <a href="https://instagram.com/lebasimonserrat" target="_blank"
            className="block transition hover:opacity-70"
            style={{ color: '#6b1e2e' }}>
            📸 Instagram: @lebasimonserrat
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}