import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll respond within 24 hours.",
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
            <h1 className="font-serif text-4xl md:text-6xl mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Questions about a piece? Need help choosing the right size? 
              Our concierge is here to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding pt-0">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <a
                    href="https://wa.me/+201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-gallery-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">WhatsApp Concierge</h3>
                      <p className="text-sm text-muted-foreground">
                        Fastest response. Available 10am-8pm Cairo time.
                      </p>
                      <span className="text-sm mt-2 inline-block">+20 123 456 7890</span>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@studioaura.com"
                    className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary transition-colors"
                  >
                    <Mail className="w-6 h-6 text-gallery-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        For detailed inquiries and documentation.
                      </p>
                      <span className="text-sm mt-2 inline-block">hello@studioaura.com</span>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/studioaura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-gallery-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">Instagram</h3>
                      <p className="text-sm text-muted-foreground">
                        Follow for new releases and behind-the-scenes.
                      </p>
                      <span className="text-sm mt-2 inline-block">@studioaura</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-6 bg-card border border-border">
                    <MapPin className="w-6 h-6 text-gallery-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Cairo, Egypt
                      </p>
                      <span className="text-sm mt-2 inline-block text-muted-foreground">
                        By appointment only
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-serif text-2xl mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">First Name</label>
                    <Input placeholder="First name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Last Name</label>
                    <Input placeholder="Last name" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Subject</label>
                  <select className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                    <option value="">Select a topic</option>
                    <option value="purchase">Purchasing Inquiry</option>
                    <option value="artwork">Question about an Artwork</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="corporate">Corporate/Designer Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Message</label>
                  <Textarea 
                    placeholder="How can we help?"
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-gallery-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respond to all inquiries within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;