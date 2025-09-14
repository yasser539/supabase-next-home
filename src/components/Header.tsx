import { Button } from "@/components/ui/button"
import { Phone, ShoppingCart, Globe, Search, MapPin, Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useState } from "react"
import OrderModal from "./OrderModal"

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(next)
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = next
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-soft">
      {/* Top bar - Modern contact info */}
      <div className="hidden lg:block bg-gradient-primary/10 py-3 text-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2 hover:text-primary transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <MapPin className="h-4 w-4" />
              <span className="font-medium">25 W 51st St, New York, NY 10019</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">212.262.3200</span>
            </div>
          </div>
          <div className="text-muted-foreground font-medium">
            📞 اتصل بنا الآن
          </div>
        </div>
      </div>

      {/* Main header with modern design */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Modern Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl shadow-medium group-hover:shadow-glow transition-all duration-300 flex items-center justify-center">
                <div className="text-white font-bold text-xl">W</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold heading-gradient logo-animate">
              {t('logo')}
            </div>
          </Link>

          {/* Modern Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className="px-5 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium relative group"
            >
              {t('nav.home')}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
            </Link>
            <Link 
              to="/#about" 
              className="px-5 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium relative group"
            >
              {t('nav.about')}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
            </Link>
            <Link 
              to="/products" 
              className="px-5 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium relative group"
            >
              {t('nav.products')}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
            </Link>
            <Link 
              to="/blog" 
              className="px-5 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium relative group"
            >
              {t('nav.blog')}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium relative group"
            >
              {t('nav.contact')}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Modern Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden lg:flex w-10 h-10 rounded-xl hover:bg-primary/5 hover:text-primary transition-all duration-300"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <OrderModal>
              <Button className="modern-btn hidden sm:flex items-center gap-2 relative z-10">
                <ShoppingCart className="h-4 w-4" />
                <span className="font-semibold">{t('order')}</span>
              </Button>
            </OrderModal>

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage} 
              aria-label="Toggle language"
              className="w-10 h-10 rounded-xl hover:bg-primary/5 hover:text-primary transition-all duration-300 relative group"
            >
              <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-10 h-10 rounded-xl hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Modern Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl mt-4 rounded-2xl shadow-large">
            <nav className="px-6 py-6 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/#about" 
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/products" 
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="pt-4 border-t border-border/50">
                <OrderModal onOpen={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full modern-btn">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('order')}
                  </Button>
                </OrderModal>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header