import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import OrderModal from "./OrderModal"
import sliderLifestyle from "@/assets/slider-lifestyle.jpg"
import sliderProduct from "@/assets/slider-product.jpg"
import sliderCommercial from "@/assets/slider-commercial.jpg"

const slides = [
  {
    id: 1,
    image: sliderLifestyle,
    titleKey: 'slider.lifestyle.title',
    subtitleKey: 'slider.lifestyle.subtitle',
    type: 'lifestyle'
  },
  {
    id: 2,
    image: sliderProduct,
    titleKey: 'slider.product.title',
    subtitleKey: 'slider.product.subtitle',
    type: 'product'
  },
  {
    id: 3,
    image: sliderCommercial,
    titleKey: 'slider.commercial.title',
    subtitleKey: 'slider.commercial.subtitle',
    type: 'commercial'
  }
]

const HeroSlider = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={t(slide.titleKey)}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white animate-fade-in-up">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  {t(slide.titleKey, slide.type === 'lifestyle' ? 'نمط حياة صحي' : 
                    slide.type === 'product' ? 'منتجات عالية الجودة' : 'خدمة تجارية متميزة')}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                  {t(slide.subtitleKey, slide.type === 'lifestyle' ? 'اشرب الماء النقي واعيش حياة صحية' : 
                    slide.type === 'product' ? 'مياه نقية بأعلى معايير الجودة' : 'توصيل سريع وموثوق للشركات')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <OrderModal>
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group">
                      {t('order', 'اطلب الآن')}
                      <ArrowRight className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </OrderModal>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                  >
                    {t('learnMore', 'اعرف المزيد')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider