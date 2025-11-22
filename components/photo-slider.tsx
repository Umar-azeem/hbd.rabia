"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    url: "/images/r3.jpeg",
    alt: "Rabia - Portrait 1",
  },
  {
    url: "/images/r2.jpeg",
    alt: "Rabia - Moments Collage",
  },
  {
    url: "/images/r1.jpeg",
    alt: "Rabia - Close up",
  },
]

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)

  useEffect(() => {
    if (!autoSlide) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [autoSlide])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
    setAutoSlide(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
    setAutoSlide(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-3 text-rose-700">Beautiful Moments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main slider */}
        <div className="relative group">
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={photos[currentIndex].url || "/placeholder.svg"}
              alt={photos[currentIndex].alt}
              fill
              className="object-cover animate-fade-in"
              priority
            />

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-rose-600 p-3 rounded-full transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-rose-600 p-3 rounded-full transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setAutoSlide(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white w-8" : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-rows-3 gap-4">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx)
                setAutoSlide(false)
              }}
              className={`relative h-full rounded-xl overflow-hidden transition-all hover:scale-105 cursor-pointer ${
                idx === currentIndex ? "ring-4 ring-rose-500 scale-105" : ""
              }`}
            >
              <Image src={photo.url || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
