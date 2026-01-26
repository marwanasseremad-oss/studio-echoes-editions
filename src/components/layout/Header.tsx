import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = {
  en: [
    { href: '/collection', label: 'Collection' },
    { href: '/artists', label: 'Artists' },
    { href: '/print-quality', label: 'Print Quality' },
    { href: '/about', label: 'About' },
    { href: '/corporate', label: 'Corporate' },
  ],
  ar: [
    { href: '/collection', label: 'المجموعة' },
    { href: '/artists', label: 'الفنانون' },
    { href: '/print-quality', label: 'جودة الطباعة' },
    { href: '/about', label: 'من نحن' },
    { href: '/corporate', label: 'الشركات' },
  ]
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCartStore();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const count = totalItems();

  const links = navLinks[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent">
      <div className="gallery-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-xl md:text-2xl tracking-wider text-cream"
          >
            OLIVE STUDIOS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  location.pathname === link.href 
                    ? 'text-cream' 
                    : 'text-stone hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="text-sm tracking-wide text-stone hover:text-cream transition-colors uppercase"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-cream/10 rounded-sm transition-colors text-cream"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brass text-olive-black text-xs rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-cream/10 rounded-sm transition-colors text-cream"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-cream/10 bg-olive-black"
          >
            <nav className="gallery-container py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-display tracking-wide py-2 ${
                    location.pathname === link.href 
                      ? 'text-cream' 
                      : 'text-stone'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-display tracking-wide py-2 text-stone"
              >
                {language === 'en' ? 'Contact' : 'تواصل'}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
