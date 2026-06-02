import React from 'react'

export default function LogoMark({ className = 'w-5 h-5', alt = 'Tragent logo', variant = 'navy' }) {
  const src = variant === 'white' ? '/tragent-logo-white.svg' : '/tragent-logo.svg'

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      draggable="false"
    />
  )
}
