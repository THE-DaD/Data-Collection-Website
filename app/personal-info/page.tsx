'use client'
import FirebaseApi from '../../firebase/firebaseAPI.js'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'

export default function PersonalInfoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    FirebaseApi.setDocument("PersonalInfo", formData.phone, formData.name, formData.email, formData.phone, formData.background)
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
      
      <div className="relative">
        <header className="border-b border-red-800 backdrop-blur-xl bg-black/50">
          <div className="container py-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              חזרה לדף הבית
              <ArrowRight className="w-4 h-4 mr-2" />
            </Link>
          </div>
        </header>

        <main className="container py-12 md:py-16 lg:py-20">
          <div className="max-w-md mx-auto">
            <div className="mb-8 md:mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent">
                מידע אישי
              </h1>
              <p className="text-gray-400">
                ספר לנו על עצמך ועל הרקע הרפואי שלך
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-gray-300">שם מלא</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="הכנס את שמך המלא"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-300">כתובת אימייל</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm text-gray-300">מספר טלפון</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="050-1234567"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="background" className="text-sm text-gray-300">רקע רפואי</Label>
                <Textarea
                  id="background"
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  className="min-h-[120px] bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="ספר לנו על הניסיון והכישורים הרפואיים שלך..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-red-600 hover:bg-red-500 text-white font-medium transition-colors"
              >
                שלח בקשה
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

