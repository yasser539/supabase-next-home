import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

const Careers = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', specialty: '', nationality: '' })
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0]
    if (f) setFile(f)
  }

  const validate = () => {
    const next: { [k: string]: string } = {}
    if (!form.firstName.trim()) next.firstName = t('validation.required', 'Required')
    if (!form.lastName.trim()) next.lastName = t('validation.required', 'Required')
    if (!form.email.trim()) next.email = t('validation.required', 'Required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('validation.email', 'Invalid email')
    if (!form.phone.trim()) next.phone = t('validation.required', 'Required')
    if (!file) next.file = t('validation.required', 'Required')
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      toast({ title: t('careers.formErrorTitle', 'Please fix the errors'), description: t('careers.formErrorDesc', 'Some fields are invalid') })
      return
    }

    setSubmitting(true)
    try {
      // TODO: upload file to storage (Supabase) and save record
      await new Promise((r) => setTimeout(r, 700))
      toast({ title: t('careers.successTitle', 'Application sent'), description: t('careers.submitted') })
      setForm({ firstName: '', lastName: '', phone: '', email: '', specialty: '', nationality: '' })
      setFile(null)
    } catch (err) {
      toast({ title: t('careers.errorTitle', 'Submission failed'), description: String(err) })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('careers.title')}</h1>
      <p className="text-muted-foreground mb-6">{t('careers.description')}</p>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Input name="firstName" placeholder={t('careers.firstName') as string} value={form.firstName} onChange={handleChange} />
              <Input name="lastName" placeholder={t('careers.lastName') as string} value={form.lastName} onChange={handleChange} />
            </div>

            <Input name="phone" placeholder={t('careers.phone') as string} value={form.phone} onChange={handleChange} />
            <Input name="email" placeholder={t('careers.email') as string} value={form.email} onChange={handleChange} />

            <div className="flex flex-col md:flex-row md:space-x-4">
              <Input name="specialty" placeholder={t('careers.specialty') as string} value={form.specialty} onChange={handleChange} />
              <Input name="nationality" placeholder={t('careers.nationality') as string} value={form.nationality} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('careers.uploadLabel')}</label>
              <input type="file" accept=".pdf,image/*" onChange={handleFile} />
              {errors.file && <div className="text-destructive text-sm mt-1">{errors.file}</div>}
              {file && <div className="text-sm text-muted-foreground mt-2">{file.name}</div>}
            </div>

            <div>
              <Button type="submit" variant="water">{t('careers.submit')}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default Careers


