"use client";

import { Instagram, Facebook, Linkedin, Youtube, ArrowRight, MapPin } from "lucide-react";
import Logo from "./Logo";

const COLS = [
  { title: "Collections", links: ["Chandeliers", "Pendant Lights", "Wall Lights", "Ceiling Lights", "Outdoor"] },
  { title: "Services", links: ["Bespoke Design", "Consultation", "Installation", "Maintenance", "Trade Program"] },
  { title: "Company", links: ["About ILMA", "Lookbook", "Visit Showroom", "Contact", "Careers"] },
];

function AnimatedChandelier() {
  return (
    <div className="pointer-events-none relative mx-auto mb-2 h-40 w-full max-w-xs">
      {/* glow */}
      <div
        className="absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.35), rgba(201,162,75,0) 70%)" }}
      />
      <svg viewBox="0 0 200 200" className="animate-sway absolute left-1/2 top-0 h-40 -translate-x-1/2">
        <g stroke="var(--gold)" strokeWidth="1.6" fill="none" opacity="0.9">
          <line x1="100" y1="0" x2="100" y2="40" />
          <ellipse cx="100" cy="70" rx="62" ry="14" />
          <ellipse cx="100" cy="96" rx="40" ry="10" />
          <ellipse cx="100" cy="118" rx="20" ry="6" />
          <line x1="38" y1="70" x2="50" y2="40" />
          <line x1="162" y1="70" x2="150" y2="40" />
          <line x1="50" y1="40" x2="150" y2="40" />
        </g>
        <g fill="#ffe6a8">
          {[38, 62, 100, 138, 162].map((x, i) => (
            <circle key={x} cx={x} cy="70" r="4.5" className="animate-twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
          {[68, 100, 132].map((x, i) => (
            <circle key={x} cx={x} cy="96" r="4" className="animate-twinkle" style={{ animationDelay: `${i * 0.35 + 0.2}s` }} />
          ))}
          <circle cx="100" cy="120" r="4" className="animate-twinkle" />
        </g>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg2">
      <AnimatedChandelier />
      <div className="container-x pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="badge" className="h-20 w-20" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Luxury chandeliers & decorative lighting. Where light becomes art.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social link" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="eyebrow mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-ink/80 transition-colors hover:text-gold">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* map */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <h4 className="eyebrow">Find Us</h4>
            <h3 className="h-serif mt-3 text-3xl text-ink">Visit our showroom</h3>
            <p className="mt-3 flex items-start gap-2 text-muted">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              ILMA LightHouse, Jhumpura, Keonjhar, Odisha, India
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="ILMA LightHouse location — Jhumpura, Keonjhar, Odisha"
              src="https://maps.google.com/maps?q=Jhumpura%2C%20Keonjhar%2C%20Odisha%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-line pt-10 md:grid-cols-2 md:items-center">
          <div>
            <h4 className="font-serif text-2xl text-ink">Join the ILMA list</h4>
            <p className="mt-1 text-sm text-muted">New collections, private previews and design notes.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-line bg-surface p-1.5 md:max-w-md md:justify-self-end">
            <input type="email" placeholder="Your email address" className="w-full bg-transparent px-4 py-2 text-sm text-ink outline-none placeholder:text-muted" />
            <button className="btn-gold shrink-0 px-5 py-2.5" aria-label="Subscribe"><ArrowRight size={16} /></button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} ILMA LightHouse. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Shipping</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
