import { motion } from 'framer-motion';
import { Sun, Droplets, Wind, Package, Hammer, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Care = () => {
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
            <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-wide">{t('care.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('care.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 border-y border-border bg-card">
        <div className="gallery-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: t('care.overview.light'), desc: t('care.overview.lightDesc') },
              { icon: Droplets, title: t('care.overview.humidity'), desc: t('care.overview.humidityDesc') },
              { icon: Wind, title: t('care.overview.handling'), desc: t('care.overview.handlingDesc') },
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
                <h3 className="font-display text-lg mb-1 tracking-wide">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="section-padding">
        <div className="gallery-container">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Unpacking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-5 h-5 text-gallery-gold" />
                <h2 className="font-display text-2xl tracking-wide">{t('care.unpacking.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('care.unpacking.p1')}</p>
                <p>{t('care.unpacking.p2')}</p>
                <p>{t('care.unpacking.p3')}</p>
              </div>
            </motion.div>

            {/* Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="w-5 h-5 text-gallery-gold" />
                <h2 className="font-display text-2xl tracking-wide">{t('care.installation.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">{t('care.installation.location')}</strong><br />
                  {t('care.installation.locationDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.installation.height')}</strong><br />
                  {t('care.installation.heightDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.installation.hardware')}</strong><br />
                  {t('care.installation.hardwareDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.installation.service')}</strong><br />
                  {t('care.installation.serviceDesc')}
                </p>
              </div>
            </motion.div>

            {/* Environment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-5 h-5 text-gallery-gold" />
                <h2 className="font-display text-2xl tracking-wide">{t('care.environment.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">{t('care.environment.light')}</strong><br />
                  {t('care.environment.lightDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.environment.humidity')}</strong><br />
                  {t('care.environment.humidityDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.environment.temperature')}</strong><br />
                  {t('care.environment.temperatureDesc')}
                </p>
              </div>
            </motion.div>

            {/* Cleaning & Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-gallery-gold" />
                <h2 className="font-display text-2xl tracking-wide">{t('care.cleaning.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">{t('care.cleaning.framed')}</strong><br />
                  {t('care.cleaning.framedDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.cleaning.unframed')}</strong><br />
                  {t('care.cleaning.unframedDesc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('care.cleaning.avoid')}</strong><br />
                  {t('care.cleaning.avoidDesc')}
                </p>
              </div>
            </motion.div>

            {/* Framing Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl mb-6 tracking-wide">{t('care.framing.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('care.framing.p1')}</p>
                <p>{t('care.framing.p2')}</p>
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
            <h2 className="font-display text-2xl mb-4 tracking-wide">{t('care.cta.title')}</h2>
            <p className="text-muted-foreground mb-6">
              {t('care.cta.subtitle')}
            </p>
            <a
              href="https://wa.me/+201234567890?text=Hi%2C%20I%20have%20a%20question%20about%20care%20and%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gallery-outline inline-flex items-center"
            >
              {t('care.cta.button')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Care;
