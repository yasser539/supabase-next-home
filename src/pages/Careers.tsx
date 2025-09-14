import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { 
  Users, 
  Heart, 
  Trophy, 
  GraduationCap, 
  Clock, 
  DollarSign,
  Briefcase,
  Mail,
  Phone,
  User,
  Upload,
  Star,
  Award,
  Coffee,
  Car
} from "lucide-react"

const Careers = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    specialty: '', 
    nationality: '',
    experience: '',
    position: '',
    coverLetter: ''
  })
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [submitting, setSubmitting] = useState(false)

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "راتب تنافسي",
      description: "رواتب تتماشى مع السوق مع علاوات سنوية وحوافز أداء"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "تأمين صحي شامل", 
      description: "تأمين طبي شامل للموظف والعائلة مع أفضل المستشفيات"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "مرونة في العمل",
      description: "ساعات عمل مرنة وإمكانية العمل عن بُعد حسب طبيعة الوظيفة"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "التطوير المهني",
      description: "برامج تدريب مستمرة ودعم للحصول على الشهادات المهنية"
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: "بيئة عمل محفزة",
      description: "مكاتب عصرية مع مساحات استراحة ووجبات مجانية"
    },
    {
      icon: <Car className="h-6 w-6 text-primary" />,
      title: "بدل مواصلات",
      description: "بدل مواصلات شهري أو توفير سيارة شركة حسب الوظيفة"
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const handleSelectChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: '' })
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0]
    if (f) {
      setFile(f)
      if (errors.file) setErrors({ ...errors, file: '' })
    }
  }

  const validate = () => {
    const next: { [k: string]: string } = {}
    if (!form.firstName.trim()) next.firstName = t('validation.required', 'مطلوب')
    if (!form.lastName.trim()) next.lastName = t('validation.required', 'مطلوب')
    if (!form.email.trim()) next.email = t('validation.required', 'مطلوب')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('validation.email', 'بريد إلكتروني غير صالح')
    if (!form.phone.trim()) next.phone = t('validation.required', 'مطلوب')
    if (!form.position.trim()) next.position = 'يرجى اختيار الوظيفة'
    if (!file) next.file = 'يرجى رفع السيرة الذاتية'
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      toast({ 
        title: "خطأ في النموذج", 
        description: "يرجى تصحيح الأخطاء المذكورة", 
        variant: "destructive" 
      })
      return
    }

    setSubmitting(true)
    try {
      // TODO: upload file to storage (Supabase) and save record
      await new Promise((r) => setTimeout(r, 1000))
      toast({ 
        title: "تم إرسال طلبك بنجاح!", 
        description: "سنتواصل معك خلال 3 أيام عمل لمراجعة طلبك" 
      })
      setForm({ 
        firstName: '', 
        lastName: '', 
        phone: '', 
        email: '', 
        specialty: '', 
        nationality: '',
        experience: '',
        position: '',
        coverLetter: ''
      })
      setFile(null)
    } catch (err) {
      toast({ 
        title: "فشل في الإرسال", 
        description: "يرجى المحاولة مرة أخرى", 
        variant: "destructive" 
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            {t('careers.title', 'انضم لفريقنا')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('careers.description', 'كن جزءاً من فريق رائد في مجال توصيل المياه وساهم في بناء مستقبل أفضل للجميع')}
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>فريق متنوع ومحترف</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span>بيئة عمل محفزة</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>مميزات استثنائية</span>
            </div>
          </div>
        </div>
      </section>


      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">تقدم بطلبك الآن</h2>
              <p className="text-muted-foreground">
                املأ النموذج أدناه وارفع سيرتك الذاتية للتقدم لأي من الوظائف المتاحة
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <User className="h-4 w-4" />
                        الاسم الأول *
                      </label>
                      <Input
                        name="firstName"
                        placeholder="أدخل اسمك الأول"
                        value={form.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <User className="h-4 w-4" />
                        اسم العائلة *
                      </label>
                      <Input
                        name="lastName"
                        placeholder="أدخل اسم العائلة"
                        value={form.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Phone className="h-4 w-4" />
                        رقم الهاتف *
                      </label>
                      <Input
                        name="phone"
                        placeholder="مثال: +966501234567"
                        value={form.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Mail className="h-4 w-4" />
                        البريد الإلكتروني *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                    </div>
                  </div>


                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">التخصص</label>
                      <Input
                        name="specialty"
                        placeholder="مثال: هندسة، إدارة أعمال، كيمياء"
                        value={form.specialty}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">الجنسية</label>
                      <Input
                        name="nationality"
                        placeholder="مثال: سعودي، مصري، أردني"
                        value={form.nationality}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">رسالة تعريفية</label>
                    <Textarea
                      name="coverLetter"
                      placeholder="اكتب رسالة قصيرة عن نفسك ولماذا تريد العمل معنا (اختياري)"
                      value={form.coverLetter}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Upload className="h-4 w-4" />
                      السيرة الذاتية *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,image/*"
                        onChange={handleFile}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          اسحب السيرة الذاتية هنا أو اضغط للاختيار
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF, DOC, DOCX أو صورة (أقصى حجم 10MB)
                        </p>
                      </label>
                    </div>
                    {errors.file && <div className="text-red-500 text-sm mt-1">{errors.file}</div>}
                    {file && (
                      <div className="mt-2 p-3 bg-green-50 rounded-lg flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-700">{file.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? "جاري الإرسال..." : "إرسال الطلب"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Careers


