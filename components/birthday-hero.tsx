"use client"

import { useEffect, useRef, useState } from "react"

export default function BirthdayHero() {
  const audioRef = useRef<HTMLAudioElement>(null)
  
  

  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden border-b-4 border-rose-300">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream%20and%20Gold%20Decorative%20Happy%20Birthday%20Video-QhrbldHLV3YB49eBQesm5ZoNc9jS86.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content overlay */}
      <div className="relative z-10 text-center space-y-2 px-4">
        <div className="space-y-1 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Happy Birthday Rabia!</h1>
          <p className="text-sm md:text-base text-white/90 drop-shadow-md font-semibold">From your bestie, Mano</p>
        </div>


      </div>

      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/httpswwwyoutubecomwatchvn0j6qib7ho-XyxcoZ8PGv9ZfnV0ObFnR4PPLAKSCx.mp3" loop />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
