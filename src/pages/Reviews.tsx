import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountUp } from '@/hooks/useCountUp';

const CountUpStat = ({ 
  end, 
  suffix = '', 
  label, 
  delay = 0,
  decimals = 0 
}: { 
  end: number; 
  suffix?: string; 
  label: string; 
  delay?: number;
  decimals?: number;
}) => {
  const { count, elementRef } = useCountUp({ end, duration: 2000, delay, decimals });
  
  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <p className="font-serif text-4xl mb-1">
        {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const reviews = [
  {
    id: 1,
    name: 'Sarah El-Masry',
    location: 'New Cairo',
    rating: 5,
    text: 'The quality exceeded my expectations. The print now hangs in my living room and guests always comment on it. The white-glove delivery was exceptional—they even helped me decide on the best placement.',
    artwork: 'Desert Light at Dawn',
    date: '2025-12',
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    location: 'Sheikh Zayed',
    rating: 5,
    text: 'I ordered three prints for my office and the team was incredibly helpful in curating the perfect selection. The framing quality is museum-level. Worth every pound.',
    artwork: 'Mediterranean Blue',
    date: '2025-11',
  },
  {
    id: 3,
    name: 'Nadia Fouad',
    location: 'Zamalek',
    rating: 5,
    text: 'As an interior designer, I have very high standards. Olive Studios delivers consistently—the paper quality, the inks, the framing. My clients are always impressed.',
    artwork: 'Old Cairo Stories',
    date: '2025-11',
  },
  {
    id: 4,
    name: 'Karim Abdel-Rahman',
    location: 'Maadi',
    rating: 5,
    text: 'Bought a piece as an anniversary gift. The certificate of authenticity and the beautiful packaging made it feel truly special. My wife was moved to tears.',
    artwork: 'Nile at Sunset',
    date: '2025-10',
  },
  {
    id: 5,
    name: 'Layla Mostafa',
    location: '6th October',
    rating: 5,
    text: 'The concierge service was so helpful. They answered all my questions about sizing and helped me visualize the print in my space. Delivery was faster than expected.',
    artwork: 'Siwa Oasis',
    date: '2025-10',
  },
  {
    id: 6,
    name: 'Omar Saleh',
    location: 'Alexandria',
    rating: 5,
    text: 'I was hesitant about ordering a large print online, but the quality speaks for itself. The colors are vibrant and true to the photos on the website. Highly recommend.',
    artwork: 'Alexandria Mornings',
    date: '2025-09',
  },
];

const Reviews = () => {
  const { t } = useLanguage();

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
            <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-wide">{t('reviews.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('reviews.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card">
        <div className="gallery-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gallery-gold text-gallery-gold" />
                ))}
              </div>
              <p className="font-serif text-2xl mb-1">5.0</p>
              <p className="text-sm text-muted-foreground">{t('reviews.averageRating')}</p>
            </motion.div>
            <CountUpStat 
              end={200} 
              suffix="+" 
              label={t('reviews.happyCollectors')} 
              delay={100} 
            />
            <CountUpStat 
              end={100} 
              suffix="%" 
              label={t('reviews.satisfaction')} 
              delay={200} 
            />
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="gallery-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border p-8 relative"
              >
                <Quote className="w-8 h-8 text-gallery-gold/20 absolute top-6 end-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gallery-gold text-gallery-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-lg tracking-wide">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-gallery-gold mt-2">{t('reviews.purchased')}: {review.artwork}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="gallery-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl mb-4 tracking-wide">{t('reviews.cta.title')}</h2>
            <p className="text-muted-foreground mb-6">
              {t('reviews.cta.subtitle')}
            </p>
            <a
              href="/collection"
              className="btn-gallery-outline inline-flex items-center"
            >
              {t('reviews.cta.button')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
