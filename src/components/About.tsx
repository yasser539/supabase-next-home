import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Shield, Award } from "lucide-react"
import deliveryService from "@/assets/delivery-service.jpg"
import { useTranslation } from "react-i18next"
import OrderModal from "./OrderModal"

const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Text Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
                🌟 من نحن
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="text-foreground">نحن رائدون في</span>
              <br />
              <span className="heading-gradient">توصيل المياه النقية</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              {t('about.description', 'نحن شركة رائدة في مجال توصيل المياه النقية، نخدم عملاءنا منذ أكثر من 15 عاماً. نلتزم بتقديم أعلى معايير الجودة والخدمة المتميزة لكل عميل.')}
            </p>
            
            {/* Enhanced Key Features */}
            <div className="space-y-6 mb-12">
              <div className="group feature-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-medium">
                    <Droplets className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {t('about.feature1', 'مياه نقية 100%')}
                    </h3>
                    <p className="text-muted-foreground">معايير دولية للنقاء والجودة</p>
                  </div>
                </div>
              </div>
              
              <div className="group feature-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-medium">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {t('about.feature2', 'معايير سلامة عالية')}
                    </h3>
                    <p className="text-muted-foreground">فحوصات دورية وشهادات معتمدة</p>
                  </div>
                </div>
              </div>
              
              <div className="group feature-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-medium">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {t('about.feature3', 'جودة معتمدة')}
                    </h3>
                    <p className="text-muted-foreground">حائزون على جوائز الجودة العالمية</p>
                  </div>
                </div>
              </div>
            </div>

            <OrderModal>
              <Button className="modern-btn text-lg px-10 py-6 group">
                <span className="relative z-10 flex items-center gap-3">
                  {t('about.cta', 'ابدأ الآن')}
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
              </Button>
            </OrderModal>
          </div>
          
          {/* Enhanced Image Section */}
          <div className="animate-slide-up relative">
            <div className="relative group">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-large group-hover:shadow-glow transition-all duration-500">
                <img
                  src={deliveryService}
                  alt="Water delivery service"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-large">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">15+</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">سنوات من</p>
                    <p className="font-bold text-foreground">الخبرة والتميز</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-gradient-accent/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              50K+
            </div>
            <p className="text-muted-foreground font-medium">عميل راضي</p>
          </div>
          <div className="group">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              99%
            </div>
            <p className="text-muted-foreground font-medium">نقاء مضمون</p>
          </div>
          <div className="group">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <p className="text-muted-foreground font-medium">خدمة مستمرة</p>
          </div>
          <div className="group">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <p className="text-muted-foreground font-medium">سنة خبرة</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About