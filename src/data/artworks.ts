import { Artwork } from "@/contexts/CartContext";

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Ethereal Dreams",
    artist: "Bibisora",
    price: 2500,
    image: "/artwork-1.jpg", // ✅ public papkadan
    category: "abstract",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: "100 x 80 cm",
    description:
      "A mesmerizing abstract composition that explores the depths of consciousness and dreamscapes through vibrant colors and fluid forms.",
  },
  {
    id: "2",
    title: "Urban Symphony",
    artist: "Bibisora",
    price: 3200,
    image: "/artwork-2.jpg", // ✅
    category: "contemporary",
    year: 2024,
    medium: "Mixed Media",
    dimensions: "120 x 90 cm",
    description:
      "An exploration of modern urban life, capturing the rhythm and energy of contemporary cities through bold strokes and dynamic composition.",
  },
  {
    id: "3",
    title: "Whispers of Nature",
    artist: "Bibisora",
    price: 1800,
    image: "/artwork-3.jpg", // ✅
    category: "landscape",
    year: 2023,
    medium: "Acrylic on Canvas",
    dimensions: "80 x 60 cm",
    description:
      "A serene landscape that celebrates the quiet beauty of nature, inviting viewers to pause and reflect on the natural world.",
  },
  {
    id: "4",
    title: "Reflections",
    artist: "Bibisora",
    price: 2800,
    image: "/artwork-4.jpg", // ✅
    category: "portrait",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: "90 x 70 cm",
    description:
      "An introspective portrait that captures the complexity of human emotion through subtle expressions and masterful use of light.",
  },
  {
    id: "5",
    title: "Golden Hour",
    artist: "Bibisora",
    price: 2200,
    image: "/artwork-5.jpg", // ✅
    category: "landscape",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "100 x 70 cm",
    description:
      "A breathtaking capture of that magical moment when day transitions to evening, bathed in warm golden light.",
  },
  {
    id: "6",
    title: "Cosmic Dance",
    artist: "Bibisora",
    price: 3500,
    image: "/artwork-6.jpg", // ✅
    category: "abstract",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: "150 x 100 cm",
    description:
      "A large-scale abstract piece that evokes the mysterious beauty of the cosmos through swirling patterns and celestial colors.",
  },
  {
    id: "7",
    title: "Silent Witness",
    artist: "Bibisora",
    price: 2600,
    image: "/artwork-7.jpg", // ✅
    category: "portrait",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "85 x 65 cm",
    description:
      "A powerful portrait that speaks volumes through silence, capturing the strength and vulnerability of the human spirit.",
  },
  {
    id: "8",
    title: "Neon Nights",
    artist: "Bibisora",
    price: 2900,
    image: "/artwork-8.jpg", // ✅
    category: "contemporary",
    year: 2024,
    medium: "Mixed Media",
    dimensions: "110 x 85 cm",
    description:
      "A vibrant exploration of nightlife and urban culture, illuminated by the glow of neon lights and electric energy.",
  },
];
