import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
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
    { id: "single", name: "5-Gallon Jug", price: 12.99, description: "Perfect for small families" },
    { id: "triple", name: "3-Bottle Package", price: 33.99, description: "Most popular choice", discount: "Save $5.98" },
    { id: "family", name: "5-Bottle Package", price: 52.99, description: "Best value for large families", discount: "Save $12.96" }
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
          <DialogTitle className="text-2xl font-bold text-center">
            <ShoppingCart className="h-6 w-6 inline-block mr-2" />
            اطلب الآن - طلب توصيل المياه
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Order Form */}
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

              <div>
                <Label htmlFor="package" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  نوع الباقة *
                </Label>
                <Select value={formData.packageType} onValueChange={(value) => handleInputChange("packageType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الباقة" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name} - ${pkg.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

            <Button type="submit" variant="water" size="lg" className="w-full">
              تأكيد الطلب
            </Button>
          </form>

          {/* Order Summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">ملخص الطلب</h3>
            
            {selectedPackage && (
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{selectedPackage.name}</h4>
                        <p className="text-sm text-muted-foreground">{selectedPackage.description}</p>
                        {selectedPackage.discount && (
                          <p className="text-sm text-green-600 font-medium">{selectedPackage.discount}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">${selectedPackage.price}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-accent/50">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3">مميزات خدمتنا:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    توصيل مجاني في معظم المناطق
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    مياه نقية 100% مفلترة
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    خدمة على مدار 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    مواعيد مرنة للتوصيل
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-xs text-muted-foreground">
              * سيتم التواصل معك خلال 24 ساعة لتأكيد الطلب وتحديد موعد التوصيل
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OrderModal