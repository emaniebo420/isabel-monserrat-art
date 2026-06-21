import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-gray-400 text-sm border-t border-gray-100">
      <p className="font-semibold text-gray-600 mb-1">Isabel Monserrat ♥</p>
      <p>© 2026 Isabel Monserrat. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://facebook.com/isabelmonserrat14" target="_blank"
          className="hover:text-rose-500 transition">
          📘 Facebook
        </a>
        <a href="https://instagram.com/lebasimonserrat" target="_blank"
          className="hover:text-rose-500 transition">
          📸 Instagram
        </a>
      </div>
    </footer>
  );
}