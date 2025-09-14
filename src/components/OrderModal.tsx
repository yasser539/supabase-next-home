import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Package, MapPin, Phone, User, Calendar } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useToast } from "@/hooks/use-toast"

interface OrderModalProps {
  children: React.ReactNode
  onOpen?: () => void
}

const OrderModal = ({ children, onOpen }: OrderModalProps) => {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    packageType: "",
    deliveryDate: "",
    deliveryFrequency: "",
    notes: ""
  })

  const packages = [
    { 
      id: "single", 
      name: "جالون واحد 5 لتر", 
      price: 15.99, 
      originalPrice: 19.99,
      description: "مثالي للعائلات الصغيرة", 
      features: ["مياه نقية 100%", "تسليم سريع", "ضمان الجودة"],
      emoji: "💧"
    },
    { 
      id: "triple", 
      name: "باقة 3 جالونات", 
      price: 42.99, 
      originalPrice: 59.99,
      description: "الخيار الأكثر شيوعاً", 
      discount: "وفر 17 ريال", 
      features: ["توفير مميز", "خدمة أسبوعية", "مياه معدنية"],
      emoji: "🥤",
      popular: true
    },
    { 
      id: "family", 
      name: "باقة العائلة 5 جالونات", 
      price: 65.99, 
      originalPrice: 89.99,
      description: "أفضل قيمة للعائلات الكبيرة", 
      discount: "وفر 24 ريال", 
      features: ["أفضل قيمة", "خدمة شهرية", "خصم إضافي"],
      emoji: "🏠",
      popular: false
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.address || !formData.packageType) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      })
      return
    }

    // Simulate order submission
    toast({
      title: "تم إرسال الطلب بنجاح!",
      description: "سنتواصل معك خلال 24 ساعة لتأكيد الطلب",
    })

    // Reset form and close modal
    setFormData({
      name: "",
      phone: "",
      address: "",
      packageType: "",
      deliveryDate: "",
      deliveryFrequency: "",
      notes: ""
    })
    setIsOpen(false)
  }

  const selectedPackage = packages.find(pkg => pkg.id === formData.packageType)

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open)
      if (open && onOpen) {
        onOpen()
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            اطلب الآن - طلب توصيل المياه
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            املأ النموذج أدناه لطلب خدمة توصيل المياه إلى منزلك أو مكتبك
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Order Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">معلومات التوصيل</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    الاسم الكامل *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    رقم الهاتف *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="أدخل رقم هاتفك"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    عنوان التوصيل *
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="أدخل العنوان الكامل للتوصيل"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryDate" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      تاريخ التوصيل المفضل
                    </Label>
                    <Input
                      id="deliveryDate"
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="frequency">تكرار التوصيل</Label>
                    <Select value={formData.deliveryFrequency} onValueChange={(value) => handleInputChange("deliveryFrequency", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر التكرار" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">طلب واحد</SelectItem>
                        <SelectItem value="weekly">أسبوعياً</SelectItem>
                        <SelectItem value="biweekly">كل أسبوعين</SelectItem>
                        <SelectItem value="monthly">شهرياً</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">ملاحظات إضافية</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="أي ملاحظات أو طلبات خاصة"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                تأكيد الطلب
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OrderModal