import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {
  const { t } = useTranslation()

  const downloadButtons = [
    {
      name: "App Store",
      icon: "🍎",
      text: "Download on the",
      subtext: "App Store"
    },
    {
      name: "Google Play",
      icon: "📱",
      text: "Get it on",
      subtext: "Google Play"
    },
    {
      name: "App Gallery",
      icon: "📲",
      text: "Explore it on",
      subtext: "App Gallery"
    }
  ]

  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "Apple Pay", icon: "📱" },
    { name: "STC Pay", icon: "💰" },
    { name: "Mada", icon: "💳" },
    { name: "Credit Card", icon: "💳" }
  ]

  const socialLinks = [
    { name: "Snapchat", icon: "👻", href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "TikTok", icon: "🎵", href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" }
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* App Download Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.downloadApp', 'حافظ على ترطيبك')}
            </h3>
            <p className="text-sm text-white/80 mb-6">
              {t('footer.downloadDescription', 'حمل تطبيق مياه نوفا اطلب الآن')}
            </p>
            <div className="space-y-3">
              {downloadButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 justify-start text-xs"
                >
                  <span className="mr-2">{button.icon}</span>
                  <div className="text-left">
                    <div className="text-xs opacity-80">{button.text}</div>
                    <div className="font-semibold">{button.subtext}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.contact', 'اتصل بنا')}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 mt-1 text-white/80" />
                <div>
                  <p>{t('footer.address', 'شارع التحلية في التونسية، الرياض')}</p>
                  <p>{t('footer.addressDetails', 'المملكة العربية السعودية، 13249')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-white/80" />
                <span>9200 33 445</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-white/80" />
                <span>info@novawater.com</span>
              </div>
            </div>
          </div>

          {/* Help Center */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.helpCenter', 'مركز المساعدة')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.commonQuestions', 'الأسئلة الشائعة')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.termsConditions', 'الشروط والأحكام')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.services', 'الخدمات')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.basicGroup', 'المجموعة الأساسية')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.sportWater', 'مياه نوفا الرياضية')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.luxuryGroup', 'مجموعة مياه نوفا الفاخرة')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.bigGroup', 'المجموعة الكبيرة')}
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.aboutUs', 'عن نوفا')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.aboutInfo', 'معلومات عنا')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.news', 'الأخبار')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & Social Media */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Payment Methods */}
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-2 min-w-[60px] h-10 flex items-center justify-center"
                >
                  <span className="text-lg">{method.icon}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  {typeof social.icon === 'string' ? (
                    <span>{social.icon}</span>
                  ) : (
                    <social.icon className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">
            {t('footer.copyright', 'جميع الحقوق محفوظة © نوفا 2024')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer