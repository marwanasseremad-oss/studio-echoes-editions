import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="gallery-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-tight">
              Studio Aura
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Museum-grade photography editions from Egypt & the region. Limited runs, exceptional quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/collection" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Collection 001
              </Link>
              <Link to="/artists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Artists
              </Link>
              <Link to="/print-quality" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Print Quality
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-lg mb-4">Information</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping & Returns
              </Link>
              <Link to="/corporate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Corporate & Designers
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://instagram.com/studioaura" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @studioaura
              </a>
              <a 
                href="mailto:hello@studioaura.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@studioaura.com
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
            © {new Date().getFullYear()} Studio Aura. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
