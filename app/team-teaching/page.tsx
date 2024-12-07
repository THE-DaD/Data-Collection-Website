'use client'
import firebaseapi from '../../firebase/firebaseapi';
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'

export default function TeamTeachingPage() {
  const [formData, setFormData] = useState({
    teamName: '',
    members: '',
    subject: '',
    experience: ''
  })
  const resetForm = () =>{
    setFormData({
      teamName: '',
      members: '',
      subject: '',
      experience: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    if(firebaseapi.isUserExist()){
      e.preventDefault()
      firebaseapi.addDocument("GroupInfo", formData.experience, formData.members, formData.subject, formData.teamName)
      console.log('Form submitted:', formData)
      }
    else{
      alert("User has not signed in");
    } 
    resetForm();
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
                ניסיון בהוראת צוות
              </h1>
              <p className="text-gray-400">
                שתף את הניסיון שלך בהוראה כחלק מצוות
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-sm text-gray-300">שם הצוות</Label>
                <Input
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="הכנס את שם הצוות"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="members" className="text-sm text-gray-300">חברי הצוות</Label>
                <Input
                  id="members"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  className="h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="רשום את שמות חברי הצוות"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm text-gray-300">נושא הלימוד</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="הכנס את הנושא שלימדתם"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-sm text-gray-300">ניסיון בהוראה</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="min-h-[120px] bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="תאר את ניסיון ההוראה בצוות והמתודולוגיה שלכם..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-red-600 hover:bg-red-500 text-white font-medium transition-colors"
              >
                שלח ניסיון
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

