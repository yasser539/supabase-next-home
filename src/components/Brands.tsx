import { useTranslation } from "react-i18next"

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
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('brands.title', 'شركاؤنا المميزون')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('brands.subtitle', 'نتعامل مع أفضل العلامات التجارية لنضمن لك أعلى معايير الجودة')}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-auto max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              25+
            </div>
            <div className="text-muted-foreground">
              {t('brands.partners', 'شريك معتمد')}
            </div>
          </div>
          
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-muted-foreground">
              {t('brands.quality', 'ضمان الجودة')}
            </div>
          </div>
          
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-muted-foreground">
              {t('brands.support', 'دعم فني')}
            </div>
          </div>

          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              5★
            </div>
            <div className="text-muted-foreground">
              {t('brands.rating', 'تقييم العملاء')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands