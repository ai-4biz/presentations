import React, { useState } from 'react'

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const [imageError, setImageError] = useState(false)
  // מחפש את הלוגו שלך - קודם PNG, אחר כך JPG, אחר כך SVG
  const [imageSrc, setImageSrc] = useState('/images/logo.png')

  const handleImageError = () => {
    // Try different formats - מחפש את הלוגו שלך
    if (imageSrc.endsWith('.png')) {
      setImageSrc('/images/logo.jpg')
    } else if (imageSrc.endsWith('.jpg')) {
      setImageSrc('/images/logo.jpeg')
    } else if (imageSrc.endsWith('.jpeg')) {
      setImageSrc('/images/logo.webp')
    } else {
      setImageError(true)
    }
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Logo Image */}
      <div className="flex items-center justify-center">
        {!imageError ? (
          <img 
            src={imageSrc} 
            alt="iHoogi Logo - ינשוף רובוט" 
            className="h-14 w-auto object-contain"
            onError={handleImageError}
          />
        ) : (
          // Fallback - simple placeholder
          <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-teal rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">iH</span>
          </div>
        )}
      </div>
      {/* Subtitle */}
      <p className="text-xs md:text-sm text-gray-600 font-medium text-center whitespace-nowrap">
        ihoogi — העוזר שמסנן פניות בשבילך
      </p>
    </div>
  )
}
