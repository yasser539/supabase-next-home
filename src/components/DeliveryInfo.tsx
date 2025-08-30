import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import OrderModal from "./OrderModal"

const DeliveryInfo = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              DELIVERY <span className="text-primary">SERVICE</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our affordable water delivery service works with you to match your 
              specific needs and help you create a healthier lifestyle.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">FREE DELIVERY</h3>
                  <p className="text-muted-foreground">Available in most metropolitan areas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">FLEXIBLE HOURS</h3>
                  <p className="text-muted-foreground">7 AM - 10 PM delivery window</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">SCHEDULED DELIVERY</h3>
                  <p className="text-muted-foreground">Weekly, bi-weekly, or monthly options</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <OrderModal>
                <Button variant="water" size="lg">
                  Order Now
                </Button>
              </OrderModal>
              <Link to="/#about">
                <Button variant="water-outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right content - Pricing */}
          <Card className="shadow-medium border-none">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">CHOOSE YOUR PLAN</h3>
                <p className="text-muted-foreground">Select the perfect water delivery plan for your needs</p>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-accent/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">5-Gallon Jug</h4>
                      <p className="text-sm text-muted-foreground">Perfect for small families</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">$12.99</div>
                      <div className="text-sm text-muted-foreground">per bottle</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">3-Bottle Package</h4>
                      <p className="text-sm text-muted-foreground">Most popular choice</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">$33.99</div>
                      <div className="text-sm text-muted-foreground">save $5.98</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">5-Bottle Package</h4>
                      <p className="text-sm text-muted-foreground">Best value for large families</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">$52.99</div>
                      <div className="text-sm text-muted-foreground">save $12.96</div>
                    </div>
                  </div>
                </div>
              </div>

              <OrderModal>
                <Button variant="water" className="w-full mt-8" size="lg">
                  Add to Cart
                </Button>
              </OrderModal>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DeliveryInfo