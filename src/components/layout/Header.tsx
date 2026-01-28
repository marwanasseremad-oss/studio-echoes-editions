import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import oliveLogo from '@/assets/olive-logo.png';

interface DropdownItem {
  href: string;
  label: string;
}

interface NavLink {
  href?: string;
  label: string;
  dropdown?: DropdownItem[];
}

const navLinks: Record<'en' | 'ar', NavLink[]> = {
  en: [
    { 
      label: 'Collection',
      dropdown: [
        { href: '/collection', label: 'Featured' },
        { href: '/collection?filter=themes', label: 'Themes' },
        { href: '/collection?filter=picks', label: 'Our Picks' },
      ]
    },
    { href: '/artists', label: 'Artists' },
    { href: '/print-quality', label: 'Print Quality' },
    { href: '/about', label: 'About' },
    { 
      label: 'Discover',
      dropdown: [
        { href: '/corporate', label: 'Bespoke Inquiries' },
        { href: '/faq', label: 'FAQs' },
        { href: '/corporate', label: 'Corporate' },
      ]
    },
  ],
  ar: [
    { 
      label: 'المجموعة',
      dropdown: [
        { href: '/collection', label: 'المميزة' },
        { href: '/collection?filter=themes', label: 'المواضيع' },
        { href: '/collection?filter=picks', label: 'اختياراتنا' },
      ]
    },
    { href: '/artists', label: 'الفنانون' },
    { href: '/print-quality', label: 'جودة الطباعة' },
    { href: '/about', label: 'من نحن' },
    { 
      label: 'اكتشف',
      dropdown: [
        { href: '/corporate', label: 'طلبات مخصصة' },
        { href: '/faq', label: 'الأسئلة الشائعة' },
        { href: '/corporate', label: 'الشركات' },
      ]
    },
  ]
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const { totalItems, setIsCartOpen } = useCartStore();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const count = totalItems();

  const links = navLinks[language];

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent">
      <div className="gallery-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-1.5 font-display text-xl md:text-2xl tracking-wider text-cream"
          >
            <img src={oliveLogo} alt="Olive Studios" className="h-[4.5rem] md:h-[5.25rem] w-auto" />
            Olive Studios
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {links.map((link) => (
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`text-sm tracking-wide transition-colors link-underline inline-flex items-center gap-1 ${
                      openDropdown === link.label 
                        ? 'text-cream' 
                        : 'text-stone hover:text-cream'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[180px] bg-card border border-border rounded-sm shadow-lg z-50"
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href + item.label}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`text-sm tracking-wide transition-colors link-underline ${
                    location.pathname === link.href 
                      ? 'text-cream' 
                      : 'text-stone hover:text-cream'
                  }`}
                >
                  {link.label}
                </Link>
              )
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
              className="p-2 hover:bg-cream/10 rounded-sm transition-colors text-cream"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
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
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className={`w-full text-left text-lg font-display tracking-wide py-2 inline-flex items-center justify-between ${
                        mobileOpenDropdown === link.label ? 'text-cream' : 'text-stone'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileOpenDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 flex flex-col gap-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href + item.label}
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base text-stone hover:text-cream transition-colors py-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-display tracking-wide py-2 ${
                      location.pathname === link.href 
                        ? 'text-cream' 
                        : 'text-stone'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
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
