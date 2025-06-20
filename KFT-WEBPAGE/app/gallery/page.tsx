"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Ramazan Package Distribution",
      description: "Distributing essential food packages during the holy month of Ramazan",
      link: "https://www.facebook.com/share/p/1F3hZTtFyZ/?mibextid=wwXIfr",
      image: "/ramazan-package-3.jpg",
    },
    {
      title: "Eid Package Distribution",
      description: "Special Eid packages for families in need",
      link: "https://www.facebook.com/share/p/16mjgiZnQA/?mibextid=wwXIfr",
      image: "/eid-distribution-2.jpg",
    },
    {
      title: "Wedding Assistance Program",
      description: "Supporting families with wedding expenses and arrangements",
      link: "https://www.facebook.com/share/p/16hrteBH8R/?mibextid=wwXIfr",
      image: "/wedding-assistance-1.jpg",
    },
    {
      title: "Mosque Renovation Project",
      description: "Community mosque renovation and improvement project",
      link: "https://web.facebook.com/KHEGARHAFALAHITANZEEM/photos",
      image: "/mosque-completed.jpg",
    },
  ]

  // All images for slideshow - Updated with new images
  const allImages = [
    // Mosque Renovation Images
    { src: "/mosque-completed.jpg", alt: "Mosque Renovation - Beautiful Completed Interior", category: "Mosque" },
    {
      src: "/mosque-construction-materials.jpg",
      alt: "Mosque Renovation - Construction Materials",
      category: "Mosque",
    },
    { src: "/mosque-flooring-work.jpg", alt: "Mosque Renovation - Flooring Work in Progress", category: "Mosque" },
    { src: "/mosque-tiles-materials.jpg", alt: "Mosque Renovation - Wall Tiles and Materials", category: "Mosque" },

    // Medical & Healthcare Images
    { src: "/medical-camp-banner.jpg", alt: "Free Medical Camp - Specialist Doctors Available", category: "Medical" },
    { src: "/wheelchair-support.jpg", alt: "Wheelchair Support - Making a Difference for PWDs", category: "Medical" },

    // Orphan & Education Images
    { src: "/orphan-program-visit.jpg", alt: "Orphan Program - Educational Support Visit", category: "Education" },

    // Ramazan Images
    { src: "/ramazan-package-1.jpg", alt: "Ramazan Food Packages - Essential Items", category: "Ramazan" },
    { src: "/ramazan-package-2.jpg", alt: "Organized Ramazan Packages - Flour and Sugar", category: "Ramazan" },
    { src: "/ramazan-package-3.jpg", alt: "Complete Ramazan Package - Flour, Sugar, Dates", category: "Ramazan" },

    // Eid Images
    { src: "/eid-distribution-1.jpg", alt: "Eid Distribution - Community Gathering", category: "Eid" },
    { src: "/eid-distribution-2.jpg", alt: "Eid Distribution - Family Support", category: "Eid" },
    { src: "/eid-distribution-3.jpg", alt: "Eid Distribution - Community Event", category: "Eid" },
    { src: "/eid-distribution-4.jpg", alt: "Eid Distribution - Team and Community", category: "Eid" },
    { src: "/eid-distribution-5.jpg", alt: "Eid Distribution - Children and Families", category: "Eid" },
    { src: "/eid-shoes-distribution.jpg", alt: "Eid Shoes Distribution - Gift Boxes", category: "Eid" },
    { src: "/eid-distribution-6.jpg", alt: "Eid Distribution - Community Support", category: "Eid" },

    // Wedding Assistance Images
    { src: "/wedding-assistance-1.jpg", alt: "Wedding Assistance - Kitchen Appliances", category: "Wedding" },
    { src: "/wedding-assistance-2.jpg", alt: "Wedding Assistance - Home Appliances", category: "Wedding" },
    { src: "/wedding-assistance-3.jpg", alt: "Wedding Assistance - Household Items", category: "Wedding" },
    { src: "/wedding-assistance-4.jpg", alt: "Wedding Assistance - Electronic Items", category: "Wedding" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [isPlaying, allImages.length])

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const ramazanImages = [
    { src: "/ramazan-package-1.jpg", alt: "Ramazan Food Packages - Essential Items" },
    { src: "/ramazan-package-2.jpg", alt: "Organized Ramazan Packages - Flour and Sugar" },
    { src: "/ramazan-package-3.jpg", alt: "Complete Ramazan Package - Flour, Sugar, Dates" },
  ]

  const eidImages = [
    { src: "/eid-distribution-1.jpg", alt: "Eid Distribution - Community Gathering" },
    { src: "/eid-distribution-2.jpg", alt: "Eid Distribution - Family Support" },
    { src: "/eid-distribution-3.jpg", alt: "Eid Distribution - Community Event" },
    { src: "/eid-distribution-4.jpg", alt: "Eid Distribution - Team and Community" },
    { src: "/eid-distribution-5.jpg", alt: "Eid Distribution - Children and Families" },
    { src: "/eid-shoes-distribution.jpg", alt: "Eid Shoes Distribution - Gift Boxes" },
    { src: "/eid-distribution-6.jpg", alt: "Eid Distribution - Community Support" },
  ]

  const weddingAssistanceImages = [
    { src: "/wedding-assistance-1.jpg", alt: "Wedding Assistance - Kitchen Appliances" },
    { src: "/wedding-assistance-2.jpg", alt: "Wedding Assistance - Home Appliances" },
    { src: "/wedding-assistance-3.jpg", alt: "Wedding Assistance - Household Items" },
    { src: "/wedding-assistance-4.jpg", alt: "Wedding Assistance - Electronic Items" },
  ]

  const mosqueImages = [
    { src: "/mosque-completed.jpg", alt: "Mosque Renovation - Beautiful Completed Interior" },
    { src: "/mosque-construction-materials.jpg", alt: "Mosque Renovation - Construction Materials" },
    { src: "/mosque-flooring-work.jpg", alt: "Mosque Renovation - Flooring Work in Progress" },
    { src: "/mosque-tiles-materials.jpg", alt: "Mosque Renovation - Wall Tiles and Materials" },
  ]

  const medicalImages = [
    { src: "/medical-camp-banner.jpg", alt: "Free Medical Camp - Specialist Doctors Available" },
    { src: "/wheelchair-support.jpg", alt: "Wheelchair Support - Making a Difference for PWDs" },
    { src: "/orphan-program-visit.jpg", alt: "Orphan Program - Educational Support Visit" },
  ]

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/kft-logo-official.png"
              alt="KFT Official Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of hope, compassion, and positive change in our community through our various programs and
            initiatives over 8+ years of service.
          </p>
        </div>

        {/* Live Slideshow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Live Slideshow - Our Programs in Action</h2>
          <Card className="max-w-4xl mx-auto overflow-hidden bg-white/60 backdrop-blur-sm">
            <CardContent className="p-0 relative">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={allImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={allImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Overlay with image info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white">
                    <span className="inline-block bg-green-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {allImages[currentImageIndex].category}
                    </span>
                    <h3 className="text-lg font-semibold">{allImages[currentImageIndex].alt}</h3>
                    <p className="text-sm opacity-90">
                      Image {currentImageIndex + 1} of {allImages.length}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <Button variant="outline" size="icon" onClick={goToPrevious} className="bg-white/80 hover:bg-white">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Button variant="outline" size="icon" onClick={goToNext} className="bg-white/80 hover:bg-white">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Play/Pause Control */}
                <div className="absolute top-4 right-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={togglePlayPause}
                    className="bg-white/80 hover:bg-white"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 p-4 bg-white/50">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View on Facebook
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mosque Renovation Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Mosque Renovation Project</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mosqueImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <p className="text-xs text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Medical & Healthcare Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Medical & Healthcare Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {medicalImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ramazan Package Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Ramazan Food Package Distribution</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ramazanImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eid Distribution Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Eid Gift Distribution Program</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {eidImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <p className="text-xs text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wedding Assistance Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Wedding Assistance Program</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingAssistanceImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6 text-teal-700">Follow Our Work</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/share/1FunNBzrsY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook Page
            </a>
            <a
              href="https://www.instagram.com/khegarha.falahi.tanzeem?igsh=MXZtZ3hscGlwMW93MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
