import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { artists } from '@/data/products';
import oliveLogo from '@/assets/olive-logo.png';
import { ChevronDown } from 'lucide-react';

interface DropdownSubItem {
  href: string;
  label: string;
}

interface DropdownSection {
  title: string;
  items: DropdownSubItem[];
}

interface NavLink {
  href?: string;
  label: string;
  dropdown?: DropdownSection[];
}

const getNavLinks = (language: 'en' | 'ar'): NavLink[] => {
  if (language === 'en') {
    return [
      { 
        label: 'Collection',
        dropdown: [
          {
            title: 'Featured',
            items: [
              { href: '/collection', label: 'All Featured' },
              { href: '/collection?filter=new-arrivals', label: 'New Arrivals' },
              { href: '/collection?filter=bestsellers', label: 'Best Sellers' },
            ]
          },
          {
            title: 'Themes',
            items: [
              { href: '/collection?filter=architecture', label: 'Architecture' },
              { href: '/collection?filter=history', label: 'History' },
              { href: '/collection?filter=nature', label: 'Nature' },
              { href: '/collection?filter=portrait', label: 'Portrait' },
              { href: '/collection', label: 'View All →' },
            ]
          },
          {
            title: 'Our Picks',
            items: [
              { href: '/artwork/desert-curve-i', label: 'Desert Curve I' },
              { href: '/artwork/geometry-of-faith', label: 'Geometry of Faith' },
              { href: '/artwork/mediterranean-stillness', label: 'Mediterranean Stillness' },
            ]
          },
        ]
      },
      { 
        label: 'Artists',
        dropdown: [
          {
            title: 'All Artists',
            items: [
              { href: '/artists/karim-hassan', label: 'Karim Hassan' },
              { href: '/artists/layla-mansour', label: 'Layla Mansour' },
              { href: '/artists/omar-farouk', label: 'Omar Farouk' },
              { href: '/artists', label: 'View All →' },
            ]
          },
          {
            title: "Editor's Choice",
            items: [
              { href: '/artwork/shadow-geometry', label: 'Shadow Geometry' },
              { href: '/artwork/olive-grove-light', label: 'Olive Grove Light' },
              { href: '/artwork/columns-of-time', label: 'Columns of Time' },
            ]
          },
        ]
      },
      { href: '/about', label: 'About' },
      { 
        label: 'Discover',
        dropdown: [
          {
            title: 'Services',
            items: [
              { href: '/bespoke', label: 'Bespoke Inquiries' },
              { href: '/corporate', label: 'Corporate' },
              { href: '/contact', label: 'Contact' },
            ]
          },
          {
            title: 'Learn More',
            items: [
              { href: '/faq', label: 'FAQs' },
              { href: '/print-quality', label: 'Print Quality' },
            ]
          },
        ]
      },
    ];
  } else {
    return [
      { 
        label: 'المجموعة',
        dropdown: [
          {
            title: 'المميزة',
            items: [
              { href: '/collection', label: 'جميع المميزة' },
              { href: '/collection?filter=new-arrivals', label: 'وصل حديثاً' },
              { href: '/collection?filter=bestsellers', label: 'الأكثر مبيعاً' },
            ]
          },
          {
            title: 'المواضيع',
            items: [
              { href: '/collection?filter=architecture', label: 'العمارة' },
              { href: '/collection?filter=history', label: 'التاريخ' },
              { href: '/collection?filter=nature', label: 'الطبيعة' },
              { href: '/collection?filter=portrait', label: 'البورتريه' },
              { href: '/collection', label: 'عرض الكل ←' },
            ]
          },
          {
            title: 'اختياراتنا',
            items: [
              { href: '/artwork/desert-curve-i', label: 'منحنى الصحراء I' },
              { href: '/artwork/geometry-of-faith', label: 'هندسة الإيمان' },
              { href: '/artwork/mediterranean-stillness', label: 'سكون البحر المتوسط' },
            ]
          },
        ]
      },
      { 
        label: 'الفنانون',
        dropdown: [
          {
            title: 'جميع الفنانين',
            items: [
              { href: '/artists/karim-hassan', label: 'كريم حسن' },
              { href: '/artists/layla-mansour', label: 'ليلى منصور' },
              { href: '/artists/omar-farouk', label: 'عمر فاروق' },
              { href: '/artists', label: 'عرض الكل ←' },
            ]
          },
          {
            title: 'اختيار المحرر',
            items: [
              { href: '/artwork/shadow-geometry', label: 'هندسة الظلال' },
              { href: '/artwork/olive-grove-light', label: 'ضوء بستان الزيتون' },
              { href: '/artwork/columns-of-time', label: 'أعمدة الزمن' },
            ]
          },
        ]
      },
      { href: '/about', label: 'من نحن' },
      { 
        label: 'اكتشف',
        dropdown: [
          {
            title: 'الخدمات',
            items: [
              { href: '/bespoke', label: 'طلبات مخصصة' },
              { href: '/corporate', label: 'الشركات' },
              { href: '/contact', label: 'تواصل معنا' },
            ]
          },
          {
            title: 'اعرف المزيد',
            items: [
              { href: '/faq', label: 'الأسئلة الشائعة' },
              { href: '/print-quality', label: 'جودة الطباعة' },
            ]
          },
        ]
      },
    ];
  }
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { totalItems, setIsCartOpen } = useCartStore();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const count = totalItems();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10;
      
      // Always show header at the top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      
      // Determine scroll direction with threshold to avoid jitter
      if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
        return;
      }
      
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = getNavLinks(language);

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collection?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="gallery-container">
        <div className="flex items-center justify-between h-14 md:h-20 relative" dir="ltr">
          {/* Logo - Always LTR with English font */}
          <Link 
            to="/" 
            className="flex items-center gap-1 md:gap-1.5 text-lg md:text-2xl tracking-wider text-cream"
          >
            <img src={oliveLogo} alt="Olive Studios" className="h-12 md:h-[5.25rem] w-auto" />
            <span style={{ fontFamily: "'Jost', 'Futura', system-ui, sans-serif" }}>Olive Studios</span>
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
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
                  
                  {/* Dropdown rendered via portal-like fixed positioning */}
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

          {/* Full-width dropdown overlay - rendered outside nav for proper positioning */}
          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-x-0 top-14 md:top-20 z-40 bg-white/5 backdrop-blur-lg border-b border-white/10"
                onMouseEnter={() => setOpenDropdown(openDropdown)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="gallery-container py-10">
                  <div className="flex flex-wrap gap-x-16 gap-y-8 justify-center">
                    {links.find(l => l.label === openDropdown)?.dropdown?.map((section, sectionIndex) => (
                      <div key={section.title + sectionIndex} className="flex flex-col gap-3">
                        <span className="text-xs tracking-widest uppercase text-cream/50 font-display">
                          {section.title}
                        </span>
                        <div className="flex flex-col gap-2">
                          {section.items.map((item, index) => (
                            <Link
                              key={item.href + item.label + index}
                              to={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="text-sm tracking-wide capitalize text-cream/60 hover:text-cream transition-colors font-display"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="font-display text-xs md:text-sm tracking-wide text-cream hover:text-cream/80 transition-colors"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            {/* Search */}
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSearchSubmit}
                  className="flex items-center overflow-hidden md:!w-[200px]"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder={language === 'en' ? 'Search...' : 'بحث...'}
                    autoFocus
                    className="w-full bg-transparent border-b border-cream/50 text-cream placeholder:text-cream/50 text-xs md:text-sm py-1 px-2 focus:outline-none focus:border-cream transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-0.5 md:p-1 text-cream hover:text-cream/80 transition-colors"
                  >
                    <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </motion.form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 md:p-2 hover:bg-cream/10 rounded-sm transition-colors text-cream"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 md:p-2 hover:bg-cream/10 rounded-sm transition-colors text-cream"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-4 h-4 md:w-5 md:h-5 bg-brass text-olive-black text-[10px] md:text-xs rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 md:p-2 hover:bg-cream/10 rounded-sm transition-colors text-cream"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Menu className="w-4 h-4 md:w-5 md:h-5" />}
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
            className="lg:hidden border-t border-cream/10 bg-olive-black/95 backdrop-blur-md"
          >
            <nav className="gallery-container py-6 flex flex-col gap-4">
              {links.map((link) => (
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className={`w-full text-left text-lg font-display tracking-wide py-2 inline-flex items-center justify-between ${
                        mobileOpenDropdown === link.label ? 'text-brass' : 'text-cream'
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
                          <div className="pl-4 py-2 flex flex-col gap-4">
                            {link.dropdown.map((section, sectionIndex) => (
                              <div key={section.title + sectionIndex} className="flex flex-col gap-2">
                                <span className="text-xs tracking-widest uppercase text-cream/50 font-display">
                                  {section.title}
                                </span>
                                {section.items.map((item, index) => (
                                  <Link
                                    key={item.href + item.label + index}
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base text-cream/60 hover:text-brass transition-colors py-1 pl-2"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
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
                        ? 'text-brass' 
                        : 'text-cream'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-display tracking-wide py-2 text-cream hover:text-brass transition-colors"
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
