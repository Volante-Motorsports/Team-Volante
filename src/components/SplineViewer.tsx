'use client'

import { useEffect, useRef } from 'react'

interface SplineViewerProps {
  url: string
  className?: string
}

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content first
      containerRef.current.innerHTML = ''

      // Create the spline-viewer element dynamically
      const splineViewer = document.createElement('spline-viewer') as any
      splineViewer.setAttribute('url', url)

      // Add error handling
      splineViewer.addEventListener('error', (e: Event) => {
        console.warn('Spline viewer error:', e)
      })

      containerRef.current.appendChild(splineViewer)

      // Function to hide the Spline watermark
      const hideWatermark = () => {
        try {
          const shadowRoot = splineViewer.shadowRoot
          if (shadowRoot) {
            // Find and hide the logo
            const logo = shadowRoot.querySelector('#logo')
            if (logo) {
              (logo as HTMLElement).style.display = 'none'
              return true // Found and hidden
            }
          }
          return false
        } catch (e) {
          return false
        }
      }

      // Try to hide watermark after delays
      const timers = [
        setTimeout(hideWatermark, 1000),
        setTimeout(hideWatermark, 2000),
        setTimeout(hideWatermark, 3000),
        setTimeout(hideWatermark, 5000),
      ]

      return () => {
        timers.forEach(t => clearTimeout(t))
        if (containerRef.current) {
          containerRef.current.innerHTML = ''
        }
      }
    }
  }, [url])

  return <div ref={containerRef} className={className}></div>
}