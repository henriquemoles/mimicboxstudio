'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// Extende as props do img para aceitar fetchPriority (string) sem erro TS
interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  fetchPriority = 'auto',
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  // Resetar erro se src mudar
  useEffect(() => {
    setDidError(false)
  }, [src])

  // Preload da imagem no head para melhorar performance
  useEffect(() => {
    if (!src || typeof src !== 'string') return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    link.fetchPriority = fetchPriority

    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [src, fetchPriority])

  const handleError = () => setDidError(true)

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
        />
          
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      fetchPriority={fetchPriority}
      {...rest}
    />
  )
}
