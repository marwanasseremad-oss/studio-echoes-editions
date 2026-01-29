import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.collection': 'Collection',
    'nav.artists': 'Artists',
    'nav.about': 'About',
    'nav.quality': 'Print Quality',
    'nav.shipping': 'Shipping',
    'nav.corporate': 'Corporate',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Collection 001 · Now Available',
    'hero.title': 'Museum-Grade Photography from Egypt & the Mediterranean',
    'hero.subtitle': 'Limited edition prints by the region\'s most compelling photographers. Archival quality. Authenticated editions. White-glove delivery.',
    'hero.cta.shop': 'Shop Collection',
    'hero.cta.vip': 'Join VIP Preview List',
    
    // Trust Pillars
    'trust.museum.title': 'Museum-Grade Printing',
    'trust.museum.desc': 'Giclée prints on Hahnemühle archival paper. Built to last 100+ years.',
    'trust.edition.title': 'Limited Editions',
    'trust.edition.desc': 'Each print numbered and signed. Certificate of authenticity included.',
    'trust.delivery.title': 'White-Glove Delivery',
    'trust.delivery.desc': 'Free delivery in Greater Cairo. Professional packaging nationwide.',
    
    // Featured
    'featured.tagline': 'Featured Works',
    'featured.title': 'Collection 001',
    'featured.desc': 'Our inaugural collection brings together four distinctive voices in Egyptian and Mediterranean photography.',
    'featured.viewAll': 'View All Works',
    
    // How It Works
    'process.tagline': 'The Process',
    'process.title': 'How It Works',
    'process.step1.title': 'Select',
    'process.step1.desc': 'Choose your artwork and preferred size. Framed or unframed.',
    'process.step2.title': 'Authenticate',
    'process.step2.desc': 'Each print is numbered, signed, and comes with a certificate.',
    'process.step3.title': 'Print',
    'process.step3.desc': 'Museum-grade giclée printing on archival cotton paper.',
    'process.step4.title': 'Deliver',
    'process.step4.desc': 'White-glove delivery to your door within 7-14 days.',
    
    // Studio Standard
    'standard.tagline': 'The Olive Studios Standard',
    'standard.title': 'Crafted for High-Status Interiors',
    'standard.desc': 'Every print that leaves our studio meets the exacting standards required for museum acquisition. Designed to live beautifully in the finest homes and offices.',
    'standard.paper': 'Hahnemühle Photo Rag 308gsm',
    'standard.inks': 'Archival Pigment Inks',
    'standard.certificate': 'Certificate of Authenticity',
    'standard.framing': 'Optional Museum Framing',
    
    // Newsletter
    'newsletter.tagline': 'VIP Preview',
    'newsletter.title': 'First Access to New Drops',
    'newsletter.desc': 'Join our mailing list for early access to new collections, artist features, and exclusive private viewings.',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Subscribe',
    'newsletter.privacy': 'We respect your privacy. Unsubscribe at any time.',
    
    // Instagram
    'instagram.title': 'Follow the Studio',
    
    // Collection Page
    'collection.tagline': 'Now Available',
    'collection.title': 'Collection 001',
    'collection.desc': 'Eight works by four photographers. Limited editions capturing the spirit of Egypt and the Mediterranean.',
    'collection.filter.size': 'Size:',
    'collection.filter.allSizes': 'All Sizes',
    'collection.filter.style': 'Style:',
    'collection.filter.allStyles': 'All Styles',
    'collection.filter.framed': 'Framed',
    'collection.filter.unframed': 'Unframed',
    'collection.noResults': 'No works match your current filters.',
    
    // Product Card
    'product.from': 'From',
    'product.edition': 'Edition of',
    
    // Product Detail
    'product.backToCollection': 'Back to Collection',
    'product.sizeLabel': 'Size (cm)',
    'product.frameLabel': 'Frame',
    'product.unframed': 'Unframed',
    'product.oakFrame': 'Oak Frame',
    'product.addToCart': 'Add to Cart',
    'product.whatsapp': 'Buy via WhatsApp Concierge',
    'product.freeDelivery': 'Free delivery in Greater Cairo · 7-14 days',
    'product.edition.label': 'Edition',
    'product.availability': 'Availability',
    'product.remaining': 'remaining',
    
    // Accordions
    'accordion.materials': 'Print Materials',
    'accordion.authentication': 'Authentication & Certificate',
    'accordion.shipping': 'Shipping & Returns',
    'accordion.artist': 'About the Artist',
    'accordion.viewWorks': 'View all works by',
    
    // Artists Page
    'artists.tagline': 'Our Collective',
    'artists.title': 'The Artists',
    'artists.desc': 'We work with photographers whose work transcends documentation to become art. Each brings a distinct perspective to the visual heritage of the region.',
    'artists.viewWorks': 'View Works',
    
    // About Page
    'about.tagline': 'About Us',
    'about.title': 'Elevating Regional Photography into Collectible Art',
    'about.story1': 'Olive Studios was founded with a simple conviction: the photographers of Egypt and the Mediterranean deserve the same platform and quality that their international peers enjoy.',
    'about.story2': 'Too often, remarkable work remains unseen outside gallery walls or Instagram feeds. We bridge that gap—producing museum-grade editions that transform photographs into heirloom art objects.',
    'about.story3': 'Every print in our collection is produced to the same standards as leading international galleries. Hahnemühle papers, archival inks, individual quality control, and authentic certificates. Locally curated, globally executed.',
    'about.story4': 'Our mission is twofold: to give collectors access to exceptional, authenticated photography—and to create meaningful opportunities for artists to reach discerning audiences.',
    'about.story5': 'We believe in limited editions because scarcity creates value. We believe in white-glove service because the buying experience should match the quality of the art.',
    'about.story6': 'Whether you\'re decorating a villa in Sahel or an office in Sheikh Zayed, building a collection, or giving a meaningful gift—we\'re here to guide you to the right piece.',
    'about.values.title': 'Our Values',
    'about.value1.title': 'Quality Without Compromise',
    'about.value1.desc': 'Museum-grade materials and processes, no exceptions. Every print is produced to collection standards.',
    'about.value2.title': 'Authenticity',
    'about.value2.desc': 'Limited editions, signed certificates, and transparent provenance. Every print has a story and a number.',
    'about.value3.title': 'Cultural Fluency',
    'about.value3.desc': 'We champion photographers from Egypt and the Mediterranean, bringing their vision to a global standard.',
    'about.cta.title': 'Ready to Start Your Collection?',
    'about.cta.desc': 'Browse our current collection or speak with our concierge for personalized recommendations.',
    'about.cta.browse': 'Browse Collection',
    'about.cta.contact': 'Contact Us',
    
    // Print Quality Page
    'quality.tagline': 'Our Commitment',
    'quality.title': 'Museum-Grade Quality',
    'quality.desc': 'We print only on the finest archival materials, using techniques trusted by leading galleries and collectors worldwide.',
    'quality.standard.tagline': 'The Studio Standard',
    'quality.standard.title': 'Crafted for Generations',
    'quality.standard.desc1': 'Every print that leaves our studio meets the exacting standards required for museum acquisition. We believe art should be preserved for generations, not decades.',
    'quality.standard.desc2': 'Our printing partners have produced work for the British Museum, Tate Modern, and major private collections. The same expertise is applied to every Olive Studios edition.',
    'quality.lightfast': '100+ Year Lightfastness',
    'quality.lightfast.desc': 'Archival pigment inks certified to resist fading for over a century.',
    'quality.acidfree': 'Acid-Free Materials',
    'quality.acidfree.desc': 'From paper to mounting, every component is museum-grade acid-free.',
    'quality.qc': 'Individual QC',
    'quality.qc.desc': 'Each print is inspected and approved before shipping.',
    'quality.signed': 'Signed & Numbered',
    'quality.signed.desc': 'Hand-signed by the artist with edition number and certificate.',
    'quality.materials': 'Materials',
    'quality.materials.desc': 'The finest papers and inks, sourced from the world\'s leading manufacturers.',
    'quality.paper.title': 'Hahnemühle Photo Rag',
    'quality.paper.subtitle': '308 gsm Cotton Paper',
    'quality.paper.desc': 'Made in Germany for over 400 years. 100% cotton rag, acid-free, with a subtle matte finish that brings depth to every image.',
    'quality.inks.title': 'Archival Pigment Inks',
    'quality.inks.subtitle': '12-Color Giclée System',
    'quality.inks.desc': 'Premium pigment inks that deliver exceptional color accuracy and density. Tested to maintain vibrancy for 100+ years under museum conditions.',
    'quality.frames.title': 'Solid Oak Frames',
    'quality.frames.subtitle': 'European Hardwood',
    'quality.frames.desc': 'Sustainably sourced European oak with a natural finish. UV-protective museum glass keeps your print safe from harmful light.',
    'quality.process': 'The Process',
    
    // Corporate Page
    'corporate.tagline': 'For Business',
    'corporate.title': 'Corporate & Interior Designers',
    'corporate.desc': 'Curated art packages for offices, hotels, and residential projects. Bulk pricing, dedicated account management, and installation services.',
    'corporate.offices': 'Corporate Offices',
    'corporate.offices.desc': 'Transform your workspace with meaningful art. We curate collections that reflect your brand values and inspire your team.',
    'corporate.hotels': 'Hotels & Hospitality',
    'corporate.hotels.desc': 'Create distinctive spaces with region-specific photography. From lobbies to suites, we provide cohesive visual stories.',
    'corporate.designers': 'Interior Designers',
    'corporate.designers.desc': 'Partner with us for client projects. Trade pricing, dedicated support, and a curated selection of works.',
    'corporate.packages.title': 'Curated Packages',
    'corporate.package.founder': 'Founder Office Set',
    'corporate.package.founder.desc': '2 premium prints curated for executive spaces',
    'corporate.package.reception': 'Reception Statement Set',
    'corporate.package.reception.desc': '3 prints designed to make an impression',
    'corporate.package.boardroom': 'Boardroom Set',
    'corporate.package.boardroom.desc': '4 prints for meeting and conference rooms',
    'corporate.offer.title': 'What We Offer',
    'corporate.offer.curated': 'Curated Packages',
    'corporate.offer.curated.desc': 'Tell us about your space and vision. We\'ll propose a selection of works, sizes, and framing options tailored to your project.',
    'corporate.offer.pricing': 'Bulk Pricing',
    'corporate.offer.pricing.desc': 'Significant discounts for orders of 5+ prints. Custom pricing for large-scale hospitality and commercial projects.',
    'corporate.offer.custom': 'Custom Editions',
    'corporate.offer.custom.desc': 'For exclusive projects, we can work with artists to create unique editions or sizes not available in our standard collection.',
    'corporate.offer.installation': 'Installation Services',
    'corporate.offer.installation.desc': 'Our team handles delivery, placement, and professional hanging for projects in Greater Cairo and Alexandria.',
    'corporate.offer.invoicing': 'Invoicing & Terms',
    'corporate.offer.invoicing.desc': 'Flexible payment terms for corporate clients. VAT invoicing available.',
    'corporate.form.title': 'Request a Consultation',
    'corporate.form.name': 'Name',
    'corporate.form.company': 'Company',
    'corporate.form.email': 'Email',
    'corporate.form.phone': 'Phone',
    'corporate.form.type': 'Project Type',
    'corporate.form.type.select': 'Select project type',
    'corporate.form.type.office': 'Corporate Office',
    'corporate.form.type.hotel': 'Hotel / Hospitality',
    'corporate.form.type.residential': 'Residential Project',
    'corporate.form.type.retail': 'Retail Space',
    'corporate.form.type.other': 'Other',
    'corporate.form.message': 'Message',
    'corporate.form.message.placeholder': 'Tell us about your project, timeline, and any specific requirements...',
    'corporate.form.submit': 'Send Inquiry',
    'corporate.form.whatsapp': 'Or reach us directly via WhatsApp for immediate assistance',
    'corporate.form.whatsappBtn': 'WhatsApp Corporate Team',
    
    // Shipping Page
    'shipping.title': 'Shipping & Returns',
    'shipping.desc': 'We take the same care in delivering your art as we do in creating it. Clear policies, secure packaging, and dedicated support.',
    'shipping.free': 'Free Cairo Delivery',
    'shipping.free.desc': 'White-glove service in Greater Cairo',
    'shipping.time': '7-14 Days',
    'shipping.time.desc': 'Production and delivery time',
    'shipping.damage': 'Damage Replacement',
    'shipping.damage.desc': 'Full replacement for transit damage',
    'shipping.payment': 'Flexible Payment',
    'shipping.payment.desc': 'Cards, bank transfer, or deposit',
    'shipping.egypt.title': 'Delivery Within Egypt',
    'shipping.cairo': 'Greater Cairo (New Cairo, Maadi, Zamalek, Sheikh Zayed, 6th October):',
    'shipping.cairo.desc': 'Free white-glove delivery. Your print arrives with a dedicated handler who ensures safe handover. Installation services available upon request.',
    'shipping.alex': 'Alexandria & North Coast:',
    'shipping.alex.desc': 'Flat rate of 250 EGP. Secure courier delivery with tracking.',
    'shipping.other': 'Other Governorates:',
    'shipping.other.desc': 'Flat rate of 400 EGP. Secure courier delivery with tracking and insurance.',
    'shipping.production': 'Production Time:',
    'shipping.production.desc': 'All prints are made to order. Please allow 7-14 business days from order confirmation to delivery. Framed prints may require an additional 3-5 days.',
    'shipping.packaging.title': 'Packaging',
    'shipping.unframed': 'Unframed Prints:',
    'shipping.unframed.desc': 'Shipped flat in rigid acid-free packaging with protective tissue. Outer cardboard box reinforced at corners.',
    'shipping.framed': 'Framed Prints:',
    'shipping.framed.desc': 'Custom wooden crate with foam padding. Glass protected with painter\'s tape to prevent shattering in transit.',
    'shipping.returns.title': 'Returns & Replacements',
    'shipping.transit': 'Damage in Transit:',
    'shipping.transit.desc': 'If your print arrives damaged, contact us within 48 hours with photographs. We will produce and ship a replacement at no additional cost.',
    'shipping.quality': 'Quality Issues:',
    'shipping.quality.desc': 'If you believe your print has a defect, please contact us. We stand behind our quality and will assess any concerns promptly.',
    'shipping.mind': 'Change of Mind:',
    'shipping.mind.desc': 'As prints are produced to order, we cannot accept returns for change of mind. We encourage customers to speak with our concierge before purchasing to ensure the right fit.',
    'shipping.options.title': 'Payment Options',
    'shipping.cards': 'Credit/Debit Cards:',
    'shipping.cards.desc': 'We accept Visa, Mastercard, and local Egyptian bank cards through our secure checkout.',
    'shipping.transfer': 'Bank Transfer:',
    'shipping.transfer.desc': 'Available for orders over 5,000 EGP. Contact us for account details.',
    'shipping.cod': 'Deposit + Cash on Delivery:',
    'shipping.cod.desc': 'For orders in Greater Cairo, we offer a 50% deposit with the balance paid on delivery in cash or card.',
    'shipping.questions': 'Questions?',
    'shipping.questions.desc': 'Our concierge is available to assist with any shipping or delivery questions.',
    'shipping.whatsapp': 'Contact via WhatsApp',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.desc': 'Questions about a piece? Need help choosing the right size? Our concierge is here to assist.',
    'contact.info': 'Contact Information',
    'contact.whatsapp': 'WhatsApp Concierge',
    'contact.whatsapp.desc': 'Fastest response. Available 10am-8pm Cairo time.',
    'contact.email': 'Email',
    'contact.email.desc': 'For detailed inquiries and documentation.',
    'contact.instagram': 'Instagram',
    'contact.instagram.desc': 'Follow for new releases and behind-the-scenes.',
    'contact.location': 'Location',
    'contact.location.city': 'Cairo, Egypt',
    'contact.location.note': 'By appointment only',
    'contact.form.title': 'Send a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.subject.select': 'Select a topic',
    'contact.form.subject.purchase': 'Purchasing Inquiry',
    'contact.form.subject.artwork': 'Question about an Artwork',
    'contact.form.subject.shipping': 'Shipping Question',
    'contact.form.subject.corporate': 'Corporate/Designer Inquiry',
    'contact.form.subject.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'How can we help?',
    'contact.form.submit': 'Send Message',
    'contact.form.response': 'We respond to all inquiries within 24 hours.',
    
    // Footer
    'footer.desc': 'Museum-grade photography editions from Egypt & the Mediterranean. Limited runs, exceptional quality.',
    'footer.shop': 'Shop',
    'footer.resources': 'Resources',
    'footer.help': 'Help',
    'footer.receiveLatest': 'Receive the latest',
    'footer.newsletterPromo': 'New drops, artist stories & exclusive previews.',
    'footer.copyright': '© 2026 Olive Studios. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Footer Navigation
    'nav.bespoke': 'Bespoke Inquiries',
    'nav.reviews': 'Reviews',
    'nav.care': 'Care & Installation',
    'nav.faqs': 'FAQs',
    'nav.shippingReturns': 'Shipping & Returns',
    
    // Cart
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.browse': 'Browse Collection',
    'cart.subtotal': 'Subtotal',
    'cart.shippingNote': 'Shipping calculated at checkout',
    'cart.checkout': 'Proceed to Checkout',
    'cart.whatsapp': 'Complete via WhatsApp',
    
    // Care & Installation Page
    'care.title': 'Care & Installation',
    'care.subtitle': 'Your print is crafted to last generations. With proper care and placement, it will remain vibrant for over a century.',
    'care.overview.light': 'Avoid Direct Sunlight',
    'care.overview.lightDesc': 'Prevents fading and preserves colors',
    'care.overview.humidity': 'Control Humidity',
    'care.overview.humidityDesc': 'Keep between 30-50% relative humidity',
    'care.overview.handling': 'Handle with Care',
    'care.overview.handlingDesc': 'Always wear cotton gloves when handling',
    'care.unpacking.title': 'Unpacking Your Print',
    'care.unpacking.p1': 'Place the package on a clean, flat surface before opening. Use a blade to carefully cut the outer packaging—avoid cutting too deep to prevent scratching.',
    'care.unpacking.p2': 'Remove the protective tissue paper slowly. If your print is framed, hold it by the frame edges only—never touch the glass or print surface.',
    'care.unpacking.p3': 'For unframed prints, handle only by the edges or borders. Cotton gloves are recommended to prevent fingerprints and oils from transferring to the paper.',
    'care.installation.title': 'Installation Guidelines',
    'care.installation.location': 'Choosing the Right Location',
    'care.installation.locationDesc': 'Avoid walls that receive direct sunlight, are near heating vents, or experience high humidity (bathrooms, kitchens). Interior walls with stable temperatures are ideal.',
    'care.installation.height': 'Hanging Height',
    'care.installation.heightDesc': 'The center of the artwork should be at eye level—approximately 145-150 cm from the floor. For seating areas, lower this to 120-130 cm.',
    'care.installation.hardware': 'Mounting Hardware',
    'care.installation.hardwareDesc': 'Use appropriate wall anchors for your wall type (drywall, concrete, brick). We recommend two-point hanging for larger pieces to ensure level display.',
    'care.installation.service': 'Professional Installation',
    'care.installation.serviceDesc': 'For Greater Cairo orders, we offer professional installation services. Our team will hang your artwork at the perfect height and ensure it\'s level and secure.',
    'care.environment.title': 'Environmental Considerations',
    'care.environment.light': 'Light Exposure',
    'care.environment.lightDesc': 'While our archival inks are rated for 100+ years, direct sunlight accelerates fading. Use curtains or UV-filtering glass for rooms with significant natural light. LED lighting is preferred over halogen or incandescent.',
    'care.environment.humidity': 'Humidity Control',
    'care.environment.humidityDesc': 'Paper is hygroscopic and responds to moisture. Maintain relative humidity between 30-50%. Avoid hanging prints in bathrooms or near frequently used kitchens.',
    'care.environment.temperature': 'Temperature Stability',
    'care.environment.temperatureDesc': 'Avoid hanging artwork near air conditioning vents, heaters, or fireplaces. Stable temperatures between 18-24°C are ideal. Rapid temperature changes can cause the paper to expand and contract.',
    'care.cleaning.title': 'Cleaning & Maintenance',
    'care.cleaning.framed': 'Framed Prints',
    'care.cleaning.framedDesc': 'Dust the frame with a soft, dry cloth. For glass cleaning, spray a small amount of glass cleaner onto a microfiber cloth—never directly onto the glass—and wipe gently.',
    'care.cleaning.unframed': 'Unframed Prints',
    'care.cleaning.unframedDesc': 'Do not attempt to clean the print surface. If dust accumulates, use a very soft brush (like a camera lens brush) with gentle, sweeping motions.',
    'care.cleaning.avoid': 'What to Avoid',
    'care.cleaning.avoidDesc': 'Never use water, household cleaners, or abrasive materials on prints. Do not attempt to repair tears or damage yourself—contact us for professional restoration advice.',
    'care.framing.title': 'Framing Recommendations',
    'care.framing.p1': 'If you purchased an unframed print and wish to frame it yourself, we recommend using acid-free materials throughout: acid-free mat board, backing, and tape. Museum-quality UV-protective glass or acrylic will significantly extend the life of your print.',
    'care.framing.p2': 'Ask your framer to use archival hinging methods rather than dry mounting, which is irreversible. The print should "float" within the frame, allowing the paper to naturally expand and contract with humidity changes.',
    'care.cta.title': 'Need Installation Assistance?',
    'care.cta.subtitle': 'Our team offers professional installation services in Greater Cairo. Contact us to schedule.',
    'care.cta.button': 'Contact via WhatsApp',
    
    // Reviews Page
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'Hear from collectors who have transformed their spaces with our museum-grade prints.',
    'reviews.averageRating': 'Average Rating',
    'reviews.happyCollectors': 'Happy Collectors',
    'reviews.satisfaction': 'Satisfaction Rate',
    'reviews.purchased': 'Purchased',
    'reviews.cta.title': 'Ready to Join Our Collectors?',
    'reviews.cta.subtitle': 'Browse our collection and find the perfect piece for your space.',
    'reviews.cta.button': 'Browse Collection',
    
    // Common
    'common.viewMore': 'View More',
    'common.learnMore': 'Learn More',
    'common.close': 'Close',
    'common.menu': 'Menu',
  },
  ar: {
    // Navigation
    'nav.collection': 'المجموعة',
    'nav.artists': 'الفنانون',
    'nav.about': 'من نحن',
    'nav.quality': 'جودة الطباعة',
    'nav.shipping': 'الشحن',
    'nav.corporate': 'الشركات',
    'nav.contact': 'تواصل معنا',
    
    // Hero
    'hero.tagline': 'المجموعة ٠٠١ · متاحة الآن',
    'hero.title': 'طبعات فوتوغرافية بجودة المتاحف من مصر والبحر المتوسط',
    'hero.subtitle': 'طبعات محدودة من أبرز مصوري المنطقة. جودة أرشيفية. إصدارات موثقة. توصيل مميز.',
    'hero.cta.shop': 'تصفح المجموعة',
    'hero.cta.vip': 'انضم لقائمة كبار العملاء',
    
    // Trust Pillars
    'trust.museum.title': 'طباعة بجودة المتاحف',
    'trust.museum.desc': 'طبعات جيكلي على ورق هاينيموهلي الأرشيفي. مصممة لتدوم أكثر من ١٠٠ عام.',
    'trust.edition.title': 'إصدارات محدودة',
    'trust.edition.desc': 'كل طبعة مرقمة وموقعة. شهادة أصالة مرفقة.',
    'trust.delivery.title': 'توصيل مميز',
    'trust.delivery.desc': 'توصيل مجاني في القاهرة الكبرى. تغليف احترافي لجميع المحافظات.',
    
    // Featured
    'featured.tagline': 'أعمال مختارة',
    'featured.title': 'المجموعة ٠٠١',
    'featured.desc': 'مجموعتنا الافتتاحية تجمع أربعة أصوات مميزة في التصوير الفوتوغرافي المصري والمتوسطي.',
    'featured.viewAll': 'عرض جميع الأعمال',
    
    // How It Works
    'process.tagline': 'العملية',
    'process.title': 'كيف يعمل',
    'process.step1.title': 'اختر',
    'process.step1.desc': 'اختر العمل الفني والمقاس المفضل. مع إطار أو بدون.',
    'process.step2.title': 'توثيق',
    'process.step2.desc': 'كل طبعة مرقمة وموقعة ومرفقة بشهادة.',
    'process.step3.title': 'طباعة',
    'process.step3.desc': 'طباعة جيكلي بجودة المتاحف على ورق قطني أرشيفي.',
    'process.step4.title': 'توصيل',
    'process.step4.desc': 'توصيل مميز إلى باب منزلك خلال ٧-١٤ يوماً.',
    
    // Studio Standard
    'standard.tagline': 'معيار أوليف ستوديوز',
    'standard.title': 'مصممة للديكورات الراقية',
    'standard.desc': 'كل طبعة تخرج من استوديونا تلبي المعايير الصارمة المطلوبة لاقتناء المتاحف. مصممة لتزين أرقى المنازل والمكاتب.',
    'standard.paper': 'ورق هاينيموهلي فوتو راغ ٣٠٨ جم',
    'standard.inks': 'أحبار صبغية أرشيفية',
    'standard.certificate': 'شهادة أصالة',
    'standard.framing': 'تأطير متحفي اختياري',
    
    // Newsletter
    'newsletter.tagline': 'معاينة حصرية',
    'newsletter.title': 'أولوية الوصول للإصدارات الجديدة',
    'newsletter.desc': 'انضم لقائمتنا البريدية للوصول المبكر للمجموعات الجديدة وملفات الفنانين والعروض الحصرية.',
    'newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'newsletter.button': 'اشترك',
    'newsletter.privacy': 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.',
    
    // Instagram
    'instagram.title': 'تابع الاستوديو',
    
    // Collection Page
    'collection.tagline': 'متاحة الآن',
    'collection.title': 'المجموعة ٠٠١',
    'collection.desc': 'ثمانية أعمال من أربعة مصورين. إصدارات محدودة تلتقط روح مصر والبحر المتوسط.',
    'collection.filter.size': 'المقاس:',
    'collection.filter.allSizes': 'جميع المقاسات',
    'collection.filter.style': 'النمط:',
    'collection.filter.allStyles': 'جميع الأنماط',
    'collection.filter.framed': 'مع إطار',
    'collection.filter.unframed': 'بدون إطار',
    'collection.noResults': 'لا توجد أعمال تطابق الفلاتر الحالية.',
    
    // Product Card
    'product.from': 'من',
    'product.edition': 'إصدار من',
    
    // Product Detail
    'product.backToCollection': 'العودة للمجموعة',
    'product.sizeLabel': 'المقاس (سم)',
    'product.frameLabel': 'الإطار',
    'product.unframed': 'بدون إطار',
    'product.oakFrame': 'إطار بلوط',
    'product.addToCart': 'أضف للسلة',
    'product.whatsapp': 'اشتر عبر واتساب',
    'product.freeDelivery': 'توصيل مجاني في القاهرة الكبرى · ٧-١٤ يوم',
    'product.edition.label': 'الإصدار',
    'product.availability': 'التوفر',
    'product.remaining': 'متبقي',
    
    // Accordions
    'accordion.materials': 'مواد الطباعة',
    'accordion.authentication': 'التوثيق والشهادة',
    'accordion.shipping': 'الشحن والإرجاع',
    'accordion.artist': 'عن الفنان',
    'accordion.viewWorks': 'عرض جميع أعمال',
    
    // Artists Page
    'artists.tagline': 'فريقنا',
    'artists.title': 'الفنانون',
    'artists.desc': 'نعمل مع مصورين تتجاوز أعمالهم التوثيق لتصبح فناً. كل منهم يقدم منظوراً مميزاً للتراث البصري للمنطقة.',
    'artists.viewWorks': 'عرض الأعمال',
    
    // About Page
    'about.tagline': 'من نحن',
    'about.title': 'رفع التصوير الإقليمي إلى فن قابل للاقتناء',
    'about.story1': 'تأسس أوليف ستوديوز بقناعة بسيطة: مصورو مصر والبحر المتوسط يستحقون نفس المنصة والجودة التي يتمتع بها نظراؤهم الدوليون.',
    'about.story2': 'كثيراً ما تبقى الأعمال المميزة غير مرئية خارج جدران المعارض أو صفحات إنستغرام. نحن نسد هذه الفجوة—بإنتاج إصدارات بجودة المتاحف تحول الصور إلى قطع فنية موروثة.',
    'about.story3': 'كل طبعة في مجموعتنا تُنتج بنفس معايير المعارض الدولية الرائدة. أوراق هاينيموهلي، أحبار أرشيفية، مراقبة جودة فردية، وشهادات أصلية. منسقة محلياً، منفذة عالمياً.',
    'about.story4': 'مهمتنا ذات شقين: منح هواة الجمع الوصول لتصوير استثنائي موثق—وخلق فرص ذات معنى للفنانين للوصول لجماهير متذوقة.',
    'about.story5': 'نؤمن بالإصدارات المحدودة لأن الندرة تخلق القيمة. نؤمن بالخدمة المميزة لأن تجربة الشراء يجب أن تتناسب مع جودة الفن.',
    'about.story6': 'سواء كنت تزين فيلا في الساحل أو مكتباً في الشيخ زايد، تبني مجموعة، أو تقدم هدية ذات معنى—نحن هنا لإرشادك للقطعة المناسبة.',
    'about.values.title': 'قيمنا',
    'about.value1.title': 'جودة بلا تنازل',
    'about.value1.desc': 'مواد وعمليات بجودة المتاحف، بلا استثناءات. كل طبعة تُنتج بمعايير الاقتناء.',
    'about.value2.title': 'الأصالة',
    'about.value2.desc': 'إصدارات محدودة، شهادات موقعة، ومصدر شفاف. كل طبعة لها قصة ورقم.',
    'about.value3.title': 'الطلاقة الثقافية',
    'about.value3.desc': 'ندعم مصوري مصر والبحر المتوسط، نرفع رؤيتهم لمعيار عالمي.',
    'about.cta.title': 'مستعد لبدء مجموعتك؟',
    'about.cta.desc': 'تصفح مجموعتنا الحالية أو تحدث مع مستشارنا للتوصيات الشخصية.',
    'about.cta.browse': 'تصفح المجموعة',
    'about.cta.contact': 'تواصل معنا',
    
    // Print Quality Page
    'quality.tagline': 'التزامنا',
    'quality.title': 'جودة المتاحف',
    'quality.desc': 'نطبع فقط على أفضل المواد الأرشيفية، باستخدام تقنيات موثوقة من المعارض وهواة الجمع حول العالم.',
    'quality.standard.tagline': 'معيار الاستوديو',
    'quality.standard.title': 'مصنوعة لأجيال',
    'quality.standard.desc1': 'كل طبعة تخرج من استوديونا تلبي المعايير الصارمة المطلوبة لاقتناء المتاحف. نؤمن أن الفن يجب أن يُحفظ لأجيال، وليس لعقود فقط.',
    'quality.standard.desc2': 'شركاء الطباعة لدينا أنتجوا أعمالاً للمتحف البريطاني، تيت مودرن، ومجموعات خاصة كبرى. نفس الخبرة تُطبق على كل إصدار من أوليف ستوديوز.',
    'quality.lightfast': 'ثبات ضوئي ١٠٠+ سنة',
    'quality.lightfast.desc': 'أحبار صبغية أرشيفية معتمدة لمقاومة البهتان لأكثر من قرن.',
    'quality.acidfree': 'مواد خالية من الحمض',
    'quality.acidfree.desc': 'من الورق للتثبيت، كل مكون بجودة متحفية خالٍ من الحمض.',
    'quality.qc': 'مراقبة جودة فردية',
    'quality.qc.desc': 'كل طبعة تُفحص وتُوافق قبل الشحن.',
    'quality.signed': 'موقعة ومرقمة',
    'quality.signed.desc': 'موقعة يدوياً من الفنان مع رقم الإصدار والشهادة.',
    'quality.materials': 'المواد',
    'quality.materials.desc': 'أفضل الأوراق والأحبار، من كبار المصنعين العالميين.',
    'quality.paper.title': 'ورق هاينيموهلي فوتو راغ',
    'quality.paper.subtitle': 'ورق قطني ٣٠٨ جم',
    'quality.paper.desc': 'يُصنع في ألمانيا منذ أكثر من ٤٠٠ عام. قطن ١٠٠٪، خالٍ من الحمض، بسطح مطفي ناعم يضيف عمقاً لكل صورة.',
    'quality.inks.title': 'أحبار صبغية أرشيفية',
    'quality.inks.subtitle': 'نظام جيكلي ١٢ لون',
    'quality.inks.desc': 'أحبار صبغية فاخرة تقدم دقة ألوان وكثافة استثنائية. مختبرة للحفاظ على الحيوية لأكثر من ١٠٠ سنة في ظروف المتاحف.',
    'quality.frames.title': 'إطارات بلوط صلب',
    'quality.frames.subtitle': 'خشب صلب أوروبي',
    'quality.frames.desc': 'بلوط أوروبي مستدام بتشطيب طبيعي. زجاج متحفي واقٍ من الأشعة فوق البنفسجية يحمي طبعتك من الضوء الضار.',
    'quality.process': 'العملية',
    
    // Corporate Page
    'corporate.tagline': 'للأعمال',
    'corporate.title': 'الشركات ومصممي الديكور',
    'corporate.desc': 'باقات فنية منسقة للمكاتب والفنادق والمشاريع السكنية. أسعار الجملة، إدارة حساب مخصصة، وخدمات التركيب.',
    'corporate.offices': 'المكاتب التجارية',
    'corporate.offices.desc': 'حوّل مساحة عملك بفن ذي معنى. ننسق مجموعات تعكس قيم علامتك التجارية وتلهم فريقك.',
    'corporate.hotels': 'الفنادق والضيافة',
    'corporate.hotels.desc': 'أنشئ مساحات مميزة بتصوير خاص بالمنطقة. من البهو للأجنحة، نقدم قصصاً بصرية متناسقة.',
    'corporate.designers': 'مصممي الديكور',
    'corporate.designers.desc': 'شاركنا في مشاريع العملاء. أسعار خاصة، دعم مخصص، ومجموعة أعمال منتقاة.',
    'corporate.packages.title': 'باقات منسقة',
    'corporate.package.founder': 'مجموعة مكتب المؤسس',
    'corporate.package.founder.desc': 'طبعتان فاخرتان منسقتان للمساحات التنفيذية',
    'corporate.package.reception': 'مجموعة الاستقبال',
    'corporate.package.reception.desc': '٣ طبعات مصممة لترك انطباع',
    'corporate.package.boardroom': 'مجموعة غرفة الاجتماعات',
    'corporate.package.boardroom.desc': '٤ طبعات لغرف الاجتماعات والمؤتمرات',
    'corporate.offer.title': 'ما نقدمه',
    'corporate.offer.curated': 'باقات منسقة',
    'corporate.offer.curated.desc': 'أخبرنا عن مساحتك ورؤيتك. سنقترح مجموعة أعمال ومقاسات وخيارات تأطير مصممة لمشروعك.',
    'corporate.offer.pricing': 'أسعار الجملة',
    'corporate.offer.pricing.desc': 'خصومات كبيرة للطلبات من ٥+ طبعات. أسعار خاصة للمشاريع الفندقية والتجارية الكبيرة.',
    'corporate.offer.custom': 'إصدارات مخصصة',
    'corporate.offer.custom.desc': 'للمشاريع الحصرية، يمكننا العمل مع الفنانين لإنشاء إصدارات أو مقاسات فريدة غير متاحة في مجموعتنا القياسية.',
    'corporate.offer.installation': 'خدمات التركيب',
    'corporate.offer.installation.desc': 'فريقنا يتولى التوصيل والوضع والتعليق الاحترافي للمشاريع في القاهرة الكبرى والإسكندرية.',
    'corporate.offer.invoicing': 'الفوترة والشروط',
    'corporate.offer.invoicing.desc': 'شروط دفع مرنة للعملاء من الشركات. فوترة ضريبة القيمة المضافة متاحة.',
    'corporate.form.title': 'اطلب استشارة',
    'corporate.form.name': 'الاسم',
    'corporate.form.company': 'الشركة',
    'corporate.form.email': 'البريد الإلكتروني',
    'corporate.form.phone': 'الهاتف',
    'corporate.form.type': 'نوع المشروع',
    'corporate.form.type.select': 'اختر نوع المشروع',
    'corporate.form.type.office': 'مكتب تجاري',
    'corporate.form.type.hotel': 'فندق / ضيافة',
    'corporate.form.type.residential': 'مشروع سكني',
    'corporate.form.type.retail': 'مساحة تجزئة',
    'corporate.form.type.other': 'أخرى',
    'corporate.form.message': 'الرسالة',
    'corporate.form.message.placeholder': 'أخبرنا عن مشروعك، الجدول الزمني، وأي متطلبات محددة...',
    'corporate.form.submit': 'أرسل الاستفسار',
    'corporate.form.whatsapp': 'أو تواصل معنا مباشرة عبر واتساب للمساعدة الفورية',
    'corporate.form.whatsappBtn': 'واتساب فريق الشركات',
    
    // Shipping Page
    'shipping.title': 'الشحن والإرجاع',
    'shipping.desc': 'نولي نفس العناية في توصيل فنك كما نفعل في إنشائه. سياسات واضحة، تغليف آمن، ودعم مخصص.',
    'shipping.free': 'توصيل مجاني للقاهرة',
    'shipping.free.desc': 'خدمة مميزة في القاهرة الكبرى',
    'shipping.time': '٧-١٤ يوم',
    'shipping.time.desc': 'وقت الإنتاج والتوصيل',
    'shipping.damage': 'استبدال الضرر',
    'shipping.damage.desc': 'استبدال كامل لأضرار النقل',
    'shipping.payment': 'دفع مرن',
    'shipping.payment.desc': 'بطاقات، تحويل بنكي، أو عربون',
    'shipping.egypt.title': 'التوصيل داخل مصر',
    'shipping.cairo': 'القاهرة الكبرى (القاهرة الجديدة، المعادي، الزمالك، الشيخ زايد، ٦ أكتوبر):',
    'shipping.cairo.desc': 'توصيل مميز مجاني. طبعتك تصل مع مندوب مخصص يضمن التسليم الآمن. خدمات التركيب متاحة عند الطلب.',
    'shipping.alex': 'الإسكندرية والساحل الشمالي:',
    'shipping.alex.desc': 'سعر ثابت ٢٥٠ جنيه. توصيل شحن آمن مع التتبع.',
    'shipping.other': 'المحافظات الأخرى:',
    'shipping.other.desc': 'سعر ثابت ٤٠٠ جنيه. توصيل شحن آمن مع التتبع والتأمين.',
    'shipping.production': 'وقت الإنتاج:',
    'shipping.production.desc': 'جميع الطبعات تُصنع حسب الطلب. يرجى السماح بـ ٧-١٤ يوم عمل من تأكيد الطلب للتوصيل. الطبعات المؤطرة قد تتطلب ٣-٥ أيام إضافية.',
    'shipping.packaging.title': 'التغليف',
    'shipping.unframed': 'الطبعات بدون إطار:',
    'shipping.unframed.desc': 'تُشحن مسطحة في تغليف صلب خالٍ من الحمض مع ورق حماية. صندوق كرتون خارجي معزز عند الزوايا.',
    'shipping.framed': 'الطبعات المؤطرة:',
    'shipping.framed.desc': 'صندوق خشبي مخصص مع حشو فوم. الزجاج محمي بشريط الدهان لمنع الكسر أثناء النقل.',
    'shipping.returns.title': 'الإرجاع والاستبدال',
    'shipping.transit': 'الضرر أثناء النقل:',
    'shipping.transit.desc': 'إذا وصلت طبعتك تالفة، تواصل معنا خلال ٤٨ ساعة مع صور. سننتج ونشحن بديلاً بدون تكلفة إضافية.',
    'shipping.quality': 'مشاكل الجودة:',
    'shipping.quality.desc': 'إذا كنت تعتقد أن طبعتك بها عيب، يرجى التواصل معنا. نقف وراء جودتنا وسنقيّم أي مخاوف بسرعة.',
    'shipping.mind': 'تغيير الرأي:',
    'shipping.mind.desc': 'نظراً لأن الطبعات تُصنع حسب الطلب، لا نقبل الإرجاع لتغيير الرأي. نشجع العملاء على التحدث مع مستشارنا قبل الشراء لضمان الملاءمة.',
    'shipping.options.title': 'خيارات الدفع',
    'shipping.cards': 'بطاقات الائتمان/الخصم:',
    'shipping.cards.desc': 'نقبل فيزا، ماستركارد، وبطاقات البنوك المصرية المحلية من خلال checkout الآمن.',
    'shipping.transfer': 'التحويل البنكي:',
    'shipping.transfer.desc': 'متاح للطلبات فوق ٥٠٠٠ جنيه. تواصل معنا لتفاصيل الحساب.',
    'shipping.cod': 'عربون + الدفع عند الاستلام:',
    'shipping.cod.desc': 'للطلبات في القاهرة الكبرى، نقدم عربون ٥٠٪ مع دفع الباقي عند الاستلام نقداً أو بالبطاقة.',
    'shipping.questions': 'أسئلة؟',
    'shipping.questions.desc': 'مستشارنا متاح للمساعدة في أي أسئلة عن الشحن أو التوصيل.',
    'shipping.whatsapp': 'تواصل عبر واتساب',
    
    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.desc': 'أسئلة عن قطعة؟ تحتاج مساعدة في اختيار المقاس المناسب؟ مستشارنا هنا للمساعدة.',
    'contact.info': 'معلومات التواصل',
    'contact.whatsapp': 'واتساب',
    'contact.whatsapp.desc': 'أسرع رد. متاح ١٠ص-٨م بتوقيت القاهرة.',
    'contact.email': 'البريد الإلكتروني',
    'contact.email.desc': 'للاستفسارات المفصلة والتوثيق.',
    'contact.instagram': 'إنستغرام',
    'contact.instagram.desc': 'تابع للإصدارات الجديدة وكواليس العمل.',
    'contact.location': 'الموقع',
    'contact.location.city': 'القاهرة، مصر',
    'contact.location.note': 'بموعد مسبق فقط',
    'contact.form.title': 'أرسل رسالة',
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.lastName': 'الاسم الأخير',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.subject.select': 'اختر موضوعاً',
    'contact.form.subject.purchase': 'استفسار شراء',
    'contact.form.subject.artwork': 'سؤال عن عمل فني',
    'contact.form.subject.shipping': 'سؤال عن الشحن',
    'contact.form.subject.corporate': 'استفسار شركات/مصممين',
    'contact.form.subject.other': 'أخرى',
    'contact.form.message': 'الرسالة',
    'contact.form.message.placeholder': 'كيف يمكننا المساعدة؟',
    'contact.form.submit': 'أرسل الرسالة',
    'contact.form.response': 'نرد على جميع الاستفسارات خلال ٢٤ ساعة.',
    
    // Footer
    'footer.desc': 'طبعات فوتوغرافية بجودة المتاحف من مصر والبحر المتوسط. إصدارات محدودة، جودة استثنائية.',
    'footer.shop': 'تسوق',
    'footer.resources': 'الموارد',
    'footer.help': 'المساعدة',
    'footer.receiveLatest': 'استلم آخر الأخبار',
    'footer.newsletterPromo': 'إصدارات جديدة، قصص الفنانين ومعاينات حصرية.',
    'footer.copyright': '© ٢٠٢٦ أوليف ستوديوز. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    
    // Footer Navigation
    'nav.bespoke': 'استفسارات مخصصة',
    'nav.reviews': 'التقييمات',
    'nav.care': 'العناية والتركيب',
    'nav.faqs': 'الأسئلة الشائعة',
    'nav.shippingReturns': 'الشحن والاسترجاع',
    
    // Cart
    'cart.title': 'سلتك',
    'cart.empty': 'سلتك فارغة',
    'cart.browse': 'تصفح المجموعة',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.shippingNote': 'الشحن يُحسب عند الدفع',
    'cart.checkout': 'المتابعة للدفع',
    'cart.whatsapp': 'أكمل عبر واتساب',
    
    // Care & Installation Page
    'care.title': 'العناية والتركيب',
    'care.subtitle': 'طبعتك مصممة لتدوم أجيالاً. مع العناية والوضع المناسبين، ستبقى نابضة بالحياة لأكثر من قرن.',
    'care.overview.light': 'تجنب أشعة الشمس المباشرة',
    'care.overview.lightDesc': 'يمنع البهتان ويحافظ على الألوان',
    'care.overview.humidity': 'التحكم في الرطوبة',
    'care.overview.humidityDesc': 'حافظ على رطوبة نسبية بين ٣٠-٥٠٪',
    'care.overview.handling': 'التعامل بعناية',
    'care.overview.handlingDesc': 'ارتدِ دائماً قفازات قطنية عند التعامل',
    'care.unpacking.title': 'فتح طبعتك',
    'care.unpacking.p1': 'ضع العبوة على سطح نظيف ومستوٍ قبل الفتح. استخدم شفرة لقطع العبوة الخارجية بحذر—تجنب القطع العميق لمنع الخدوش.',
    'care.unpacking.p2': 'أزل ورق الحماية ببطء. إذا كانت طبعتك مؤطرة، أمسكها من حواف الإطار فقط—لا تلمس الزجاج أو سطح الطبعة أبداً.',
    'care.unpacking.p3': 'للطبعات بدون إطار، أمسكها من الحواف أو الهوامش فقط. يُنصح بالقفازات القطنية لمنع نقل البصمات والزيوت إلى الورق.',
    'care.installation.title': 'إرشادات التركيب',
    'care.installation.location': 'اختيار المكان المناسب',
    'care.installation.locationDesc': 'تجنب الجدران التي تتعرض لأشعة الشمس المباشرة، أو القريبة من فتحات التدفئة، أو ذات الرطوبة العالية (الحمامات، المطابخ). الجدران الداخلية ذات درجات الحرارة المستقرة مثالية.',
    'care.installation.height': 'ارتفاع التعليق',
    'care.installation.heightDesc': 'يجب أن يكون مركز العمل الفني على مستوى العين—تقريباً ١٤٥-١٥٠ سم من الأرض. لمناطق الجلوس، اخفض هذا إلى ١٢٠-١٣٠ سم.',
    'care.installation.hardware': 'عتاد التثبيت',
    'care.installation.hardwareDesc': 'استخدم مثبتات الحائط المناسبة لنوع جدارك (جبس، خرسانة، طوب). نوصي بالتعليق من نقطتين للقطع الكبيرة لضمان العرض المستوي.',
    'care.installation.service': 'التركيب الاحترافي',
    'care.installation.serviceDesc': 'لطلبات القاهرة الكبرى، نقدم خدمات تركيب احترافية. فريقنا سيعلق عملك الفني على الارتفاع المثالي ويضمن أنه مستوٍ وآمن.',
    'care.environment.title': 'الاعتبارات البيئية',
    'care.environment.light': 'التعرض للضوء',
    'care.environment.lightDesc': 'بينما أحبارنا الأرشيفية مصنفة لأكثر من ١٠٠ سنة، أشعة الشمس المباشرة تسرع البهتان. استخدم ستائر أو زجاج مصفي للأشعة فوق البنفسجية للغرف ذات الإضاءة الطبيعية الكبيرة. إضاءة LED مفضلة على الهالوجين أو المتوهجة.',
    'care.environment.humidity': 'التحكم في الرطوبة',
    'care.environment.humidityDesc': 'الورق يستجيب للرطوبة. حافظ على رطوبة نسبية بين ٣٠-٥٠٪. تجنب تعليق الطبعات في الحمامات أو بالقرب من المطابخ المستخدمة كثيراً.',
    'care.environment.temperature': 'استقرار درجة الحرارة',
    'care.environment.temperatureDesc': 'تجنب تعليق الأعمال الفنية بالقرب من فتحات التكييف، السخانات، أو المدافئ. درجات حرارة مستقرة بين ١٨-٢٤ درجة مئوية مثالية. التغيرات السريعة في درجة الحرارة يمكن أن تتسبب في تمدد وانكماش الورق.',
    'care.cleaning.title': 'التنظيف والصيانة',
    'care.cleaning.framed': 'الطبعات المؤطرة',
    'care.cleaning.framedDesc': 'نظف الإطار بقطعة قماش ناعمة وجافة. لتنظيف الزجاج، رش كمية صغيرة من منظف الزجاج على قطعة قماش مايكروفايبر—ليس مباشرة على الزجاج—وامسح برفق.',
    'care.cleaning.unframed': 'الطبعات بدون إطار',
    'care.cleaning.unframedDesc': 'لا تحاول تنظيف سطح الطبعة. إذا تراكم الغبار، استخدم فرشاة ناعمة جداً (مثل فرشاة عدسة الكاميرا) بحركات مسح لطيفة.',
    'care.cleaning.avoid': 'ما يجب تجنبه',
    'care.cleaning.avoidDesc': 'لا تستخدم الماء أو المنظفات المنزلية أو المواد الكاشطة على الطبعات. لا تحاول إصلاح التمزقات أو الأضرار بنفسك—اتصل بنا للحصول على نصيحة ترميم احترافية.',
    'care.framing.title': 'توصيات التأطير',
    'care.framing.p1': 'إذا اشتريت طبعة بدون إطار وترغب في تأطيرها بنفسك، نوصي باستخدام مواد خالية من الحمض في كل مكان: لوح تصاعد خالٍ من الحمض، ودعم، وشريط. زجاج أو أكريليك بجودة متحفية واقٍ من الأشعة فوق البنفسجية سيمدد عمر طبعتك بشكل كبير.',
    'care.framing.p2': 'اطلب من المؤطر استخدام طرق تعليق أرشيفية بدلاً من التثبيت الجاف، وهو غير قابل للعكس. يجب أن "تطفو" الطبعة داخل الإطار، مما يسمح للورق بالتمدد والانكماش طبيعياً مع تغيرات الرطوبة.',
    'care.cta.title': 'تحتاج مساعدة في التركيب؟',
    'care.cta.subtitle': 'فريقنا يقدم خدمات تركيب احترافية في القاهرة الكبرى. تواصل معنا لحجز موعد.',
    'care.cta.button': 'تواصل عبر واتساب',
    
    // Reviews Page
    'reviews.title': 'آراء العملاء',
    'reviews.subtitle': 'اسمع من هواة الجمع الذين حولوا مساحاتهم بطبعاتنا بجودة المتاحف.',
    'reviews.averageRating': 'متوسط التقييم',
    'reviews.happyCollectors': 'عملاء سعداء',
    'reviews.satisfaction': 'نسبة الرضا',
    'reviews.purchased': 'اشترى',
    'reviews.cta.title': 'مستعد للانضمام لهواة الجمع لدينا؟',
    'reviews.cta.subtitle': 'تصفح مجموعتنا وابحث عن القطعة المثالية لمساحتك.',
    'reviews.cta.button': 'تصفح المجموعة',
    
    // Common
    'common.viewMore': 'عرض المزيد',
    'common.learnMore': 'اعرف المزيد',
    'common.close': 'إغلاق',
    'common.menu': 'القائمة',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('olive-studios-language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('olive-studios-language', language);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add font class for Arabic
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language, direction]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};