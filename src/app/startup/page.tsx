'use client'


import ContentGrid from '@/components/startup/ContentGrid'
import Hero from '@/components/startup/Hero'
import React from 'react'

const page = () => {
  return (
    <div
    style={{
        backgroundImage: "url('/startup/Noise & Texture.png')",
        backgroundPosition: " center",
        width: '100%',
      }}
    >
        <Hero/>
    <ContentGrid/>
    </div>
  )
}

export default page