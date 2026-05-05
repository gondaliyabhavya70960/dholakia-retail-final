import Link from 'next/link';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { footerLinks } from '@/lib/nav';

export default function SiteFooter() {
  const badges = ['RJC', 'Kimberley Process', 'SCS-007', 'ISO 9001'];
  return (
    <footer className="bg-[#0A0E1F] text-[#E8E9ED]">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-12 md:py-28">
        {/* Block 1 — Brand + Nav */}
        <div className="grid gap-12 lg:grid-cols-[30%_70%] lg:gap-16">
          <div>
            <div className="font-display text-3xl font-medium tracking-[0.04em]">
              Dholakia<span className="italic text-electric">.</span>
            </div>
            <p className="mt-6 max-w-[320px] text-[15px] leading-[1.55] text-[#B4BCC9]">
              A house of houses — the parent company of a curated portfolio of luxury jewellery
              brands, beginning with Mayavé.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-cursor="hover"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#E8E9ED] transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <FooterCol title="The Group" items={footerLinks.group} />
            <FooterCol title="Brands" items={footerLinks.portfolio} />
            <FooterCol title="Responsibility" items={footerLinks.responsibility} />
            <FooterCol title="Contact" items={footerLinks.contact} />
          </div>
        </div>

        {/* Block 2 — Corporate identity */}
        <div className="mt-20 grid gap-8 border-t border-white/10 pt-16 lg:grid-cols-[30%_70%]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#6B8AB8]">CIN</div>
            <div className="mt-2 text-[15px] text-[#E8E9ED]">U32111GJ2024PTC155690</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#6B8AB8]">
              Registered Office
            </div>
            <div className="mt-2 text-[15px] text-[#E8E9ED]">
              Diamond Bourse, Surat, Gujarat 395008, India
            </div>
          </div>
        </div>

        {/* Block 3 — Compliance */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:gap-8">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#6B8AB8]">Compliance</div>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex h-9 items-center rounded-full border border-white/15 px-4 text-[12px] tracking-[0.04em] text-[#E8E9ED] transition-colors hover:border-[#6B8AB8]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Block 4 — Copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] text-[#B4BCC9] md:flex-row md:items-center md:justify-between">
          <div>© 2026 Dholakia Retail Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/legal/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/legal/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/legal/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#6B8AB8]">
        {title}
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              data-cursor="hover"
              className="group inline-flex items-center gap-1.5 text-[15px] text-[#E8E9ED] transition-colors hover:text-white"
            >
              {it.label}
              <ArrowUpRight
                size={12}
                className="-translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
