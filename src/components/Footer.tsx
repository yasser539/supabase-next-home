import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Droplets,
  ArrowRight,
  Heart
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {
  const { t } = useTranslation()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ]

  const footerLinks = {
    company: [
      { label: t('footer.about', 'من نحن'), href: '/#about' },
      { label: t('footer.services', 'خدماتنا'), href: '/services' },
      { label: t('footer.careers', 'الوظائف'), href: '/careers' },
      { label: t('footer.news', 'الأخبار'), href: '/blog' }
    ],
    services: [
      { label: t('footer.home_delivery', 'توصيل منزلي'), href: '/services/home' },
      { label: t('footer.office_delivery', 'توصيل مكاتب'), href: '/services/office' },
      { label: t('footer.bulk_orders', 'طلبات بالجملة'), href: '/services/bulk' },
      { label: t('footer.subscription', 'اشتراكات شهرية'), href: '/services/subscription' }
    ],
    support: [
      { label: t('footer.contact', 'اتصل بنا'), href: '/contact' },
      { label: t('footer.faq', 'الأسئلة الشائعة'), href: '/faq' },
      { label: t('footer.help', 'المساعدة'), href: '/help' },
      { label: t('footer.track', 'تتبع الطلب'), href: '/track' }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-glow">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('footer.newsletter_title', 'ابق على اتصال معنا')}
              </h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {t('footer.newsletter_desc', 'احصل على آخر العروض والأخبار مباشرة في بريدك الإلكتروني')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('footer.email_placeholder', 'أدخل بريدك الإلكتروني')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm flex-1"
              />
              <Button className="modern-btn group">
                <span className="flex items-center gap-2">
                  {t('footer.subscribe', 'اشترك')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl shadow-medium flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold heading-gradient">
                  {t('logo', 'مياه نقية')}
                </div>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                {t('footer.company_desc', 'رائدون في تقديم أنقى المياه وأفضل خدمات التوصيل منذ أكثر من 15 عاماً. جودة استثنائية وخدمة لا تُضاهى.')}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>25 W 51st St, New York, NY 10019</span>
                </div>
                
                <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>212.262.3200</span>
                </div>
                
                <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span>{t('footer.working_hours', '24/7 - خدمة على مدار الساعة')}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">
                {t('footer.company', 'الشركة')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">
                {t('footer.services', 'الخدمات')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">
                {t('footer.support', 'الدعم')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-white/10" />
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                © 2024 {t('logo', 'مياه نقية')}. 
                <span className="flex items-center gap-1">
                  {t('footer.rights', 'جميع الحقوق محفوظة')}
                  <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                </span>
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-white/60 hover:text-white transition-colors"
              >
                {t('footer.privacy', 'سياسة الخصوصية')}
              </Link>
              <Link 
                to="/terms" 
                className="text-white/60 hover:text-white transition-colors"
              >
                {t('footer.terms', 'الشروط والأحكام')}
              </Link>
              <Link 
                to="/cookies" 
                className="text-white/60 hover:text-white transition-colors"
              >
                {t('footer.cookies', 'ملفات تعريف الارتباط')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer