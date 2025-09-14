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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with parallax effect */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={t(slide.titleKey)}
                className="w-full h-full object-cover transition-transform [transition-duration:10000ms]"
                style={{
                  transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)'
                }}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Modern gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            
            {/* Content with enhanced animations */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-4xl text-white">
                <div className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/20">
                      {slide.type === 'lifestyle' ? '🌿 نمط حياة' : 
                       slide.type === 'product' ? '💧 منتجات' : '🏢 خدمات تجارية'}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                    <span className="block">
                      {t(slide.titleKey, slide.type === 'lifestyle' ? 'نمط حياة' : 
                        slide.type === 'product' ? 'منتجات عالية' : 'خدمة تجارية')}
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mt-2">
                      {slide.type === 'lifestyle' ? 'صحي ومتوازن' : 
                       slide.type === 'product' ? 'الجودة' : 'متميزة'}
                    </span>
                  </h1>
                </div>
                
                <div className={`transition-all duration-1000 delay-500 ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <p className="text-xl lg:text-3xl mb-10 text-white/90 leading-relaxed max-w-3xl">
                    {t(slide.subtitleKey, slide.type === 'lifestyle' ? 'اشرب الماء النقي واعيش حياة صحية مليئة بالطاقة والحيوية' : 
                      slide.type === 'product' ? 'مياه نقية بأعلى معايير الجودة العالمية المعتمدة' : 'توصيل سريع وموثوق للشركات والمؤسسات')}
                  </p>
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-700 ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <OrderModal>
                    <Button size="lg" className="glass-card text-white border-white/30 hover:bg-white/20 text-xl px-10 py-7 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        {t('order', 'اطلب الآن')}
                        <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </OrderModal>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white/50 text-white hover:bg-white hover:text-primary text-xl px-10 py-7 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  >
                    {t('learnMore', 'اعرف المزيد')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 glass-card w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 glass-card w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Modern Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-white rounded-full' 
                : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/70 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">تمرر لأسفل</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider