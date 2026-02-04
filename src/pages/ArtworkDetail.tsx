import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Truck, Shield, FileText, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getProductById, getArtistById } from '@/data/products';
import { useCartStore } from '@/stores/cartStore';
import { fetchProductByHandle, type ShopifyProduct } from '@/lib/shopify';
import { toast } from 'sonner';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const localProduct = getProductById(id || '');
  const artist = localProduct ? getArtistById(localProduct.artistId) : null;
  const { addItem, isLoading: cartLoading } = useCartStore();

  const [shopifyProduct, setShopifyProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('50×70 cm');
  const [isFramed, setIsFramed] = useState(false);

  // Fetch the Shopify product by handle (same as local product id)
  useEffect(() => {
    const loadShopifyProduct = async () => {
      if (!id) return;
      setIsLoadingProduct(true);
      try {
        const product = await fetchProductByHandle(id);
        setShopifyProduct(product);
      } catch (error) {
        console.error('Failed to fetch Shopify product:', error);
      } finally {
        setIsLoadingProduct(false);
      }
    };
    loadShopifyProduct();
  }, [id]);

  // Find the selected variant from Shopify product
  const selectedVariant = useMemo(() => {
    if (!shopifyProduct?.variants?.edges) return null;
    
    const frameOption = isFramed ? 'Oak Frame' : 'Unframed';
    
    return shopifyProduct.variants.edges.find(({ node }) => {
      const sizeMatch = node.selectedOptions.find(o => o.name === 'Size')?.value === selectedSize;
      const frameMatch = node.selectedOptions.find(o => o.name === 'Frame')?.value === frameOption;
      return sizeMatch && frameMatch;
    })?.node;
  }, [shopifyProduct, selectedSize, isFramed]);

  const formatPrice = (price: number | string) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(numPrice) + ' EGP';
  };

  if (!localProduct) {
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
    `Hi, I'm interested in "${localProduct.title}" by ${localProduct.artistName} (${selectedSize}, ${isFramed ? 'Framed' : 'Unframed'}) - ${selectedVariant ? formatPrice(selectedVariant.price.amount) : ''}`
  );

  const handleAddToCart = async () => {
    if (!shopifyProduct || !selectedVariant) {
      toast.error('Unable to add to cart', {
        description: 'Product variant not available. Please try again.',
      });
      return;
    }

    await addItem({
      product: { node: shopifyProduct } as ShopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions,
    });

    toast.success('Added to cart', {
      description: `${localProduct.title} - ${selectedSize}, ${isFramed ? 'Framed' : 'Unframed'}`,
    });
  };

  // Get available sizes from Shopify product
  const availableSizes = shopifyProduct?.options?.find(o => o.name === 'Size')?.values || ['30×40 cm', '50×70 cm', '70×100 cm'];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="gallery-container py-3 md:py-4">
          <Link 
            to="/collection" 
            className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
            Back to Collection
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] bg-gallery-cream overflow-hidden sticky top-24">
                <img
                  src={shopifyProduct?.images?.edges?.[0]?.node?.url || localProduct.image}
                  alt={localProduct.title}
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
              <div className="mb-6 md:mb-8">
                <span className="text-[10px] md:text-xs tracking-ultra uppercase text-gallery-gold mb-1.5 md:mb-2 block">
                  Collection {localProduct.collectionNumber}
                </span>
                <h1 className="font-serif text-2xl md:text-4xl mb-1.5 md:mb-2">{localProduct.title}</h1>
                <Link 
                  to={`/artists/${localProduct.artistId}`}
                  className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {localProduct.artistName}
                </Link>
              </div>

              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                  "{localProduct.description}"
                </p>
              </div>

              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
                <div>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide block mb-0.5 md:mb-1">Edition</span>
                  <span className="font-serif text-base md:text-lg">{localProduct.editionsSold} / {localProduct.editionSize}</span>
                </div>
                <div>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide block mb-0.5 md:mb-1">Availability</span>
                  <span className="font-serif text-base md:text-lg">{localProduct.editionSize - localProduct.editionsSold} remaining</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-5 md:mb-6">
                <span className="text-xs md:text-sm font-medium mb-2 md:mb-3 block">Size</span>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {availableSizes.map((size, index) => {
                    const sizeLabel = index === 0 ? 'S' : index === 1 ? 'M' : 'L';
                    const sizeValue = size.replace(' cm', '');
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm border rounded-[15px] transition-colors ${
                          selectedSize === size
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        <span className="font-bold">{sizeLabel}</span> {sizeValue} cm
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Frame Selector */}
              <div className="mb-6 md:mb-8">
                <span className="text-xs md:text-sm font-medium mb-2 md:mb-3 block">Frame</span>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <button
                    onClick={() => setIsFramed(false)}
                    className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm border rounded-[15px] transition-colors ${
                      !isFramed
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    Unframed
                  </button>
                  <button
                    onClick={() => setIsFramed(true)}
                    className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm border rounded-[15px] transition-colors ${
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
              <div className="mb-6 md:mb-8">
                {isLoadingProduct ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    <span className="text-sm md:text-base text-muted-foreground">Loading price...</span>
                  </div>
                ) : (
                  <>
                    <span className="font-serif text-2xl md:text-3xl">
                      {selectedVariant ? formatPrice(selectedVariant.price.amount) : 'Unavailable'}
                    </span>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1.5 md:mt-2">
                      Free delivery in Greater Cairo · 7-14 days
                    </p>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8">
                <Button 
                  size="lg" 
                  className="btn-gallery-primary w-full"
                  onClick={handleAddToCart}
                  disabled={isLoadingProduct || cartLoading || !selectedVariant}
                >
                  {cartLoading ? (
                    <>
                      <Loader2 className="w-3 h-3 md:w-4 md:h-4 mr-2 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </Button>
                <a
                  href={`https://wa.me/+201234567890?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gallery-outline w-full inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  Buy via WhatsApp Concierge
                </a>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="materials">
                  <AccordionTrigger className="text-xs md:text-sm font-medium">
                    <span className="flex items-center gap-1.5 md:gap-2">
                      <FileText className="w-3 h-3 md:w-4 md:h-4" />
                      Print Materials
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground">
                    <ul className="space-y-1.5 md:space-y-2">
                      <li>• Hahnemühle Photo Rag 308gsm</li>
                      <li>• Archival pigment inks (100+ year lightfastness)</li>
                      <li>• Museum-grade giclée printing</li>
                      <li>• Optional: Solid oak frame with UV-protective glass</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="authentication">
                  <AccordionTrigger className="text-xs md:text-sm font-medium">
                    <span className="flex items-center gap-1.5 md:gap-2">
                      <Shield className="w-3 h-3 md:w-4 md:h-4" />
                      Authentication & Certificate
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground">
                    <p className="mb-2 md:mb-3">
                      Every print includes a signed Certificate of Authenticity with:
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      <li>• Edition number and total run size</li>
                      <li>• Artist signature</li>
                      <li>• Unique holographic seal</li>
                      <li>• QR code linking to digital provenance record</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-xs md:text-sm font-medium">
                    <span className="flex items-center gap-1.5 md:gap-2">
                      <Truck className="w-3 h-3 md:w-4 md:h-4" />
                      Shipping & Returns
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground">
                    <ul className="space-y-1.5 md:space-y-2">
                      <li>• Free white-glove delivery in Greater Cairo</li>
                      <li>• 7-14 business days production time</li>
                      <li>• Secure flat packaging for unframed prints</li>
                      <li>• Professional installation available</li>
                      <li>• Damage replacement guarantee</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="artist">
                  <AccordionTrigger className="text-xs md:text-sm font-medium">
                    <span className="flex items-center gap-1.5 md:gap-2">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
                      About the Artist
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground">
                    <p className="mb-2 md:mb-3">{artist?.bio}</p>
                    <Link 
                      to={`/artists/${localProduct.artistId}`}
                      className="text-foreground link-underline inline-block"
                    >
                      View all works by {localProduct.artistName}
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
