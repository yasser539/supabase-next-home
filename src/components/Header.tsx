import { Button } from "@/components/ui/button"
import { Phone, ShoppingCart, Globe, Search, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Header = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(next)
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = next
  }

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar - Contact info like Wavio */}
      <div className="hidden lg:block bg-accent/30 py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>25 W 51st St, New York, NY 10019</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>212.262.3200</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Call Us
          </div>
        </div>
      </div>

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
            <Link to="/#services" className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              {t('nav.services')}
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
            
            <Button variant="water-outline" size="sm" className="order-btn">
              <ShoppingCart className="h-4 w-4 mr-2" />
              {t('order')}
            </Button>

            <Button variant="ghost" size="sm" onClick={toggleLanguage} aria-label="Toggle language">
              <Globe className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header