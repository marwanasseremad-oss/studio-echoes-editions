import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PrintQuality = () => {
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
              Our Commitment
            </span>
            <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-wide">Museum-Grade Quality</h1>
            <p className="text-muted-foreground text-lg">
              We print only on the finest archival materials, using techniques trusted by 
              leading galleries and collectors worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Studio Standard */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-ultra uppercase text-gallery-gold mb-4 block">
                The Studio Standard
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-wide">
                Crafted for Generations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every print that leaves our studio meets the exacting standards required 
                for museum acquisition. We believe art should be preserved for generations, 
                not decades.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our printing partners have produced work for the British Museum, Tate Modern, 
                and major private collections. The same expertise is applied to every 
                Studio Aura edition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {[
                { title: '100+ Year Lightfastness', desc: 'Archival pigment inks certified to resist fading for over a century.' },
                { title: 'Acid-Free Materials', desc: 'From paper to mounting, every component is museum-grade acid-free.' },
                { title: 'Individual QC', desc: 'Each print is inspected and approved before shipping.' },
                { title: 'Signed & Numbered', desc: 'Hand-signed by the artist with edition number and certificate.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gallery-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg mb-1 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 tracking-wide">Materials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The finest papers and inks, sourced from the world's leading manufacturers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Hahnemühle Photo Rag',
                subtitle: '308 gsm Cotton Paper',
                desc: 'Made in Germany for over 400 years. 100% cotton rag, acid-free, with a subtle matte finish that brings depth to every image.',
              },
              {
                title: 'Archival Pigment Inks',
                subtitle: '12-Color Giclée System',
                desc: 'Premium pigment inks that deliver exceptional color accuracy and density. Tested to maintain vibrancy for 100+ years under museum conditions.',
              },
              {
                title: 'Solid Oak Frames',
                subtitle: 'European Hardwood',
                desc: 'Sustainably sourced European oak with a natural finish. UV-protective museum glass keeps your print safe from harmful light.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-xl mb-1 tracking-wide">{item.title}</h3>
                <span className="text-xs tracking-wide uppercase text-gallery-gold block mb-4">
                  {item.subtitle}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 tracking-wide">The Process</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                step: '01',
                title: 'File Preparation',
                desc: 'Each image is carefully prepared for print: color-profiled to match our specific paper and ink combination, with resolution optimized for the final print size.',
              },
              {
                step: '02',
                title: 'Proof & Approval',
                desc: 'A proof print is created and reviewed against the original file. The artist approves the color and tonality before the edition is produced.',
              },
              {
                step: '03',
                title: 'Edition Printing',
                desc: 'Prints are produced in small batches on calibrated equipment. Each print is examined for consistency in color, density, and paper quality.',
              },
              {
                step: '04',
                title: 'Signing & Certification',
                desc: 'The artist signs each print by hand. We prepare the Certificate of Authenticity and record the edition in our permanent archive.',
              },
              {
                step: '05',
                title: 'Framing (Optional)',
                desc: 'Prints selected for framing are mounted on acid-free board and secured behind UV-protective glass in solid oak frames.',
              },
              {
                step: '06',
                title: 'Quality Control',
                desc: 'Final inspection under controlled lighting. Any print that doesn\'t meet our standards is rejected and reprinted.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8"
              >
                <span className="font-serif text-3xl text-gallery-gold-muted flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintQuality;