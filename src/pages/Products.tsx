import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Droplet, Award, Truck, Star, Shield, Zap } from "lucide-react"
import OrderModal from "@/components/OrderModal"

const Products = () => {
  const { t } = useTranslation()

  const products = [
    {
      id: 1,
      name: t('products.categories.premium', 'Premium Natural Water'),
      size: "500ml",
      price: "2.50",
      originalPrice: "3.00",
      features: [
        t('products.features.naturalSpring', 'Natural Spring'),
        t('products.features.phBalanced', 'pH Balanced'),
        t('products.features.mineralRich', 'Mineral Rich')
      ],
      popular: true,
      rating: 4.9,
      image: "💧"
    },
    {
      id: 2,
      name: t('products.categories.family', 'Family Pack Water'),
      size: "1.5L × 6 bottles",
      price: "12.99",
      originalPrice: "18.99",
      features: [
        t('products.features.bulkSavings', 'Bulk Savings'),
        t('products.features.bpaFree', 'BPA Free'),
        t('products.features.longShelfLife', 'Long Shelf Life')
      ],
      popular: false,
      rating: 4.7,
      image: "🥤"
    },
    {
      id: 3,
      name: t('products.categories.office', 'Office Water Dispenser'),
      size: "19L",
      price: "8.99",
      originalPrice: "12.99",
      features: [
        t('products.features.officeDelivery', 'Office Delivery'),
        t('products.features.reusable', 'Reusable'),
        t('products.features.costEffective', 'Cost Effective')
      ],
      popular: true,
      rating: 4.8,
      image: "🏢"
    },
    {
      id: 4,
      name: t('products.categories.alkaline', 'Alkaline Water Plus'),
      size: "750ml",
      price: "3.75",
      originalPrice: "4.50",
      features: [
        t('products.features.alkaline', 'pH 9.5+'),
        t('products.features.enhancedMinerals', 'Enhanced Minerals'),
        t('products.features.antioxidants', 'Antioxidants')
      ],
      popular: false,
      rating: 4.6,
      image: "⚡"
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "جودة مضمونة 100%",
      description: "جميع منتجاتنا معتمدة من الجهات المختصة ومختبرة في مختبرات عالمية"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "توصيل سريع",
      description: "توصيل في نفس اليوم لجميع أنحاء المدينة مع إمكانية الطلب المسبق"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "جوائز الجودة",
      description: "حائزون على أكثر من 15 جائزة دولية في مجال جودة المياه"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            {t('products.title', 'Our Products')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('products.subtitle', 'Discover our premium selection of bottled water products, carefully sourced and tested for your health and satisfaction.')}
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

      {/* Benefits Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:shadow-lg transition-all duration-300 p-6 rounded-2xl bg-white">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-white to-primary/5">
                {product.popular && (
                  <Badge className="absolute -top-2 -right-2 z-10 bg-primary text-primary-foreground animate-pulse">
                    {t('products.popular', 'Popular')}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <p className="text-muted-foreground font-medium">{product.size}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold text-primary">
                            ${product.price}
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </div>
                          )}
                        </div>
                        {product.originalPrice && (
                          <div className="text-xs text-green-600 font-medium">
                            Save ${(parseFloat(product.originalPrice) - parseFloat(product.price)).toFixed(2)}
                          </div>
                        )}
                      </div>
                      <OrderModal>
                        <Button size="sm" className="group-hover:shadow-md transition-all hover:scale-105">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {t('products.addToCart', 'Add to Cart')}
                        </Button>
                      </OrderModal>
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
            {t('products.bulkOrders', 'Need Bulk Orders?')}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {t('products.bulkDescription', 'Contact us for special pricing on bulk orders, subscription plans, and corporate delivery services.')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              {t('products.getQuote', 'Get Quote')}
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              {t('products.subscriptionPlans', 'View Subscription Plans')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products