import { Button } from "@/components/ui/button"
import { Heart, Users, HandHeart, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left circle */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-teal-200/30 to-green-200/30 rounded-full blur-xl"></div>

        {/* Top right square */}
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-2xl rotate-12 blur-sm"></div>

        {/* Middle left circle */}
        <div className="absolute top-1/2 -left-16 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-lg"></div>

        {/* Bottom right elements */}
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-md"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-lg rotate-45 blur-sm"></div>

        {/* Bottom left */}
        <div className="absolute bottom-10 left-20 w-28 h-28 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-lg"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-green-200/40 to-teal-200/40 rounded-full blur-md"></div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-lg rotate-12 blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            {/* Logo */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img
                  src="/kft-logo-official.png"
                  alt="KFT Official Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-green-500 to-blue-600 bg-clip-text text-transparent leading-tight">
              KHEGARHA FALAHI TANZEEM
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-700 mb-2">KARIMABAD</h2>
            <p className="text-lg text-gray-600 mb-4">Established: 20 August 2017</p>

            {/* Urdu Text */}
            <p className="text-xl text-gray-600 mb-8 font-medium" dir="rtl">
              خیگره فلاحی تنظیم کریم آباد
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Serving humanity with compassion and dedication for over 8+ years. We provide essential services including
              food assistance, healthcare support, education programs, and emergency relief to those in need.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/apply-aid">
                  <HandHeart className="mr-2 h-5 w-5" />
                  Apply for Aid
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-teal-700 mb-4">Our Impact</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Together, we have made a significant difference in our community over 8+ years of dedicated service.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">2,000+</h3>
                <p className="text-gray-600 font-medium">Families Helped</p>
              </div>

              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">2,500+</h3>
                <p className="text-gray-600 font-medium">Patients Treated</p>
              </div>

              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">8+</h3>
                <p className="text-gray-600 font-medium">Years of Service</p>
              </div>

              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-orange-600 mb-2">15+</h3>
                <p className="text-gray-600 font-medium">Active Programs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
