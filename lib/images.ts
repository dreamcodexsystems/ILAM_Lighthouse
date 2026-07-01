/**
 * Curated HD lighting photography (Unsplash — free to use, no attribution required).
 * Swap any URL for your own product shots in /public/img and update here.
 */
const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const WARM_CHANDELIER = "1556494403-f90163a73c21"; // glowing gold crystal chandelier
const PALACE = "1530680728753-ce90ca49a848"; // ornate gold + crystal hall
const DINING_HALL = "1531762948975-73032b7b61f4"; // gilded dining hall
const DOUBLE_HEIGHT = "1744126405308-b7fb2d430e96"; // double-height interior, pendants
const ELEGANT_ROOM = "1757619852446-5a21e996c685"; // elegant room + chandelier

export const IMG = {
  hero: U(PALACE, 1900),
  signature: U(WARM_CHANDELIER, 1500),
  signatureThumbs: [U(PALACE, 700), U(DINING_HALL, 700), U(ELEGANT_ROOM, 700)],
  categories: {
    "Chandeliers": U(WARM_CHANDELIER),
    "Pendant Lights": U(DOUBLE_HEIGHT),
    "Wall Lights": U(ELEGANT_ROOM),
    "Ceiling Lights": U(PALACE),
    "Table & Floor Lamps": U(DINING_HALL),
    "Outdoor Lighting": U(DOUBLE_HEIGHT),
  } as Record<string, string>,
  spaces: {
    "Living Room": U(DOUBLE_HEIGHT),
    "Dining Room": U(DINING_HALL),
    "Bedroom": U(ELEGANT_ROOM),
    "Foyer & Entryway": U(PALACE),
    "Double-Height / Duplex": U(DOUBLE_HEIGHT),
  } as Record<string, string>,
  services: [
    U(WARM_CHANDELIER, 900),
    U(DOUBLE_HEIGHT, 900),
    U(ELEGANT_ROOM, 900),
    U(PALACE, 900),
    U(DINING_HALL, 900),
  ],
  lookbook: [
    U(WARM_CHANDELIER),
    U(DINING_HALL),
    U(PALACE),
    U(DOUBLE_HEIGHT),
    U(ELEGANT_ROOM),
    U(PALACE),
    U(DINING_HALL),
    U(WARM_CHANDELIER),
  ],
};
