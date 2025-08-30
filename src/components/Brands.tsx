import { useTranslation } from "react-i18next"

const brands = [
  {
    name: "Aqua Pure",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23007acc'%3EAqua Pure%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Crystal Water",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23007acc'%3ECrystal Water%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Blue Spring",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23007acc'%3EBlue Spring%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Fresh Flow",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23007acc'%3EFresh Flow%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Pure Source",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23007acc'%3EPure Source%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Hydro Plus",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23007acc'%3EHydro Plus%3C/text%3E%3C/svg%3E"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              15+
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
        </div>
      </div>
    </section>
  )
}

export default Brands