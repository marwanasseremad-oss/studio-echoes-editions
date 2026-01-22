import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';
import artwork7 from '@/assets/artwork-7.jpg';
import artwork8 from '@/assets/artwork-8.jpg';

export interface Artist {
  id: string;
  name: string;
  bio: string;
  location: string;
  featured: boolean;
}

export interface ProductVariant {
  size: '30×40' | '50×70' | '70×100';
  framed: boolean;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  image: string;
  description: string;
  editionSize: number;
  editionsSold: number;
  variants: ProductVariant[];
  category: 'landscape' | 'architecture' | 'portrait' | 'abstract';
  featured: boolean;
  collectionNumber: string;
}

export const artists: Artist[] = [
  {
    id: 'karim-hassan',
    name: 'Karim Hassan',
    bio: 'Cairo-born photographer whose work explores the interplay of light and geometry in Islamic architecture. His minimalist approach distills centuries of craftsmanship into contemplative visual meditations.',
    location: 'Cairo, Egypt',
    featured: true,
  },
  {
    id: 'layla-mansour',
    name: 'Layla Mansour',
    bio: 'Documentary photographer capturing the quiet dignity of everyday Egyptian life. Her work has been exhibited at the Venice Biennale and acquired by private collections across the Gulf.',
    location: 'Alexandria, Egypt',
    featured: true,
  },
  {
    id: 'omar-farouk',
    name: 'Omar Farouk',
    bio: 'Landscape photographer known for his ethereal desert studies. His large-format work reveals the sculptural beauty of Egypt\'s Western Desert through patient observation.',
    location: 'Siwa, Egypt',
    featured: true,
  },
  {
    id: 'nadia-el-sayed',
    name: 'Nadia El-Sayed',
    bio: 'Underwater photographer documenting the biodiversity of the Red Sea. Her work combines scientific precision with an artist\'s eye for color and composition.',
    location: 'Hurghada, Egypt',
    featured: false,
  },
];

