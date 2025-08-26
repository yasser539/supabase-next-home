import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Droplet, Award, Truck } from "lucide-react"

const Products = () => {
  const { t } = useTranslation()

  const products = [
    {
      id: 1,
      name: "Premium Natural Water",
      size: "500ml",
      price: "2.50",
      features: ["Natural Spring", "pH Balanced", "Mineral Rich"],
      popular: true
    },
    {
      id: 2,
      name: "Family Pack Water",
      size: "1.5L × 6 bottles",
      price: "12.99",
      features: ["Bulk Savings", "BPA Free", "Long Shelf Life"],
      popular: false
    },
    {
      id: 3,
      name: "Office Water Dispenser",
      size: "19L",
      price: "8.99",
      features: ["Office Delivery", "Reusable", "Cost Effective"],
      popular: true
    },
    {
      id: 4,
      name: "Alkaline Water Plus",
      size: "750ml",
      price: "3.75",
      features: ["pH 9.5+", "Enhanced Minerals", "Antioxidants"],
      popular: false
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('nav.products')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our premium selection of bottled water products, carefully sourced and tested for your health and satisfaction.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Droplet className="h-4 w-4 text-primary" />
              <span>Pure & Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Certified Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="relative group hover:shadow-lg transition-all duration-300">
                {product.popular && (
                  <Badge className="absolute -top-2 -right-2 z-10 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <Droplet className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <p className="text-muted-foreground">{product.size}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        ${product.price}
                      </div>
                      <Button size="sm" className="group-hover:shadow-md transition-shadow">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-water py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Bulk Orders?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us for special pricing on bulk orders, subscription plans, and corporate delivery services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Subscription Plans
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products