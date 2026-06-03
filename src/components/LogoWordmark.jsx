import React from 'react'

export default function LogoWordmark({ className = 'h-5 w-auto', alt = 'Tragent', variant = 'navy' }) {
  const src = variant === 'white' ? '/tragent-wordmark-white.svg' : '/tragent-wordmark.svg'

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      draggable="false"
    />
  )
}
