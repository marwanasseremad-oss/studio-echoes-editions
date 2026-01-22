import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs tracking-ultra uppercase text-muted-foreground mb-4 block">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
              Elevating Regional Photography into Collectible Art
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding pt-0">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Studio Aura was founded with a simple conviction: the photographers of Egypt 
                and the wider region deserve the same platform and quality that their 
                international peers enjoy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Too often, remarkable work remains unseen outside gallery walls or Instagram feeds. 
                We bridge that gap—producing museum-grade editions that transform photographs 
                into heirloom art objects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every print in our collection is produced to the same standards as leading 
                international galleries. Hahnemühle papers, archival inks, individual quality 
                control, and authentic certificates. Locally curated, globally executed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Our mission is twofold: to give collectors access to exceptional, 
                authenticated photography—and to create meaningful opportunities 
                for artists to reach discerning audiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in limited editions because scarcity creates value. 
                We believe in white-glove service because the buying experience 
                should match the quality of the art. And we believe in accessibility—which 
                is why we offer direct consultation via WhatsApp alongside traditional 
                e-commerce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're decorating a villa in Sahel or an office in Sheikh Zayed, 
                building a collection, or giving a meaningful gift—we're here to guide you 
                to the right piece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality Without Compromise',
                desc: 'Museum-grade materials and processes, no exceptions. Every print is produced to collection standards.',
              },
              {
                title: 'Authenticity',
                desc: 'Limited editions, signed certificates, and transparent provenance. Every print has a story and a number.',
              },
              {
                title: 'Local Excellence',
                desc: 'We champion photographers from Egypt and the region, bringing their vision to a global standard.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="gallery-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Start Your Collection?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Browse our current collection or speak with our concierge 
              for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gallery-primary">
                <Link to="/collection">
                  Browse Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-gallery-outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;