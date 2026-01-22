import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getArtistById, getProductsByArtist } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || '');
  const artistProducts = artist ? getProductsByArtist(artist.id) : [];

  if (!artist) {
    return (
      <div className="section-padding">
        <div className="gallery-container text-center">
          <h1 className="font-serif text-2xl mb-4">Artist not found</h1>
          <Button asChild variant="outline">
            <Link to="/artists">View All Artists</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="gallery-container py-4">
          <Link 
            to="/artists" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Artists
          </Link>
        </div>
      </div>

      {/* Artist Header */}
      <section className="section-padding pb-12">
        <div className="gallery-container">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-ultra uppercase text-muted-foreground mb-4 block">
                {artist.location}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl mb-6">{artist.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {artist.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artist Works */}
      <section className="section-padding pt-0">
        <div className="gallery-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl mb-8"
          >
            Available Works
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistDetail;