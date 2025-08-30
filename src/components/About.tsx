import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Shield, Award } from "lucide-react"
import deliveryService from "@/assets/delivery-service.jpg"
import { useTranslation } from "react-i18next"
import OrderModal from "./OrderModal"

const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('about.title', 'من نحن')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description', 'نحن شركة رائدة في مجال توصيل المياه النقية، نخدم عملاءنا منذ أكثر من 15 عاماً. نلتزم بتقديم أعلى معايير الجودة والخدمة المتميزة.')}
            </p>
            
            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">
                  {t('about.feature1', 'مياه نقية 100%')}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">
                  {t('about.feature2', 'معايير سلامة عالية')}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">
                  {t('about.feature3', 'جودة معتمدة')}
                </span>
              </div>
            </div>

            <OrderModal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                {t('about.cta', 'اطلب الآن')}
              </Button>
            </OrderModal>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up">
            <img
              src={deliveryService}
              alt="Water delivery service"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About