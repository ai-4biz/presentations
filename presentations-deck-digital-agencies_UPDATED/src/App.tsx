import React, { useState, useEffect } from 'react'
import { Logo } from './components/Logo'

const SLIDES = [
  {
    id: 1,
    headline: 'הרבה לידים —\nואין שליטה אמיתית',
    subline: 'לא יודעים מי רציני,\nומי סתם השאיר פרטים.',
    gradient: 'linear-gradient(135deg, #EEF1FA, #E8F7F5)',
    hasImage: false,
  },
  {
    id: 2,
    headline: 'כל ליד חכם —\nמרגע שהוא נכנס',
    subline: 'iHoogi מנתחת תשובות\nולכל ליד נותנת ציון.\n\n🔥 חם · 🌡️ פושר · ❄️ קר',
    highlight: 'ציון',
    gradient: 'linear-gradient(135deg, #F3EFFF, #EEF1FA)',
    hasImage: true,
    imagePlaceholder: 'טבלת לידים עם דירוג',
  },
  {
    id: 3,
    headline: 'לידים חמים מגיעים\nישירות לנייד',
    subline: 'עם תשובות הלקוח,\nכדי לחזור מייד — מוכנים.\n\nלא להחציף מכירה.\nכן להעלות סיכוי לסגירה.',
    highlight: 'תשובות הלקוח',
    gradient: 'linear-gradient(135deg, #E8F0F5, #E0E8F0)',
    hasImage: true,
    imagePlaceholder: 'הודעה שמתקבלת בנייד',
  },
  {
    id: 4,
    headline: 'יודעים מה הלקוח רוצה\nעוד לפני השיחה',
    subline: 'השיחה לא מתחילה מ-0 —\nהיא מתחילה חכמה.\n\nיותר דיוק.\nפחות בזבוז זמן.',
    highlight: 'עוד לפני השיחה',
    gradient: 'linear-gradient(135deg, #FFF5E8, #FFE8D6)',
    hasImage: true,
    imagePlaceholder: 'דוגמה לתשובת לקוח פתוחה',
  },
  {
    id: 5,
    headline: 'שאלון חכם\nשנבנה ע״י המערכת',
    subline: 'בהתאם לתחום, מטרה וקהל.\nלא טופס גנרי.\n\nאפשר:\n🔁 כמה שאלונים\n🎯 לכל מטרה אחרת',
    highlight: 'שנבנה ע״י המערכת',
    gradient: 'linear-gradient(135deg, #F0F9FF, #E0F2FE)',
    hasImage: true,
    imagePlaceholder: 'מסך בניית שאלון',
  },
  {
    id: 6,
    headline: 'תגובה חכמה ללקוח\nכבר בשלב הראשון',
    subline: 'המענה מותאם\nלתשובות ולרמת העניין.\n\n✔️ חוויה טובה ללקוח\n✔️ בלי הבטחות מיותרות',
    highlight: 'תגובה חכמה',
    gradient: 'linear-gradient(135deg, #F3EFFF, #E8F0F5)',
    hasImage: true,
    imagePlaceholder: 'דוגמה למענה אוטומטי',
  },
  {
    id: 7,
    headline: 'יודעים איזה קמפיין\nמביא לקוחות — לא רק לידים',
    subline: 'ניתוח תשובות לפי:\nקמפיין · מסר · קהל.\n\nדאטה שמחזיק מול הלקוח.',
    highlight: 'מביא לקוחות',
    gradient: 'linear-gradient(135deg, #E8F7F5, #D4F1ED)',
    hasImage: true,
    imagePlaceholder: 'טבלת לידים מסוננת לפי קמפיין',
  },
  {
    id: 8,
    headline: 'יותר סדר.\nיותר שליטה.\nהרבה פחות רעש.',
    subline: 'פחות שיחות מיותרות.\nיותר פוקוס על מה ששווה כסף.',
    gradient: 'linear-gradient(135deg, #EEF1FA, #E0E8F0)',
    hasImage: true,
    imagePlaceholder: 'דשבורד / רשימת לידים מסודרת',
  },
  {
    id: 9,
    headline: 'זה הרבה יותר\nמכלי לידים',
    subline: 'זו שליטה חכמה במכירה.',
    cta: 'התנסות חינמית לזמן מוגבל',
    ctaSubline: 'בלי כרטיס אשראי · התחלה מיידית',
    gradient: 'linear-gradient(135deg, #EEF1FA, #E8F7F5)',
    hasImage: true,
    imagePlaceholder: 'לוגו / ויז\'ואל מותג',
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const slide = SLIDES[currentSlide]

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Logo - fixed position */}
      <div className="absolute top-4 right-4 z-50">
        <Logo />
      </div>

      {/* Slide Container */}
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center p-6 transition-all duration-500"
        style={{ background: slide.gradient }}
      >
        <div className="max-w-2xl w-full text-center space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-pre-line">
            {slide.highlight
              ? slide.headline.split(slide.highlight).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-teal">{slide.highlight}</span>
                    )}
                  </React.Fragment>
                ))
              : slide.headline}
          </h1>

          {/* Subline */}
          {slide.subline && !slide.cta && (
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed whitespace-pre-line">
              {slide.subline}
            </p>
          )}

          {/* Image Placeholder */}
          {slide.hasImage && (
            <div className="mt-8 rounded-2xl bg-white/60 backdrop-blur-sm p-8 shadow-lg border border-white/80">
              <div className="aspect-video bg-gradient-to-br from-deep-blue/10 to-teal/10 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">⬜</div>
                  <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                  <p className="text-xs text-gray-400 mt-1">INSERT IMAGE HERE</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          {slide.cta && (
            <div className="mt-8 space-y-4">
              <button className="px-8 py-4 bg-gradient-to-r from-deep-blue to-teal text-white text-xl md:text-2xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                {slide.cta}
              </button>
              {slide.ctaSubline && (
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {slide.ctaSubline}
                </p>
              )}
              {slide.subline && (
                <p className="text-lg md:text-xl text-gray-700 font-medium mt-2">
                  {slide.subline}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-deep-blue w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="fixed top-4 left-4 z-50 text-sm text-gray-600 font-medium">
        {currentSlide + 1} / {SLIDES.length}
      </div>
    </div>
  )
}

export default App
