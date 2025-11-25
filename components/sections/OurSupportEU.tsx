'use client'
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import Trade from '@/images/trade.png'
import Market from '@/images/market.png'
import Gov from '@/images/Gov.png'
import local from '@/images/local.png'
import SupportCard from '../ui/SupportCard'

export default function OurSupportEU() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div className='w-full flex items-center justify-center flex-col gap-6 mt-16' ref={containerRef}>
      <h1 
        className={`MyH5 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        Our Support for EU Companies
      </h1> 
      
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <SupportCard 
            name='Local Partner Identification' 
            description='We source and vet trustworthy distributors, suppliers, and joint-venture partners aligned with your standards.' 
            Img={local} 
          />
        </div>

        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          <SupportCard 
            name='Government Liaison' 
            description='We facilitate engagement with regulatory agencies to ensure compliance and reduce bureaucratic delays.' 
            Img={Gov} 
          />
        </div>

        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <SupportCard 
            name='Market Intelligence' 
            description='Data-driven insights on consumer trends, competitor activities, and policy shifts for informed decisions.' 
            Img={Trade} 
          />
        </div>

        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          <SupportCard 
            name='Import/Export Facilitation' 
            description='From paperwork to port clearance, we ensure your products move efficiently and legally.' 
            Img={Market} 
          />
        </div>
      </div>
    </div>
  )
}