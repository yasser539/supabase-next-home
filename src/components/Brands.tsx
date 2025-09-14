import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

const brands = [
  {
    name: "نوفا الطبيعية",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ccircle cx='30' cy='30' r='15' fill='%2300a8ff' opacity='0.8'/%3E%3Ccircle cx='25' cy='25' r='8' fill='%2300a8ff'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23007acc'%3Eنوفا الطبيعية%3C/text%3E%3C/svg%3E"
  },
  {
    name: "كريستال الخليج",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpolygon points='30,10 40,25 30,40 20,25' fill='%2300a8ff' opacity='0.7'/%3E%3Cpolygon points='25,15 35,25 25,35 15,25' fill='%2300a8ff'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23007acc'%3Eكريستال الخليج%3C/text%3E%3C/svg%3E"
  },
  {
    name: "المصدر الأزرق",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath d='M30,10 Q35,20 30,30 Q25,20 30,10' fill='%2300a8ff'/%3E%3Cpath d='M20,20 Q25,30 20,40 Q15,30 20,20' fill='%2300a8ff' opacity='0.7'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23007acc'%3Eالمصدر الأزرق%3C/text%3E%3C/svg%3E"
  },
  {
    name: "عين صافي",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cellipse cx='30' cy='30' rx='18' ry='12' fill='%2300a8ff' opacity='0.6'/%3E%3Cellipse cx='30' cy='28' rx='10' ry='8' fill='%2300a8ff'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23007acc'%3Eعين صافي%3C/text%3E%3C/svg%3E"
  },
  {
    name: "أكوا برو",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect x='20' y='20' width='20' height='20' rx='3' fill='%2300a8ff' opacity='0.8'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23ffffff'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23007acc'%3Eأكوا برو%3C/text%3E%3C/svg%3E"
  },
  {
    name: "الينبوع الذهبي",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath d='M30,15 L35,25 L30,35 L25,25 Z' fill='%23ffd700'/%3E%3Ccircle cx='30' cy='25' r='4' fill='%2300a8ff'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='%23007acc'%3Eالينبوع الذهبي%3C/text%3E%3C/svg%3E"
  },
  {
    name: "مياه الواحة",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath d='M25,35 Q30,20 35,35 Q30,40 25,35' fill='%2300a8ff'/%3E%3Cpath d='M15,25 Q25,15 35,25' stroke='%2300a8ff' stroke-width='2' fill='none'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23007acc'%3Eمياه الواحة%3C/text%3E%3C/svg%3E"
  },
  {
    name: "الفجر الطبيعي",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ccircle cx='25' cy='35' r='3' fill='%2300a8ff'/%3E%3Cpath d='M25,32 L30,25 L35,32' stroke='%2300a8ff' stroke-width='2' fill='none'/%3E%3Cpath d='M20,35 L30,35 L40,35' stroke='%2300a8ff' stroke-width='1' fill='none'/%3E%3Ctext x='60' y='35' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='%23007acc'%3Eالفجر الطبيعي%3C/text%3E%3C/svg%3E"
  }
]

const Brands = () => {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
              🤝 شركاؤنا
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-foreground">نتعاون مع</span>
            <br />
            <span className="heading-gradient">أفضل العلامات التجارية</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('brands.subtitle', 'شراكات استراتيجية مع أكبر المؤسسات لضمان أعلى معايير الجودة والخدمة المتميزة لعملائنا')}
          </p>
        </div>

        {/* Enhanced Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="modern-card group-hover:shadow-colored transition-all duration-500 relative">
                {/* Brand logo */}
                <div className="flex items-center justify-center h-20">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-12 w-auto max-w-full opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Brand name */}
                <div className="mt-4 text-center">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {brand.name}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up">
          <div className="group modern-card hover:shadow-colored transition-all duration-500">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-medium">
                <span className="text-white font-bold text-2xl">25+</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                شريك معتمد
              </div>
              <div className="text-muted-foreground">
                {t('brands.partners', 'علاقات شراكة قوية')}
              </div>
            </div>
          </div>
          
          <div className="group modern-card hover:shadow-colored transition-all duration-500">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-medium">
                <span className="text-white font-bold text-2xl">100%</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                ضمان الجودة
              </div>
              <div className="text-muted-foreground">
                {t('brands.quality', 'معايير عالمية للجودة')}
              </div>
            </div>
          </div>
          
          <div className="group modern-card hover:shadow-colored transition-all duration-500">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-medium">
                <span className="text-white font-bold text-xl">24/7</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                دعم فني
              </div>
              <div className="text-muted-foreground">
                {t('brands.support', 'خدمة عملاء متواصلة')}
              </div>
            </div>
          </div>

          <div className="group modern-card hover:shadow-colored transition-all duration-500">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-medium">
                <span className="text-white font-bold text-2xl">5★</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                تقييم العملاء
              </div>
              <div className="text-muted-foreground">
                {t('brands.rating', 'رضا عملاء استثنائي')}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              انضم إلى آلاف العملاء الراضين
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              اكتشف الفرق مع خدماتنا المتميزة وشراكاتنا الاستراتيجية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="modern-btn text-lg px-8 py-4">
                ابدأ الآن
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 text-lg px-8 py-4">
                تعرف على المزيد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands