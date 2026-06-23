import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-sm border-t"
      style={{ borderColor: '#e8e0d5', color: '#6b6b6b' }}>
      <p className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>Isabel Monserrat ♥</p>
      <p>© 2026 Isabel Monserrat. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://facebook.com/isabelmonserrat14" target="_blank"
          className="transition hover:opacity-70"
          style={{ color: '#6b1e2e' }}>
          📘 Facebook
        </a>
        <a href="https://instagram.com/lebasimonserrat" target="_blank"
          className="transition hover:opacity-70"
          style={{ color: '#6b1e2e' }}>
          📸 Instagram
        </a>
      </div>
    </footer>
  );
}