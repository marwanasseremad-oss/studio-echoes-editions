import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/products';

type SizeFilter = 'all' | '30×40' | '50×70' | '70×100';
type FrameFilter = 'all' | 'framed' | 'unframed';

const Collection = () => {
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>('all');
  const [frameFilter, setFrameFilter] = useState<FrameFilter>('all');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // For filtering, we check if the product has variants matching the filter
      if (sizeFilter !== 'all') {
        const hasSize = product.variants.some(v => v.size === sizeFilter);
        if (!hasSize) return false;
      }
      
      if (frameFilter !== 'all') {
        const hasFrame = product.variants.some(v => 
          frameFilter === 'framed' ? v.framed : !v.framed
        );
        if (!hasFrame) return false;
      }
      
      return true;
    });
  }, [sizeFilter, frameFilter]);

  return (
    <div>
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs tracking-ultra uppercase text-gallery-gold mb-4 block">
              Now Available
            </span>
            <h1 className="font-serif text-4xl md:text-6xl mb-6">Collection 001</h1>
            <p className="text-muted-foreground text-lg">
              Eight works by four photographers. Limited editions capturing the spirit of Egypt 
              through the lens of its most compelling visual artists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-border bg-card">
        <div className="gallery-container py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Size Filter */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Size:</span>
              <div className="flex gap-2">
                {(['all', '30×40', '50×70', '70×100'] as SizeFilter[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSizeFilter(size)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      sizeFilter === size
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size === 'all' ? 'All Sizes' : `${size} cm`}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Filter */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Style:</span>
              <div className="flex gap-2">
                {(['all', 'unframed', 'framed'] as FrameFilter[]).map((frame) => (
                  <button
                    key={frame}
                    onClick={() => setFrameFilter(frame)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      frameFilter === frame
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {frame === 'all' ? 'All Styles' : frame.charAt(0).toUpperCase() + frame.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="gallery-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No works match your current filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collection;