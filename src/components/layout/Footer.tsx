import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import oliveLogo from '@/assets/olive-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="gallery-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col items-start gap-2">
              <img src={oliveLogo} alt="Olive Studios" className="h-24 w-auto" />
              <span className="font-display text-2xl tracking-museum">Olive Studios</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg tracking-wide uppercase mb-4">{t('footer.shop')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/collection" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.collection')}
              </Link>
              <Link to="/artists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.artists')}
              </Link>
              <Link to="/print-quality" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.quality')}
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-display text-lg tracking-wide uppercase mb-4">{t('footer.information')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.shipping')}
              </Link>
              <Link to="/corporate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.corporate')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wide uppercase mb-4">{t('footer.connect')}</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://instagram.com/olivestudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @olivestudios
              </a>
              <a 
                href="mailto:hello@olivestudios.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@olivestudios.com
              </a>
              <p className="text-sm text-muted-foreground">
                Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};