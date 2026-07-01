"use client";

import { useState } from "react";
import SectionDecor from "@/components/SectionDecor";
import Reveal from "@/components/Reveal";
import { MapPin, Clock, Phone, Mail, Check } from "lucide-react";

const SPACE_TYPES = ["Living Room", "Dining Room", "Foyer / Entryway", "Bedroom", "Commercial", "Other"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", space: SPACE_TYPES[0], message: "" });

  const onChange = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your API route / email service
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <SectionDecor variant={0} />
      <div className="container-x relative z-10 grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Visit Us</p>
          <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">Come stand under the light</h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Experience our chandeliers in person, or book a consultation and we’ll bring the
            showroom to you — in 3D.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { Icon: MapPin, title: "Showroom", body: "ILMA LightHouse, Jhumpura, Keonjhar, Odisha, India" },
              { Icon: Clock, title: "Hours", body: "Mon–Sat · 10:00 AM – 8:00 PM · Sun by appointment" },
              { Icon: Phone, title: "Call", body: "+91 90000 00000" },
              { Icon: Mail, title: "Email", body: "hello@ilmalighthouse.com" },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-gold">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-muted">{title}</div>
                  <div className="text-ink">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 aspect-[16/7] overflow-hidden rounded-2xl border border-line">
            <iframe
              title="ILMA LightHouse — Jhumpura, Keonjhar, Odisha"
              src="https://maps.google.com/maps?q=Jhumpura%2C%20Keonjhar%2C%20Odisha%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-surface p-7 md:p-9">
            {sent ? (
              <div className="grid h-full min-h-[24rem] place-items-center text-center">
                <div>
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-line text-gold glow-gold">
                    <Check size={26} />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-ink">Thank you</h3>
                  <p className="mt-2 text-muted">We’ll be in touch within one business day.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-ink">Book a consultation</h3>
                <Field label="Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    className="field"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    className="field"
                    placeholder="you@email.com"
                  />
                </Field>
                <Field label="Space type">
                  <select value={form.space} onChange={(e) => onChange("space", e.target.value)} className="field">
                    {SPACE_TYPES.map((s) => (
                      <option key={s} value={s} className="bg-bg text-ink">
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    rows={4}
                    className="field resize-none"
                    placeholder="Tell us about your space and what you have in mind…"
                  />
                </Field>
                <button type="submit" className="btn-gold w-full">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-wider text-muted">{label}</span>
      {children}
    </label>
  );
}
