import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowRight, Lock, Eye, Gift } from 'lucide-react';

const CollectorsCircle = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    // Simulate submission — replace with real backend later
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
    toast.success('Welcome to the Collector\'s Circle', {
      description: 'You\'ll be the first to know when Collection 002 drops.',
    });
  };

  const benefits = [
    {
      icon: Eye,
      title: 'Private Preview',
      description: '48-hour early access before public release',
    },
    {
      icon: Lock,
      title: 'Reserved Editions',
      description: 'Priority selection of limited edition numbers',
    },
    {
      icon: Gift,
      title: 'Exclusive Pricing',
      description: 'Collector-only pricing on first editions',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center section-padding">
        <div className="gallery-container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] md:text-xs tracking-ultra uppercase text-gallery-gold mb-4 md:mb-6 block">
              Invitation Only
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
              The Collector's Circle
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-3 md:mb-4 leading-relaxed">
              Be among the first to access Collection 002 — a new series of limited edition 
              prints exploring untold stories of the Mediterranean.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-10 md:mb-14">
              Launching Summer 2025 · Limited to 25 editions per print
            </p>
          </motion.div>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary/50 border-border h-12 text-sm placeholder:text-muted-foreground/50"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary/50 border-border h-12 text-sm placeholder:text-muted-foreground/50"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gallery-primary w-full h-12 text-sm"
                >
                  {isSubmitting ? (
                    'Joining...'
                  ) : (
                    <>
                      Join the Circle
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-[10px] md:text-xs text-muted-foreground/50 pt-1">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto py-8 px-6 border border-border rounded-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gallery-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-5 h-5 text-gallery-gold" />
                </div>
                <h3 className="font-serif text-xl mb-2">You're on the list</h3>
                <p className="text-sm text-muted-foreground">
                  We'll notify you 48 hours before Collection 002 goes live. 
                  Keep an eye on your inbox.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding border-t border-border">
        <div className="gallery-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-3">Circle Benefits</h2>
            <p className="text-sm text-muted-foreground">
              Exclusive privileges for early supporters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-4 h-4 text-gallery-gold" />
                </div>
                <h3 className="font-display text-sm md:text-base tracking-wide mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser */}
      <section className="section-padding border-t border-border">
        <div className="gallery-container max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] md:text-xs tracking-ultra uppercase text-gallery-gold mb-4 block">
              Coming Soon
            </span>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Collection 002</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              A deeper exploration into the textures, colours, and quiet moments of 
              Mediterranean life. New artists. New perspectives. Same uncompromising 
              quality.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground/70">
              <div>
                <span className="font-serif text-lg md:text-xl text-foreground block">10</span>
                New Works
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <span className="font-serif text-lg md:text-xl text-foreground block">5</span>
                Artists
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <span className="font-serif text-lg md:text-xl text-foreground block">25</span>
                Editions Each
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollectorsCircle;
