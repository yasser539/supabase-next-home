import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Globe, Search, MapPin, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import OrderModal from "./OrderModal";
const Header = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleLanguage = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(next);
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = next;
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar - Contact info like Wavio */}
      

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-water bg-clip-text text-transparent logo-animate">
              {t('logo')}
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              {t('nav.home')}
            </Link>
            <Link to="/#about" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              {t('nav.about')}
            </Link>
            <Link to="/products" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              {t('nav.products')}
            </Link>
            <Link to="/blog" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              {t('nav.blog')}
            </Link>
            <Link to="/contact" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            <OrderModal>
              <Button variant="water-outline" size="sm" className="order-btn hidden sm:flex">
                <ShoppingCart className="h-4 w-4 mr-2" />
                {t('order')}
              </Button>
            </OrderModal>

            <Button variant="ghost" size="sm" onClick={toggleLanguage} aria-label="Toggle language">
              <Globe className="h-4 w-4" />
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-2">
              <Link to="/" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/#about" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.about')}
              </Link>
              <Link to="/products" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.products')}
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.blog')}
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
              <div className="pt-2">
                <OrderModal onOpen={() => setIsMobileMenuOpen(false)}>
                  <Button variant="water-outline" size="sm" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('order')}
                  </Button>
                </OrderModal>
              </div>
            </nav>
          </div>}
        </div>
    </header>;
};
export default Header;