import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { toast } from "@/hooks/use-toast"

const Contact = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ firstName: '', lastName: '', address: '', phone: '', email: '', note: '' })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [submitting, setSubmitting] = useState(false)

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
    <main className="min-h-screen container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-muted-foreground mb-6">{t('contact.description', 'Fill the form and we will contact you soon.')}</p>

          <Card className="border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex-1">
                    <Input name="firstName" placeholder={t('contact.firstName') as string} value={form.firstName} onChange={handleChange} className="mb-2 md:mb-0" aria-invalid={!!errors.firstName} />
                    {errors.firstName && <div className="text-destructive text-sm mt-1">{errors.firstName}</div>}
                  </div>
                  <div className="flex-1">
                    <Input name="lastName" placeholder={t('contact.lastName') as string} value={form.lastName} onChange={handleChange} aria-invalid={!!errors.lastName} />
                    {errors.lastName && <div className="text-destructive text-sm mt-1">{errors.lastName}</div>}
                  </div>
                </div>

                <div>
                  <Input name="address" placeholder={t('contact.address') as string} value={form.address} onChange={handleChange} />
                </div>

                <div>
                  <Input name="phone" placeholder={t('contact.phone') as string} value={form.phone} onChange={handleChange} aria-invalid={!!errors.phone} />
                  {errors.phone && <div className="text-destructive text-sm mt-1">{errors.phone}</div>}
                </div>

                <div>
                  <Input name="email" placeholder={t('contact.email') as string} value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
                  {errors.email && <div className="text-destructive text-sm mt-1">{errors.email}</div>}
                </div>

                <div>
                  <Textarea name="note" placeholder={t('contact.note') as string} value={form.note} onChange={handleChange} />
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-3">
                    <Button type="button" variant="ghost" onClick={() => navigate(-1)} disabled={submitting}>{t('contact.back', 'Back')}</Button>
                    <Button type="submit" variant="water" disabled={submitting}>{submitting ? t('contact.sending', 'Sending...') : t('contact.submit')}</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          {/* Sidebar / contact info */}
          <h2 className="text-xl font-semibold mb-2">{t('contact.infoTitle', 'Contact Information')}</h2>
          <p className="text-muted-foreground">{t('support')}</p>
          <div className="mt-6">
            <img src="/src/assets/delivery-service.jpg" alt="contact" className="w-full rounded-lg shadow-sm" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact


