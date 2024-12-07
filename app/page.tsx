'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import firebaseapi from '../firebase/firebaseapi';
import { useCallback, useEffect, useState } from "react";



export default function HomePage() {

  return (
    <div className="flex flex-col min-h-screen bg-black text-white" dir="rtl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
      
      <div className="relative">
        {/* Navigation */}
        <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-red-800">
          <div className="container flex h-12 items-center justify-between px-4">
            <div className="flex items-left space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-red-500">
              <Link href="/sign-up">הרשמה </Link>  
             </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 to-black/90" />
            <div className="relative container px-4 md:px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent">
                עתיד ההכשרה
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                מצוינות בחינוך רפואי
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" style={{width: "25%" ,marginTop: "5%" ,marginLeft: "5%"}} className="rounded-full bg-red-600 hover:bg-red-500 text-white">
                  <Link href="/personal-info">מידע אישי</Link>
                </Button>
                <Button asChild variant="outline" size="lg" style={{width: "25%",marginTop: "5%", marginRight: "5%"}} className="rounded-full border-red-600 text-white hover:bg-red-600">
                  <Link href="/team-teaching">ניסיון בהוראת צוות</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent">
                למה לבחור בנו
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 border-red-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-red-500">חדשנות</h3>
                    <p className="text-gray-400">
                      חינוך רפואי מתקדם המשתמש בטכנולוגיה ומחקר עדכניים.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-red-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-red-500">מצוינות</h3>
                    <p className="text-gray-400">
                      סגל עולמי המחויב לעיצוב עתיד הבריאות.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-red-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-red-500">השפעה</h3>
                    <p className="text-gray-400">
                      יצירת שינוי בבריאות באמצעות מחקר וטיפול בחולים.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black" />
            <div className="relative container px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent">
                סיפורי סטודנטים
              </h2>
              <div className="max-w-3xl mx-auto">
                <blockquote className="text-xl md:text-2xl text-gray-300 italic">
                  &ldquo;הגישה החדשנית לחינוך רפואי כאן שינתה את הבנתי לגבי בריאות והכינה אותי לעתיד הרפואה.&rdquo;
                </blockquote>
                <p className="mt-6 text-red-500">מחזור 2024</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-red-800">
          <div className="container px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 בית הספר לרפואה. כל הזכויות שמורות.</p>

          </div>
        </footer>
      </div>
    </div>
  )
}

function MedicalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
      <path d="M8 19a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8Z" />
      <path d="M9.5 11h.01" />
      <path d="M14.5 11h.01" />
      <path d="M12 15h.01" />
      <path d="M12 8v1" />
    </svg>
  )
}

