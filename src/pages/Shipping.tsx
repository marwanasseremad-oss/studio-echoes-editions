import { motion } from 'framer-motion';
import { Truck, RefreshCcw, CreditCard, Shield } from 'lucide-react';

const Shipping = () => {
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
            <h1 className="font-serif text-4xl md:text-6xl mb-6">Shipping & Returns</h1>
            <p className="text-muted-foreground text-lg">
              We take the same care in delivering your art as we do in creating it. 
              Clear policies, secure packaging, and dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 border-y border-border bg-card">
        <div className="gallery-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Cairo Delivery', desc: 'White-glove service in Greater Cairo' },
              { icon: Shield, title: '7-14 Days', desc: 'Production and delivery time' },
              { icon: RefreshCcw, title: 'Damage Replacement', desc: 'Full replacement for transit damage' },
              { icon: CreditCard, title: 'Flexible Payment', desc: 'Cards, bank transfer, or deposit' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-6 h-6 mx-auto mb-3 text-gallery-gold" />
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="section-padding">
        <div className="gallery-container">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl mb-6">Delivery Within Egypt</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Greater Cairo (New Cairo, Maadi, Zamalek, Sheikh Zayed, 6th October):</strong><br />
                  Free white-glove delivery. Your print arrives with a dedicated handler who ensures 
                  safe handover. Installation services available upon request.
                </p>
                <p>
                  <strong className="text-foreground">Alexandria & North Coast:</strong><br />
                  Flat rate of 250 EGP. Secure courier delivery with tracking.
                </p>
                <p>
                  <strong className="text-foreground">Other Governorates:</strong><br />
                  Flat rate of 400 EGP. Secure courier delivery with tracking and insurance.
                </p>
                <p>
                  <strong className="text-foreground">Production Time:</strong><br />
                  All prints are made to order. Please allow 7-14 business days from order confirmation 
                  to delivery. Framed prints may require an additional 3-5 days.
                </p>
              </div>
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl mb-6">Packaging</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Unframed Prints:</strong><br />
                  Shipped flat in rigid acid-free packaging with protective tissue. 
                  Outer cardboard box reinforced at corners.
                </p>
                <p>
                  <strong className="text-foreground">Framed Prints:</strong><br />
                  Custom wooden crate with foam padding. Glass protected with painter's tape 
                  to prevent shattering in transit.
                </p>
              </div>
            </motion.div>

            {/* Returns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl mb-6">Returns & Replacements</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Damage in Transit:</strong><br />
                  If your print arrives damaged, contact us within 48 hours with photographs. 
                  We will produce and ship a replacement at no additional cost.
                </p>
                <p>
                  <strong className="text-foreground">Quality Issues:</strong><br />
                  If you believe your print has a defect, please contact us. We stand behind 
                  our quality and will assess any concerns promptly.
                </p>
                <p>
                  <strong className="text-foreground">Change of Mind:</strong><br />
                  As prints are produced to order, we cannot accept returns for change of mind. 
                  We encourage customers to speak with our concierge before purchasing to ensure 
                  the right fit.
                </p>
              </div>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl mb-6">Payment Options</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Credit/Debit Cards:</strong><br />
                  We accept Visa, Mastercard, and local Egyptian bank cards through our secure checkout.
                </p>
                <p>
                  <strong className="text-foreground">Bank Transfer:</strong><br />
                  Available for orders over 5,000 EGP. Contact us for account details.
                </p>
                <p>
                  <strong className="text-foreground">Deposit + Cash on Delivery:</strong><br />
                  For orders in Greater Cairo, we offer a 50% deposit with the balance paid on delivery 
                  in cash or card.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-card">
        <div className="gallery-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl mb-4">Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our concierge is available to assist with any shipping or delivery questions.
            </p>
            <a
              href="https://wa.me/+201234567890?text=Hi%2C%20I%20have%20a%20question%20about%20shipping."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gallery-outline inline-flex items-center"
            >
              Contact via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;