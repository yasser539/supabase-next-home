import { Button } from "@/components/ui/button"
import { Phone, ShoppingCart, Globe } from "lucide-react"
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
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-water bg-clip-text text-transparent logo-animate">
              {t('logo')}
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              {t('nav.products')}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">
              {t('nav.blog')}
            </a>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>
            <a href="/careers" className="text-foreground hover:text-primary transition-colors">
              {t('careers.title')}
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{t('support')}</span>
            </div>
            <Button variant="water-outline" size="sm" className="order-btn">
              <ShoppingCart className="h-4 w-4" />
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