export const products: Product[] = [
  {
    id: 'desert-curve-i',
    title: 'Desert Curve I',
    artistId: 'omar-farouk',
    artistName: 'Omar Farouk',
    image: artwork1,
    description: 'Light traces the spine of a dune in the Western Desert. A meditation on form and emptiness, captured in the hour before dawn.',
    editionSize: 25,
    editionsSold: 8,
    variants: [
      { size: '30×40', framed: false, price: 1950 },
      { size: '30×40', framed: true, price: 3200 },
      { size: '50×70', framed: false, price: 3900 },
      { size: '50×70', framed: true, price: 5400 },
      { size: '70×100', framed: false, price: 5900 },
      { size: '70×100', framed: true, price: 8500 },
    ],
    category: 'landscape',
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'felucca-at-dusk',
    title: 'Felucca at Dusk',
    artistId: 'layla-mansour',
    artistName: 'Layla Mansour',
    image: artwork2,
    description: 'A solitary felucca sails into the last light of day on the Nile. The image captures a moment of perfect stillness between day and night.',
    editionSize: 50,
    editionsSold: 23,
    variants: [
      { size: '30×40', framed: false, price: 1950 },
      { size: '30×40', framed: true, price: 3200 },
      { size: '50×70', framed: false, price: 3900 },
      { size: '50×70', framed: true, price: 5400 },
      { size: '70×100', framed: false, price: 5900 },
      { size: '70×100', framed: true, price: 8500 },
    ],
    category: 'landscape',
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'doorway-to-prayer',
    title: 'Doorway to Prayer',
    artistId: 'karim-hassan',
    artistName: 'Karim Hassan',
    image: artwork3,
    description: 'An ornate doorway in Islamic Cairo, where geometry becomes devotion. The soft light reveals centuries of craftsmanship in carved stone.',
    editionSize: 25,
    editionsSold: 12,
    variants: [
      { size: '30×40', framed: false, price: 3900 },
      { size: '30×40', framed: true, price: 5400 },
      { size: '50×70', framed: false, price: 5900 },
      { size: '50×70', framed: true, price: 7900 },
      { size: '70×100', framed: false, price: 10900 },
      { size: '70×100', framed: true, price: 14500 },
    ],
    category: 'architecture',
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'temple-of-light',
    title: 'Temple of Light',
    artistId: 'karim-hassan',
    artistName: 'Karim Hassan',
    image: artwork4,
    description: 'Ancient columns at Karnak catch the warm light of afternoon. A study in the endurance of stone and the passage of millennia.',
    editionSize: 25,
    editionsSold: 6,
    variants: [
      { size: '30×40', framed: false, price: 3900 },
      { size: '30×40', framed: true, price: 5400 },
      { size: '50×70', framed: false, price: 5900 },
      { size: '50×70', framed: true, price: 7900 },
      { size: '70×100', framed: false, price: 10900 },
      { size: '70×100', framed: true, price: 14500 },
    ],
    category: 'architecture',
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'the-ahwa',
    title: 'The Ahwa',
    artistId: 'layla-mansour',
    artistName: 'Layla Mansour',
    image: artwork5,
    description: 'A portrait of timeless Cairo: an elder with shisha in the warm glow of a traditional coffee house. Documentary photography elevated to fine art.',
    editionSize: 50,
    editionsSold: 31,
    variants: [
      { size: '30×40', framed: false, price: 1950 },
      { size: '30×40', framed: true, price: 3200 },
      { size: '50×70', framed: false, price: 3900 },
      { size: '50×70', framed: true, price: 5400 },
      { size: '70×100', framed: false, price: 5900 },
      { size: '70×100', framed: true, price: 8500 },
    ],
    category: 'portrait',
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'red-sea-garden',
    title: 'Red Sea Garden',
    artistId: 'nadia-el-sayed',
    artistName: 'Nadia El-Sayed',
    image: artwork6,
    description: 'Soft coral reaches toward the surface in the crystal waters of the Red Sea. An underwater meditation on color and the dance of light.',
    editionSize: 25,
    editionsSold: 4,
    variants: [
      { size: '30×40', framed: false, price: 1950 },
      { size: '30×40', framed: true, price: 3200 },
      { size: '50×70', framed: false, price: 3900 },
      { size: '50×70', framed: true, price: 5400 },
      { size: '70×100', framed: false, price: 5900 },
      { size: '70×100', framed: true, price: 8500 },
    ],
    category: 'abstract',
    featured: false,
    collectionNumber: '001',
  },
  {
    id: 'mediterranean-dawn',
    title: 'Mediterranean Dawn',
    artistId: 'layla-mansour',
    artistName: 'Layla Mansour',
    image: artwork7,
    description: 'First light over the Alexandria corniche. The Mediterranean holds its breath as the city awakens. A quiet moment of transition.',
    editionSize: 50,
    editionsSold: 18,
    variants: [
      { size: '30×40', framed: false, price: 1950 },
      { size: '30×40', framed: true, price: 3200 },
      { size: '50×70', framed: false, price: 3900 },
      { size: '50×70', framed: true, price: 5400 },
      { size: '70×100', framed: false, price: 5900 },
      { size: '70×100', framed: true, price: 8500 },
    ],
    category: 'landscape',
    featured: false,
    collectionNumber: '001',
  },
  {
    id: 'siwa-palms',
    title: 'Siwa Palms',
    artistId: 'omar-farouk',
    artistName: 'Omar Farouk',
    image: artwork8,
    description: 'Date palms in the golden light of Siwa Oasis. Where the desert meets an ancient garden, time moves at the pace of seasons.',
    editionSize: 25,
    editionsSold: 11,
    variants: [
      { size: '30×40', framed: false, price: 1950 },
      { size: '30×40', framed: true, price: 3200 },
      { size: '50×70', framed: false, price: 3900 },
      { size: '50×70', framed: true, price: 5400 },
      { size: '70×100', framed: false, price: 5900 },
      { size: '70×100', framed: true, price: 8500 },
    ],
    category: 'landscape',
    featured: true,
    collectionNumber: '001',
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getArtistById = (id: string) => artists.find(a => a.id === id);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByArtist = (artistId: string) => products.filter(p => p.artistId === artistId);
