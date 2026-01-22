import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artists, getProductsByArtist } from '@/data/products';

const Artists = () => {
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
            <span className="text-xs tracking-ultra uppercase text-muted-foreground mb-4 block">
              Our Collective
            </span>
            <h1 className="font-serif text-4xl md:text-6xl mb-6">The Artists</h1>
            <p className="text-muted-foreground text-lg">
              We work with photographers whose work transcends documentation to become art. 
              Each brings a distinct perspective to the visual heritage of Egypt and the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="section-padding pt-0">
        <div className="gallery-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artists.map((artist, index) => {
              const artistProducts = getProductsByArtist(artist.id);
              const featuredImage = artistProducts[0]?.image;

              return (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/artists/${artist.id}`}
                    className="group block"
                  >
                    <div className="aspect-[4/3] bg-gallery-cream overflow-hidden mb-6">
                      {featuredImage && (
                        <img
                          src={featuredImage}
                          alt={artist.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    
                    <h2 className="font-serif text-2xl mb-2">{artist.name}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{artist.location}</p>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {artist.bio}
                    </p>
                    
                    <span className="inline-block mt-4 text-sm link-underline">
                      View Works ({artistProducts.length})
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;