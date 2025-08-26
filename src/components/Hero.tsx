import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import heroWaterBottle from "@/assets/hero-water-bottle.jpg"

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">BOTTLED</span>{" "}
                <span className="bg-gradient-water bg-clip-text text-transparent">
                  WATER DELIVERY
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Pure, fresh water delivered right to your doorstep. Experience the convenience of premium hydration with our reliable delivery service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="water" size="lg" className="text-lg">
                Order Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button variant="water-outline" size="lg" className="text-lg">
                <Play className="h-5 w-5" />
                Read More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Delivery Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Pure Water</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroWaterBottle}
                alt="Premium water bottles for delivery service"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero