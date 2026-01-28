import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import oliveLogo from '@/assets/olive-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="gallery-container section-padding">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 text-center lg:text-left">
          {/* Brand - Always LTR */}
          <div dir="ltr">
            <Link to="/">
              <img src={oliveLogo} alt="Olive Studios" className="h-48 w-auto invert mx-auto lg:mx-0" />
            </Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg tracking-wide capitalize mb-4">{t('footer.shop')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/collection" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.collection')}
              </Link>
              <Link to="/artists" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.artists')}
              </Link>
              <Link to="/print-quality" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.quality')}
              </Link>
            </nav>
          </div>

          {/* Resources (formerly Information) */}
          <div>
            <h4 className="font-display text-lg tracking-wide capitalize mb-4">{t('footer.resources')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.bespoke')}
              </Link>
              <Link to="/corporate" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.corporate')}
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.reviews')}
              </Link>
            </nav>
          </div>

          {/* Help (formerly Connect) */}
          <div>
            <h4 className="font-display text-lg tracking-wide capitalize mb-4">{t('footer.help')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/print-quality" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.care')}
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.contact')}
              </Link>
              <Link to="/faq" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.faqs')}
              </Link>
              <Link to="/shipping" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('nav.shippingReturns')}
              </Link>
            </nav>
          </div>

          {/* Newsletter & Instagram */}
          <div className="lg:text-left">
            <p className="text-sm text-primary-foreground/70 mb-3">{t('footer.receiveLatest')}</p>
            <form className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-3 py-2 text-sm border border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 min-w-0"
                required
              />
              <Button type="submit" size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                →
              </Button>
            </form>
            <a 
              href="https://instagram.com/_olivestudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @_olivestudios
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/70">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
