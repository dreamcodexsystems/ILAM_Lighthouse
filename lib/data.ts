export type Category = { name: string; blurb: string; from: string; to: string };
export const categories: Category[] = [
  { name: "Chandeliers", blurb: "Statement crystal & brass centrepieces", from: "#2a1f0e", to: "#0e0d0b" },
  { name: "Pendant Lights", blurb: "Sculptural single & cluster pendants", from: "#322512", to: "#14110d" },
  { name: "Wall Lights", blurb: "Sconces that wash walls in warmth", from: "#241b10", to: "#0e0d0b" },
  { name: "Ceiling Lights", blurb: "Flush & semi-flush luminaires", from: "#2e2310", to: "#14110d" },
  { name: "Table & Floor Lamps", blurb: "Portable pools of golden light", from: "#281d0f", to: "#0e0d0b" },
  { name: "Outdoor Lighting", blurb: "Weatherproof elegance for exteriors", from: "#231a0e", to: "#14110d" },
];

export type Space = { name: string; copy: string; from: string; to: string };
export const spaces: Space[] = [
  { name: "Living Room", copy: "A glowing focal point that anchors the room.", from: "#322412", to: "#0e0d0b" },
  { name: "Dining Room", copy: "Light that gathers people around the table.", from: "#2a200f", to: "#14110d" },
  { name: "Bedroom", copy: "Soft, intimate layers for quiet evenings.", from: "#281d10", to: "#0e0d0b" },
  { name: "Foyer & Entryway", copy: "The first impression, beautifully lit.", from: "#2e2310", to: "#14110d" },
  { name: "Double-Height / Duplex", copy: "Cascading fixtures for grand volumes.", from: "#241a0d", to: "#0e0d0b" },
];

export type Service = { icon: string; title: string; desc: string };
export const services: Service[] = [
  { icon: "PenTool", title: "Bespoke Design & 3D Visualisation", desc: "We model your fixture in 3D and refine it with you before a single crystal is cut." },
  { icon: "Video", title: "In-Home / Virtual Consultation", desc: "Our lighting designers assess your space and curate options that fit it perfectly." },
  { icon: "Wrench", title: "Professional Installation", desc: "Certified technicians handle mounting, wiring and balancing — safely and cleanly." },
  { icon: "Sparkles", title: "Maintenance & Crystal Cleaning", desc: "Scheduled care that keeps every prism and bulb performing like the first day." },
  { icon: "Building2", title: "Trade Program for Architects & Designers", desc: "Dedicated pricing, samples and project support for design professionals." },
];

export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [
  { quote: "ILMA turned our double-height foyer into the heart of the home. The 3D preview meant zero surprises on install day.", name: "Aarav & Meera Kapoor", role: "Homeowners, Whitefield" },
  { quote: "Their trade program is the best I've worked with in India — responsive, precise, and the finish quality is exceptional.", name: "Tanvi Rao", role: "Principal, Studio Lumen" },
  { quote: "From consultation to maintenance, it felt like one calm, considered process. The dining chandelier is breathtaking.", name: "Rohit Sharma", role: "Homeowner, Koramangala" },
  { quote: "We specify ILMA for our luxury residential projects. Craft, lead times and communication are all dialled in.", name: "Karan Mehta", role: "Architect, MH Associates" },
];

export type Shot = { from: string; to: string; tall?: boolean };
export const gallery: Shot[] = [
  { from: "#352712", to: "#0e0d0b", tall: true },
  { from: "#2a200f", to: "#14110d" },
  { from: "#241a0d", to: "#0e0d0b" },
  { from: "#322412", to: "#14110d", tall: true },
  { from: "#281d10", to: "#0e0d0b" },
  { from: "#2e2310", to: "#14110d", tall: true },
  { from: "#231a0e", to: "#0e0d0b" },
  { from: "#332611", to: "#14110d" },
];
