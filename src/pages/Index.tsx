import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/ProductCard';
import { LogoMarquee } from '@/components/ui/LogoMarquee';
import { getFeaturedProducts } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import heroImage from '@/assets/hero-cairo.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Mediterranean landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative gallery-container flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <span className="text-[10px] md:text-xs tracking-ultra uppercase text-accent mb-3 md:mb-4 block">
              {t('hero.tagline')}
            </span>
            <h1 className="font-display text-2xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 tracking-wide">
              {t('hero.title')}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="btn-gallery-primary">
                <Link to="/collection">
                  {t('hero.cta.shop')}
                  <ArrowRight className="ms-2 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-gallery-outline">
                <a href="#newsletter">{t('hero.cta.vip')}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="bg-card border-y border-border">
        <div className="gallery-container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-3 md:gap-4"
            >
              <Award className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base md:text-lg tracking-wide mb-1">{t('trust.museum.title')}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{t('trust.museum.desc')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-3 md:gap-4"
            >
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base md:text-lg tracking-wide mb-1">{t('trust.edition.title')}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{t('trust.edition.desc')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-3 md:gap-4"
            >
              <Truck className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base md:text-lg tracking-wide mb-1">{t('trust.delivery.title')}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{t('trust.delivery.desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="bg-primary py-3 md:py-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="font-display text-[10px] md:text-xs tracking-ultra text-primary-foreground/50 -mb-1 block">
            {t('asSeenOn.title')}
          </span>
          <div className="w-full">
            <LogoMarquee />
          </div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-[10px] md:text-xs tracking-ultra uppercase text-muted-foreground mb-3 md:mb-4 block">
              {t('featured.tagline')}
            </span>
            <h2 className="font-display text-2xl md:text-5xl tracking-wide mb-3 md:mb-4">{t('featured.title')}</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{t('featured.desc')}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 md:mt-12"
          >
            <Button asChild variant="outline" size="lg" className="btn-gallery-outline">
              <Link to="/collection">
                {t('featured.viewAll')}
                <ArrowRight className="ms-2 w-3 h-3 md:w-4 md:h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Studio Standard */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] md:text-xs tracking-ultra uppercase text-accent mb-3 md:mb-4 block">
                {t('standard.tagline')}
              </span>
              <h2 className="font-display text-2xl md:text-4xl tracking-wide mb-4 md:mb-6">{t('standard.title')}</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">{t('standard.desc')}</p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[t('standard.paper'), t('standard.inks'), t('standard.certificate'), t('standard.framing')].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    <span className="text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {featuredProducts.slice(0, 4).map((product, i) => (
                <div key={product.id} className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-[10px] md:text-xs tracking-ultra uppercase text-muted-foreground mb-3 md:mb-4 block">{t('process.tagline')}</span>
            <h2 className="font-display text-2xl md:text-5xl tracking-wide">{t('process.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: t('process.step1.title'), desc: t('process.step1.desc') },
              { step: '02', title: t('process.step2.title'), desc: t('process.step2.desc') },
              { step: '03', title: t('process.step3.title'), desc: t('process.step3.desc') },
              { step: '04', title: t('process.step4.title'), desc: t('process.step4.desc') },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-display text-2xl md:text-4xl text-olive-brass-muted">{item.step}</span>
                <h3 className="font-display text-base md:text-xl tracking-wide mt-3 md:mt-4 mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding bg-card">
        <div className="gallery-container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] md:text-xs tracking-ultra uppercase text-accent mb-3 md:mb-4 block">{t('newsletter.tagline')}</span>
              <h2 className="font-display text-2xl md:text-4xl tracking-wide mb-3 md:mb-4">{t('newsletter.title')}</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">{t('newsletter.desc')}</p>

              <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-3 md:px-4 py-2.5 md:py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm md:text-base rounded-[15px]"
                  required
                />
                <Button type="submit" className="btn-gallery-primary">{t('newsletter.button')}</Button>
              </form>
              
              <p className="text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4">{t('newsletter.privacy')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="section-padding">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-display text-xl md:text-3xl tracking-wide mb-2">{t('instagram.title')}</h2>
            <a 
              href="https://instagram.com/_olivestudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              @_olivestudios
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.a
                key={product.id}
                href="https://instagram.com/olivestudios"
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
                  alt={language === 'ar' ? product.titleAr : product.title}
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