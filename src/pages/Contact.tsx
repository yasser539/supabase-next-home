import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { toast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import deliveryServiceImg from "@/assets/delivery-service.jpg"

const Contact = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ firstName: '', lastName: '', address: '', phone: '', email: '', note: '' })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [submitting, setSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "اتصل بنا",
      info: "+966 11 234 5678",
      subInfo: "خدمة 24/7"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "راسلنا",
      info: "info@wavio.sa",
      subInfo: "support@wavio.sa"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "زورنا",
      info: "شارع التحلية، الرياض",
      subInfo: "المملكة العربية السعودية"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "ساعات العمل",
      info: "24/7 خدمة مستمرة",
      subInfo: "طوال أيام الأسبوع"
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const next: { [k: string]: string } = {}
    if (!form.firstName.trim()) next.firstName = t('validation.required', 'Required')
    if (!form.lastName.trim()) next.lastName = t('validation.required', 'Required')
    if (!form.email.trim()) next.email = t('validation.required', 'Required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('validation.email', 'Invalid email')
    if (!form.phone.trim()) next.phone = t('validation.required', 'Required')
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      toast({ title: t('contact.formErrorTitle', 'Please fix the errors'), description: t('contact.formErrorDesc', 'Some fields are invalid') })
      return
    }

    setSubmitting(true)
    try {
      // TODO: wire to API / supabase
      await new Promise((r) => setTimeout(r, 700))
      toast({ title: t('contact.successTitle', 'Message sent'), description: t('contact.submitted') })
      setForm({ firstName: '', lastName: '', address: '', phone: '', email: '', note: '' })
    } catch (err) {
      toast({ title: t('contact.errorTitle', 'Submission failed'), description: String(err) })
    } finally {
      setSubmitting(false)
    }
  }

  const navigate = useNavigate()

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            {t('contact.title', 'Contact Us')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('contact.description', 'Fill the form and we will contact you soon.')}
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>نرد خلال ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>خدمة 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4 text-primary" />
              <span>استجابة سريعة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-primary font-medium">{info.info}</p>
                  <p className="text-sm text-muted-foreground">{info.subInfo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">أرسل لنا رسالة</h2>
              <p className="text-muted-foreground mb-8">
                املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة لمساعدتك في جميع استفساراتك.
              </p>

              <Card className="border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <div className="flex-1">
                        <Input 
                          name="firstName" 
                          placeholder={t('contact.firstName', 'First Name') as string} 
                          value={form.firstName} 
                          onChange={handleChange} 
                          className="mb-2 md:mb-0" 
                          aria-invalid={!!errors.firstName} 
                        />
                        {errors.firstName && <div className="text-destructive text-sm mt-1">{errors.firstName}</div>}
                      </div>
                      <div className="flex-1">
                        <Input 
                          name="lastName" 
                          placeholder={t('contact.lastName', 'Last Name') as string} 
                          value={form.lastName} 
                          onChange={handleChange} 
                          aria-invalid={!!errors.lastName} 
                        />
                        {errors.lastName && <div className="text-destructive text-sm mt-1">{errors.lastName}</div>}
                      </div>
                    </div>

                    <div>
                      <Input 
                        name="address" 
                        placeholder={t('contact.address', 'Address') as string} 
                        value={form.address} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div>
                      <Input 
                        name="phone" 
                        placeholder={t('contact.phone', 'Phone') as string} 
                        value={form.phone} 
                        onChange={handleChange} 
                        aria-invalid={!!errors.phone} 
                      />
                      {errors.phone && <div className="text-destructive text-sm mt-1">{errors.phone}</div>}
                    </div>

                    <div>
                      <Input 
                        name="email" 
                        placeholder={t('contact.email', 'Email') as string} 
                        value={form.email} 
                        onChange={handleChange} 
                        aria-invalid={!!errors.email} 
                      />
                      {errors.email && <div className="text-destructive text-sm mt-1">{errors.email}</div>}
                    </div>

                    <div>
                      <Textarea 
                        name="note" 
                        placeholder={t('contact.note', 'Message') as string} 
                        value={form.note} 
                        onChange={handleChange} 
                        rows={4}
                      />
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center gap-3">
                        <Button type="button" variant="ghost" onClick={() => navigate(-1)} disabled={submitting}>
                          {t('contact.back', 'Back')}
                        </Button>
                        <Button type="submit" className="flex-1" disabled={submitting}>
                          {submitting ? t('contact.sending', 'Sending...') : t('contact.submit', 'Send Message')}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t('contact.infoTitle', 'Contact Information')}</h2>
                <p className="text-muted-foreground mb-6">
                  نحن هنا لمساعدتك! تواصل معنا عبر أي من الوسائل التالية وسنكون سعداء لخدمتك.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/10">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">خدمة العملاء</h3>
                      <p className="text-muted-foreground">+966 11 234 5678</p>
                      <p className="text-sm text-primary">متاح 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/10">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">info@wavio.sa</p>
                      <p className="text-sm text-primary">نرد خلال ساعة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/10">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">العنوان</h3>
                      <p className="text-muted-foreground">شارع التحلية، الرياض 13249</p>
                      <p className="text-sm text-primary">المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src={deliveryServiceImg} 
                  alt="Professional water delivery service contact" 
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact


