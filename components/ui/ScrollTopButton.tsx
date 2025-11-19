"use client"
import React, { useEffect, useState } from 'react'

export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // entry.isIntersecting === true means hero is visible
          setShow(!entry.isIntersecting)
        })
      },
      { root: null, threshold: 0 }
    )

    obs.observe(hero)

    return () => obs.disconnect()
  }, [])

  const scrollTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollTop}
      className="fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full bg-[#6bd07a] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      ↑
    </button>
  )
}
