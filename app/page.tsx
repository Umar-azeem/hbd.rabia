"use client"

import { useEffect, useRef, useState } from "react"
import BirthdayHero from "@/components/birthday-hero"
import PhotoSlider from "@/components/photo-slider"
import IslamicWishes from "@/components/islamic-wishes"
import Confetti from "@/components/confetti"
import { Sparkles, Volume2 } from "lucide-react"

export default function Page() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleConfettiClick = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }
   const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
        })
        setIsPlaying(true)
      }
    }, [])
  
    const toggleMusic = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {showConfetti && <Confetti />}

      <BirthdayHero  />
 <div className="flex flex-row sm:flex-row gap-3 justify-center pt-3">
          <div className="flex flex-col items-center">
                        <span className="text-xs text-yellow-300 font-bold mb-1 animate-pulse">👇 Click Me!</span>

            <button
              onClick={handleConfettiClick}
              className="px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              Confetti
            </button>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-yellow-300 font-bold mb-1 animate-pulse">👇 Click Me!</span>
            <button
              onClick={toggleMusic}
              className="px-4 py-2 bg-white/90 hover:bg-white text-rose-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Volume2 className="w-4 h-4" />
              {isPlaying ? "Music On" : "Music Off"}
            </button>
          </div>
                <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/httpswwwyoutubecomwatchvn0j6qib7ho-XyxcoZ8PGv9ZfnV0ObFnR4PPLAKSCx.mp3" loop />

        </div>
      <div className="py-4 px-4">
        <PhotoSlider />
      </div>

      <div className="py-16 px-4">
        <IslamicWishes />
      </div>

      <footer className="text-center py-8 text-rose-700/60 text-sm">
        <p>Happy Birthday Rabia 🎂 From your bestie, Mano</p>
      </footer>
    </div>
  )
}
