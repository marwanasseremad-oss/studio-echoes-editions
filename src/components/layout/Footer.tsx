import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import oliveLogo from '@/assets/olive-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="gallery-container section-padding">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-12 lg:gap-20 text-center lg:text-left">
          {/* Brand - Always LTR */}
          <div dir="ltr">
            <Link to="/">
              <img src={oliveLogo} alt="Olive Studios" className="h-32 md:h-48 w-auto invert mx-auto lg:mx-0" />
            </Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-base md:text-lg tracking-wide capitalize mb-4 md:mb-6">{t('footer.shop')}</h4>
            <nav className="flex flex-col gap-3 md:gap-4">
              <Link to="/collection" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.collection')}
              </Link>
              <Link to="/artists" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.artists')}
              </Link>
              <Link to="/print-quality" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.quality')}
              </Link>
            </nav>
          </div>

          {/* Resources (formerly Information) */}
          <div>
            <h4 className="font-display text-base md:text-lg tracking-wide capitalize mb-4 md:mb-6">{t('footer.resources')}</h4>
            <nav className="flex flex-col gap-3 md:gap-4">
              <Link to="/bespoke" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.bespoke')}
              </Link>
              <Link to="/corporate" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.corporate')}
              </Link>
              <Link to="/reviews" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.reviews')}
              </Link>
            </nav>
          </div>

          {/* Help (formerly Connect) */}
          <div>
            <h4 className="font-display text-base md:text-lg tracking-wide capitalize mb-4 md:mb-6">{t('footer.help')}</h4>
            <nav className="flex flex-col gap-3 md:gap-4">
              <Link to="/care" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.care')}
              </Link>
              <Link to="/contact" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.contact')}
              </Link>
              <Link to="/faq" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.faqs')}
              </Link>
              <Link to="/shipping" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.shippingReturns')}
              </Link>
            </nav>
          </div>

          {/* Newsletter & Instagram */}
          <div className="lg:text-left">
            <h4 className="font-display text-base md:text-lg tracking-wide capitalize mb-2">{t('footer.receiveLatest')}</h4>
            <p className="text-xs md:text-sm text-primary-foreground/60 mb-3 md:mb-4">{t('footer.newsletterPromo')}</p>
            <form className="relative mb-4 md:mb-6">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 pe-10 md:pe-12 text-xs md:text-sm border border-primary-foreground/10 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/30"
                style={{ borderRadius: '15px' }}
                required
              />
              <button 
                type="submit" 
                className="absolute end-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm md:text-base"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/+201234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.instagram.com/_olivestudios/?utm_source=ig_web_button_share_sheet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.facebook.com/olivestudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[10px] md:text-xs text-primary-foreground/70">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link to="/privacy" className="text-[10px] md:text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-[10px] md:text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
