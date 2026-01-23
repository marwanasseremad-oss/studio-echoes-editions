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
  nameAr: string;
  bio: string;
  bioAr: string;
  location: string;
  locationAr: string;
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
  titleAr: string;
  artistId: string;
  artistName: string;
  artistNameAr: string;
  image: string;
  description: string;
  descriptionAr: string;
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
    nameAr: 'كريم حسن',
    bio: 'Cairo-born photographer whose work explores the interplay of light and geometry in Islamic architecture. His minimalist approach distills centuries of craftsmanship into contemplative visual meditations.',
    bioAr: 'مصور من مواليد القاهرة تستكشف أعماله التفاعل بين الضوء والهندسة في العمارة الإسلامية. نهجه البسيط يختزل قروناً من الحرفية في تأملات بصرية عميقة.',
    location: 'Cairo, Egypt',
    locationAr: 'القاهرة، مصر',
    featured: true,
  },
  {
    id: 'layla-mansour',
    name: 'Layla Mansour',
    nameAr: 'ليلى منصور',
    bio: 'Documentary photographer capturing the quiet dignity of everyday Mediterranean life. Her work has been exhibited at the Venice Biennale and acquired by private collections across the Gulf.',
    bioAr: 'مصورة وثائقية تلتقط الكرامة الهادئة للحياة المتوسطية اليومية. عُرضت أعمالها في بينالي البندقية واقتنتها مجموعات خاصة في الخليج.',
    location: 'Alexandria, Egypt',
    locationAr: 'الإسكندرية، مصر',
    featured: true,
  },
  {
    id: 'omar-farouk',
    name: 'Omar Farouk',
    nameAr: 'عمر فاروق',
    bio: 'Landscape photographer known for his ethereal desert studies. His large-format work reveals the sculptural beauty of Egypt\'s Western Desert through patient observation.',
    bioAr: 'مصور مناظر طبيعية معروف بدراساته الصحراوية الأثيرية. تكشف أعماله كبيرة التنسيق عن الجمال النحتي للصحراء الغربية المصرية من خلال المراقبة الصبورة.',
    location: 'Siwa, Egypt',
    locationAr: 'سيوة، مصر',
    featured: true,
  },
  {
    id: 'nadia-el-sayed',
    name: 'Nadia El-Sayed',
    nameAr: 'نادية السيد',
    bio: 'Coastal photographer documenting the light and calm of the Mediterranean shores. Her work combines scientific precision with an artist\'s eye for color and composition.',
    bioAr: 'مصورة ساحلية توثق الضوء والهدوء على شواطئ البحر المتوسط. تجمع أعمالها بين الدقة العلمية وعين الفنان للون والتكوين.',
    location: 'El Gouna, Egypt',
    locationAr: 'الجونة، مصر',
    featured: false,
  },
];

