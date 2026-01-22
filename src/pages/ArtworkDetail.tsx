import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Truck, Shield, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getProductById, getArtistById, type ProductVariant } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const artist = product ? getArtistById(product.artistId) : null;
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<'30×40' | '50×70' | '70×100'>('50×70');
  const [isFramed, setIsFramed] = useState(false);

  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return product.variants.find(
      v => v.size === selectedSize && v.framed === isFramed
    ) || product.variants[0];
  }, [product, selectedSize, isFramed]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price) + ' EGP';
  };

  if (!product) {
    return (
      <div className="section-padding">
        <div className="gallery-container text-center">
          <h1 className="font-serif text-2xl mb-4">Artwork not found</h1>
          <Button asChild variant="outline">
            <Link to="/collection">Return to Collection</Link>
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in "${product.title}" by ${product.artistName} (${selectedSize} cm, ${isFramed ? 'Framed' : 'Unframed'}) - ${formatPrice(selectedVariant?.price || 0)}`
  );

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant);
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="gallery-container py-4">
          <Link 
            to="/collection" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] bg-gallery-cream overflow-hidden sticky top-24">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <span className="text-xs tracking-ultra uppercase text-gallery-gold mb-2 block">
                  Collection {product.collectionNumber}
                </span>
                <h1 className="font-serif text-3xl md:text-4xl mb-2">{product.title}</h1>
                <Link 
                  to={`/artists/${product.artistId}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {product.artistName}
                </Link>
              </div>

              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{product.description}"
                </p>
              </div>

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">Edition</span>
                  <span className="font-serif text-lg">{product.editionsSold} / {product.editionSize}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">Availability</span>
                  <span className="font-serif text-lg">{product.editionSize - product.editionsSold} remaining</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <span className="text-sm font-medium mb-3 block">Size (cm)</span>
                <div className="flex gap-3">
                  {(['30×40', '50×70', '70×100'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border transition-colors ${
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frame Selector */}
              <div className="mb-8">
                <span className="text-sm font-medium mb-3 block">Frame</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsFramed(false)}
                    className={`px-6 py-3 border transition-colors ${
                      !isFramed
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    Unframed
                  </button>
                  <button
                    onClick={() => setIsFramed(true)}
                    className={`px-6 py-3 border transition-colors ${
                      isFramed
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    Oak Frame
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="font-serif text-3xl">
                  {selectedVariant && formatPrice(selectedVariant.price)}
                </span>
                <p className="text-sm text-muted-foreground mt-2">
                  Free delivery in Greater Cairo · 7-14 days
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 mb-8">
                <Button 
                  size="lg" 
                  className="btn-gallery-primary w-full"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <a
                  href={`https://wa.me/+201234567890?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gallery-outline w-full inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Buy via WhatsApp Concierge
                </a>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="materials">
                  <AccordionTrigger className="text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Print Materials
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Hahnemühle Photo Rag 308gsm</li>
                      <li>• Archival pigment inks (100+ year lightfastness)</li>
                      <li>• Museum-grade giclée printing</li>
                      <li>• Optional: Solid oak frame with UV-protective glass</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="authentication">
                  <AccordionTrigger className="text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Authentication & Certificate
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <p className="mb-3">
                      Every print includes a signed Certificate of Authenticity with:
                    </p>
                    <ul className="space-y-2">
                      <li>• Edition number and total run size</li>
                      <li>• Artist signature</li>
                      <li>• Unique holographic seal</li>
                      <li>• QR code linking to digital provenance record</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      Shipping & Returns
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Free white-glove delivery in Greater Cairo</li>
                      <li>• 7-14 business days production time</li>
                      <li>• Secure flat packaging for unframed prints</li>
                      <li>• Professional installation available</li>
                      <li>• Damage replacement guarantee</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="artist">
                  <AccordionTrigger className="text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      About the Artist
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <p className="mb-3">{artist?.bio}</p>
                    <Link 
                      to={`/artists/${product.artistId}`}
                      className="text-foreground link-underline inline-block"
                    >
                      View all works by {product.artistName}
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkDetail;