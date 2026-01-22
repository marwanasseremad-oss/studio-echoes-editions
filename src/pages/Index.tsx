import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import heroImage from '@/assets/hero-cairo.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cairo at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        
        <div className="relative gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs tracking-ultra uppercase text-gallery-gold mb-4 block">
              Collection 001 · Now Available
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Museum-Grade Photography from Egypt
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Limited edition prints by the region's most compelling photographers. 
              Archival quality. Authenticated editions. White-glove delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-gallery-primary">
                <Link to="/collection">
                  Shop Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-gallery-outline">
                <a href="#newsletter">Join VIP Preview List</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="bg-card border-y border-border">
        <div className="gallery-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <Award className="w-6 h-6 text-gallery-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Museum-Grade Printing</h3>
                <p className="text-sm text-muted-foreground">
                  Giclée prints on Hahnemühle archival paper. Built to last 100+ years.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <Shield className="w-6 h-6 text-gallery-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Limited Editions</h3>
                <p className="text-sm text-muted-foreground">
                  Each print numbered and signed. Certificate of authenticity included.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <Truck className="w-6 h-6 text-gallery-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">White-Glove Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Free delivery in Greater Cairo. Professional packaging nationwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-ultra uppercase text-muted-foreground mb-4 block">
              Featured Works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Collection 001</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our inaugural collection brings together four distinctive voices in Egyptian photography. 
              From the quiet geometry of Islamic architecture to the timeless rhythms of the Nile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="btn-gallery-outline">
              <Link to="/collection">
                View All Works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-ultra uppercase text-muted-foreground mb-4 block">
              The Process
            </span>
            <h2 className="font-serif text-3xl md:text-5xl">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select', desc: 'Choose your artwork and preferred size. Framed or unframed.' },
              { step: '02', title: 'Authenticate', desc: 'Each print is numbered, signed, and comes with a certificate.' },
              { step: '03', title: 'Print', desc: 'Museum-grade giclée printing on archival cotton paper.' },
              { step: '04', title: 'Deliver', desc: 'White-glove delivery to your door within 7-14 days.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-serif text-4xl text-gallery-gold-muted">{item.step}</span>
                <h3 className="font-serif text-xl mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding">
        <div className="gallery-container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-ultra uppercase text-gallery-gold mb-4 block">
                VIP Preview
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                First Access to New Drops
              </h2>
              <p className="text-muted-foreground mb-8">
                Join our mailing list for early access to new collections, artist features, 
                and exclusive private viewings.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  required
                />
                <Button type="submit" className="btn-gallery-primary">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-2">Follow the Studio</h2>
            <a 
              href="https://instagram.com/studioaura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              @studioaura
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.a
                key={product.id}
                href="https://instagram.com/studioaura"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden group"
              >
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;