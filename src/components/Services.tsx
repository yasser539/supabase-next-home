import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, Shield, Droplets } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Same-day delivery available in most areas. Get your water when you need it most."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Service",
      description: "Round-the-clock customer support and emergency water delivery services."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "All our water goes through rigorous testing to ensure the highest purity standards."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Pure & Fresh",
      description: "Premium quality water sourced from natural springs and purified using advanced filtration."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            PURE WATER <span className="text-primary">DELIVERY SERVICE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer various different types of bottled water. To drink the 
            best water available you need an excellent and safe water company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="text-primary mx-auto w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services