export const products: Product[] = [
  {
    id: 'desert-curve-i',
    title: 'Desert Curve I',
    titleAr: 'منحنى الصحراء I',
    artistId: 'omar-farouk',
    artistName: 'Omar Farouk',
    artistNameAr: 'عمر فاروق',
    image: artwork1,
    description: 'Light traces the spine of a dune in the Western Desert. A meditation on form and emptiness, captured in the hour before dawn.',
    descriptionAr: 'يتتبع الضوء عمود الكثيب في الصحراء الغربية. تأمل في الشكل والفراغ، ملتقط في الساعة قبل الفجر.',
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
    id: 'mediterranean-stillness',
    title: 'Mediterranean Stillness',
    titleAr: 'سكون البحر المتوسط',
    artistId: 'layla-mansour',
    artistName: 'Layla Mansour',
    artistNameAr: 'ليلى منصور',
    image: artwork2,
    description: 'A solitary boat rests on calm waters as morning light paints the sea in soft olive tones. The essence of Mediterranean tranquility.',
    descriptionAr: 'قارب وحيد يرتاح على مياه هادئة بينما يرسم ضوء الصباح البحر بدرجات الزيتون الناعمة. جوهر هدوء البحر المتوسط.',
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
    id: 'geometry-of-faith',
    title: 'Geometry of Faith',
    titleAr: 'هندسة الإيمان',
    artistId: 'karim-hassan',
    artistName: 'Karim Hassan',
    artistNameAr: 'كريم حسن',
    image: artwork3,
    description: 'An ornate doorway in Islamic Cairo, where geometry becomes devotion. The soft light reveals centuries of craftsmanship in carved stone.',
    descriptionAr: 'مدخل مزخرف في القاهرة الإسلامية، حيث تصبح الهندسة عبادة. يكشف الضوء الناعم قروناً من الحرفية في الحجر المنحوت.',
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
    id: 'columns-of-time',
    title: 'Columns of Time',
    titleAr: 'أعمدة الزمن',
    artistId: 'karim-hassan',
    artistName: 'Karim Hassan',
    artistNameAr: 'كريم حسن',
    image: artwork4,
    description: 'Ancient columns at Karnak catch the warm light of afternoon. A study in the endurance of stone and the passage of millennia.',
    descriptionAr: 'أعمدة الكرنك القديمة تلتقط ضوء فترة ما بعد الظهيرة الدافئ. دراسة في صمود الحجر ومرور الآلاف من السنين.',
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
    id: 'shadow-geometry',
    title: 'Shadow Geometry',
    titleAr: 'هندسة الظلال',
    artistId: 'karim-hassan',
    artistName: 'Karim Hassan',
    artistNameAr: 'كريم حسن',
    image: artwork5,
    description: 'Afternoon light creates bold geometric shadows on a Cairo facade. Minimalist architecture meets the drama of Mediterranean sun.',
    descriptionAr: 'ضوء فترة ما بعد الظهيرة يخلق ظلالاً هندسية جريئة على واجهة قاهرية. العمارة البسيطة تلتقي بدراما شمس البحر المتوسط.',
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
    category: 'architecture',
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'coastal-calm',
    title: 'Coastal Calm',
    titleAr: 'هدوء الساحل',
    artistId: 'nadia-el-sayed',
    artistName: 'Nadia El-Sayed',
    artistNameAr: 'نادية السيد',
    image: artwork6,
    description: 'Soft waves meet the shore in quiet rhythm. The muted palette of sea and stone speaks to the timeless calm of coastal Egypt.',
    descriptionAr: 'موجات ناعمة تلتقي الشاطئ في إيقاع هادئ. لوحة ألوان البحر والحجر الخافتة تتحدث عن الهدوء الخالد لساحل مصر.',
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
    category: 'landscape',
    featured: false,
    collectionNumber: '001',
  },
  {
    id: 'olive-grove-light',
    title: 'Olive Grove Light',
    titleAr: 'ضوء بستان الزيتون',
    artistId: 'layla-mansour',
    artistName: 'Layla Mansour',
    artistNameAr: 'ليلى منصور',
    image: artwork7,
    description: 'Morning sun filters through ancient olive trees. A portrait of the Mediterranean landscape that has nourished civilizations.',
    descriptionAr: 'شمس الصباح تتسلل عبر أشجار الزيتون القديمة. صورة للمشهد المتوسطي الذي غذى الحضارات.',
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
    featured: true,
    collectionNumber: '001',
  },
  {
    id: 'desert-silence',
    title: 'Desert Silence',
    titleAr: 'صمت الصحراء',
    artistId: 'omar-farouk',
    artistName: 'Omar Farouk',
    artistNameAr: 'عمر فاروق',
    image: artwork8,
    description: 'The vast quiet of the Siwa oasis at dusk. Palm silhouettes against a sky of muted gold, where time seems suspended.',
    descriptionAr: 'الهدوء الشاسع لواحة سيوة عند الغسق. صور ظلية للنخيل على سماء من الذهب الخافت، حيث يبدو الزمن معلقاً.',
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