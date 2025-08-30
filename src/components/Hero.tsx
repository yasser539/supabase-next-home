import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import heroWaterBottle from "@/assets/hero-water-bottle.jpg"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-ocean-blue/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="heading-primary">
                <span className="text-foreground">{t('hero.part1', 'BOTTLED')}</span>{" "}
                <span className="heading-gradient">
                  {t('hero.part2', 'WATER DELIVERY')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed text-balance">
                {t('hero.subtitle', 'Pure, fresh water delivered right to your doorstep. Experience the convenience of premium hydration with our reliable delivery service.')}
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="water" size="lg" className="text-lg interactive-button group">
                  {t('order')}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Link to="/#about">
                <Button variant="water-outline" size="lg" className="text-lg interactive-button group">
                  <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {t('hero.readMore', 'Read More')}
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-primary mb-2 font-poppins group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('stats.happyCustomers', 'Happy Customers')}</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-primary mb-2 font-poppins group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">{t('stats.deliveryService', 'Delivery Service')}</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-primary mb-2 font-poppins group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-muted-foreground font-medium">{t('stats.pureWater', 'Pure Water')}</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10 group">
              <img
                src={heroWaterBottle}
                alt="Premium water bottles for delivery service"
                className="w-full max-w-md mx-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-ocean-blue/5 rounded-full blur-3xl animate-glow" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ocean-blue/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero