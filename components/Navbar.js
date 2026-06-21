import Link from 'next/link';

export default function Navbar({ active }) {
  const links = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Isabel Monserrat ♥
      </Link>
      <div className="flex gap-4 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={active === link.label.toLowerCase() 
              ? 'text-rose-500' 
              : 'hover:text-rose-500 transition'}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}