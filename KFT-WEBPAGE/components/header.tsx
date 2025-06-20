"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Sun } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12">
              <img src="/kft-logo-official.png" alt="KFT Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-green-600">K.F.T</div>
              <div className="text-xs text-gray-500 leading-none">Khegarha Falahi Tanzeem</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/apply-aid" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Apply for Aid
            </Link>
            <Link href="/volunteer" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Volunteer
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme toggle */}
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
              <Sun className="h-5 w-5" />
            </Button>

            {/* Donate Button */}
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
              >
                Services
              </Link>
              <Link
                href="/apply-aid"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
              >
                Apply for Aid
              </Link>
              <Link
                href="/volunteer"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
              >
                Volunteer
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full">
                  <Link href="/donate">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
