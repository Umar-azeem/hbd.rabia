"use client"

const islamicWishes = [
  {
    title: "May Allah Bless You",
    prayer: "اللهم بارك لها في عمرها وصحتها",
    englishTranslation: "O Allah, grant her blessings in her life and health",
    icon: "✨",
  },
  {
    title: "Long Life & Happiness",
    prayer: "اللهم أعطها حياة طويلة وسعيدة",
    englishTranslation: "O Allah, grant her a long and happy life",
    icon: "🌟",
  },
  {
    title: "Success & Prosperity",
    prayer: "اللهم وفقها في جميع أعمالها وأمورها",
    englishTranslation: "O Allah, guide her to success in all her affairs",
    icon: "🎯",
  },
  {
    title: "Love & Wisdom",
    prayer: "اللهم ملء قلبها بالحكمة والحب والرحمة",
    englishTranslation: "O Allah, fill her heart with wisdom, love and mercy",
    icon: "💝",
  },
]

export default function IslamicWishes() {
  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-center text-rose-600 mb-3 text-lg">For your special day</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {islamicWishes.map((wish, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="text-5xl mb-2">{wish.icon}</div>

              <h3 className="text-2xl font-bold text-rose-700 mb-2">{wish.title}</h3>

              <div className="space-y-2 mb-2">
                <p className="text-xl text-rose-600 font-semibold text-right">{wish.prayer}</p>
                <p className="text-sm text-rose-600/70 italic">"{wish.englishTranslation}"</p>
              </div>

              <p className="text-sm text-rose-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                May Allah accept from us ❤️
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
