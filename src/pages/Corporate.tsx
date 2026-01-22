import { motion } from 'framer-motion';
import { Building2, Hotel, Palette, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Corporate = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Received",
        description: "Our corporate team will be in touch within 24 hours.",
      });
    }, 1000);
  };

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
              For Business
            </span>
            <h1 className="font-serif text-4xl md:text-6xl mb-6">
              Corporate & Interior Designers
            </h1>
            <p className="text-muted-foreground text-lg">
              Curated art packages for offices, hotels, and residential projects. 
              Bulk pricing, dedicated account management, and installation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Building2,
                title: 'Corporate Offices',
                desc: 'Transform your workspace with meaningful art. We curate collections that reflect your brand values and inspire your team.',
              },
              {
                icon: Hotel,
                title: 'Hotels & Hospitality',
                desc: 'Create distinctive spaces with region-specific photography. From lobbies to suites, we provide cohesive visual stories.',
              },
              {
                icon: Palette,
                title: 'Interior Designers',
                desc: 'Partner with us for client projects. Trade pricing, dedicated support, and a curated selection of works.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <service.icon className="w-8 h-8 mx-auto mb-4 text-gallery-gold" />
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl mb-8">What We Offer</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg mb-2">Curated Packages</h3>
                  <p className="text-muted-foreground">
                    Tell us about your space and vision. We'll propose a selection of works, 
                    sizes, and framing options tailored to your project.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg mb-2">Bulk Pricing</h3>
                  <p className="text-muted-foreground">
                    Significant discounts for orders of 5+ prints. Custom pricing 
                    for large-scale hospitality and commercial projects.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg mb-2">Custom Editions</h3>
                  <p className="text-muted-foreground">
                    For exclusive projects, we can work with artists to create 
                    unique editions or sizes not available in our standard collection.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg mb-2">Installation Services</h3>
                  <p className="text-muted-foreground">
                    Our team handles delivery, placement, and professional hanging 
                    for projects in Greater Cairo and Alexandria.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg mb-2">Invoicing & Terms</h3>
                  <p className="text-muted-foreground">
                    Flexible payment terms for corporate clients. VAT invoicing available.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 border border-border"
            >
              <h2 className="font-serif text-2xl mb-6">Request a Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Company</label>
                    <Input placeholder="Company name" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Email</label>
                  <Input type="email" placeholder="email@company.com" required />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Phone</label>
                  <Input type="tel" placeholder="+20" required />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Project Type</label>
                  <select className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                    <option value="">Select project type</option>
                    <option value="office">Corporate Office</option>
                    <option value="hotel">Hotel / Hospitality</option>
                    <option value="residential">Residential Project</option>
                    <option value="retail">Retail Space</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-gallery-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Or reach us directly via WhatsApp for immediate assistance
                </p>

                <a
                  href="https://wa.me/+201234567890?text=Hi%2C%20I'm%20interested%20in%20corporate%20art%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gallery-outline flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Corporate Team
                </a>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;