'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isScrolled ? 'border-white/10 bg-slate-950/90 shadow-lg shadow-slate-950/20' : 'border-transparent bg-slate-950/75'
      } backdrop-blur`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="#home" className="signature-mark signature-mark--sm text-slate-100 hover:text-white">
          Shekhar
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-slate-300 hover:bg-white/6 hover:text-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 p-2 text-slate-200 hover:border-white/20 hover:bg-white/6 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/10 bg-slate-950/95 px-4 py-3 shadow-lg shadow-slate-950/30 md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-white/6 hover:text-slate-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
