import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, Shield, Droplets } from "lucide-react"
import { useTranslation } from "react-i18next"

const Services = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: t('services.fastDelivery', 'Fast Delivery'),
      description: t('services.fastDeliveryDesc', 'Same-day delivery available in most areas. Get your water when you need it most.')
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('services.support247', '24/7 Service'),
      description: t('services.support247Desc', 'Round-the-clock customer support and emergency water delivery services.')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('services.qualityAssured', 'Quality Assured'),
      description: t('services.qualityAssuredDesc', 'All our water goes through rigorous testing to ensure the highest purity standards.')
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: t('services.pureFresh', 'Pure & Fresh'),
      description: t('services.pureFreshDesc', 'Premium quality water sourced from natural springs and purified using advanced filtration.')
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-glass-blue">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-block">
            <span className="inline-block w-12 h-1 bg-gradient-water rounded-full mb-4"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            {t('services.title1', 'PURE WATER')}{" "}
            <span className="heading-gradient">{t('services.title2', 'DELIVERY SERVICE')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            {t('services.subtitle', 'We offer various different types of bottled water. To drink the best water available you need an excellent and safe water company.')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-water rounded-2xl flex items-center justify-center mx-auto text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-water rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold font-heading mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-balance">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services