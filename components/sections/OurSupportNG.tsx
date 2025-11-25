'use client'
import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Trade from '@/images/trade.png'
import Market from '@/images/market.png'
import Gov from '@/images/Gov.png'
import local from '@/images/local.png'

import Image from 'next/image'
import SupportCard from '../ui/SupportCard'

gsap.registerPlugin(ScrollTrigger)

export default function OurSupportEU() {

  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current].filter(Boolean)

      // Ensure the heading ref is also available before proceeding
      if (!headingRef.current || cards.length === 0) {
        console.error('Elements not found! Heading or Cards are missing.')
        return
      }

      // Set initial state
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 50
      })

      gsap.set(cards, {
        opacity: 0,
        y: 80
      })

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment this to see the trigger points during development
        }
      })

      // Animate heading first
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: "power3.out",
      })
        // Then animate cards one by one
        .to(cards, {
          opacity: 1,
          y: 0,
          duration: .5,
          ease: "power3.out",
          stagger: 0.15,
        }, "-=0.2")

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full flex items-center justify-center flex-col gap-6 mt-16' ref={containerRef}>
      {/* 🛑 FIX: Assign headingRef to the <h1> element */}
      <h1 ref={headingRef} className='MyH5'>Our Support for Nigerian Exporters</h1> 
      

      <div className="grid lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 gap-6" >
        <div ref={card1Ref} className=''>
          <SupportCard name='EU Standards Compliance' description='Guidance and facilitation for traceability
systems, phytosanitary certificates, organic certifications, and other
regulatory requirements.' Img={local} />
        </div>

        <div ref={card2Ref} className=''>
          <SupportCard name='Packaging, Logistics & Documentation' description='– Ensuring your products meet EU
presentation standards and documentation requirements for smooth customs
clearance.' Img={Market} />
        </div>

        <div ref={card3Ref} className=''>
          <SupportCard name='Market Matchmaking' description='Introducing you to reputable buyers, processors, and wholesalers across Europe.' Img={Trade} />
        </div>

      
      </div>
    </div>
  )
}