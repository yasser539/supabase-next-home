import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import deliveryService from "@/assets/delivery-service.jpg"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()
  const waterComposition = [
    { mineral: "Calcium (Ca²⁺)", value: "80 mg/L" },
    { mineral: "Magnesium (Mg²⁺)", value: "26 mg/L" },
    { mineral: "Sodium (Na⁺)", value: "6.5 mg/L" },
    { mineral: "Potassium (K⁺)", value: "1 mg/L" },
    { mineral: "Bicarbonate (HCO₃⁻)", value: "357 mg/L" },
    { mineral: "Sulfate (SO₄²⁻)", value: "42 mg/L" }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Water Composition Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              {t('about.composition', 'WATER')} <span className="text-primary">{t('about.compositionHighlight', 'COMPOSITION')}</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('about.description', 'Our water is carefully tested and contains essential minerals for optimal health and taste.')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {waterComposition.map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="text-sm text-muted-foreground">{item.mineral}</div>
                  <div className="font-semibold text-primary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={deliveryService}
              alt="Professional water delivery service"
              className="w-full rounded-lg shadow-soft"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl font-bold">
            {t('about.our', 'OUR')} <span className="text-primary">{t('about.story', 'STORY')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.storyText', 'Our company was founded in 2010. When faced initially as a personal health issue to access fresh, clean drinking water. The company is world-class and lead.')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-none shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">COMPETITIVE PRICING</h3>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">HIGH EFFICIENCY</h3>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">MULTIFUNCTIONAL</h3>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">PROFESSIONAL SERVICE</h3>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="water" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About