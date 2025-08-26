import { Button } from "@/components/ui/button"
import { Phone, ShoppingCart } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-water bg-clip-text text-transparent">
              Wavio
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>24/7 Support: 1-800-WAVIO</span>
            </div>
            <Button variant="water-outline" size="sm">
              <ShoppingCart className="h-4 w-4" />
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header