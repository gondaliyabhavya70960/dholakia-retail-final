'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { primaryNav, headerCTA } from '@/lib/nav';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-ivory/85 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between px-6 md:h-[88px] md:px-10">
        {/* Logo — swap variants based on scroll state */}
        <Link
          href="/"
          className="relative flex h-10 w-[150px] items-center md:w-[170px]"
          aria-label="Dholakia Retail—home"
          data-cursor="hover"
        >
          <Image
            src="/brand/logo-light.svg"
            alt="Dholakia Retail"
            fill
            priority
            sizes="170px"
            className={clsx(
              'object-contain object-left transition-opacity duration-500',
              scrolled ? 'opacity-100' : 'opacity-0'
            )}
          />
          <Image
            src="/brand/logo-dark.svg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="170px"
            className={clsx(
              'object-contain object-left transition-opacity duration-500',
              scrolled ? 'opacity-0' : 'opacity-100'
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => {
            const active = path === item.href || (item.href !== '/' && path?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="hover"
                className={clsx(
                  'relative text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-electric',
                  scrolled ? 'text-ink' : 'text-ink/85',
                  active && 'text-electric'
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-electric" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href={headerCTA.href}
            data-cursor="hover"
            className="hidden items-center gap-2 bg-electric px-5 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-royal lg:inline-flex"
          >
            {headerCTA.label}
            <ArrowUpRight size={14} />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor="hover"
            className="grid h-11 w-11 place-items-center border border-ink/15 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden"
          >
            <div className="bg-ink text-ivory">
              <nav className="mx-auto flex max-w-[1480px] flex-col px-6 py-10">
                <div className="mb-6 h-9 w-[160px] relative">
                  <Image
                    src="/brand/logo-dark.svg"
                    alt="Dholakia Retail"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-white/10 py-5 font-display text-3xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href={headerCTA.href}
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-electric px-6 py-4 text-[12px] uppercase tracking-[0.18em] text-white"
                >
                  {headerCTA.label}
                  <ArrowUpRight size={14} />
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
