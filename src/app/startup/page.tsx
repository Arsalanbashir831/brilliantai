<<<<<<< HEAD
import BuildWithConfidence from '@/components/startup/BuildWithConfidence'
import CommunicationAndPayment from '@/components/startup/CommunicationAndPayment'
import ComparisonCards from '@/components/startup/ComparisonCards'
import CTABuildReal from '@/components/startup/CTABuildReal'
import FAQ from '@/components/startup/FAQ'
import Hero from '@/components/startup/Hero'
import ServicesTabs from '@/components/startup/ServicesTabs'
import TurnVisionIntoProduct from '@/components/startup/TurnVisionIntoProduct'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <ServicesTabs/>
            <TurnVisionIntoProduct />
            <CommunicationAndPayment />
            <ComparisonCards />
            <BuildWithConfidence />
            <FAQ />
            <CTABuildReal />
            
        </div>
    )
=======
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
>>>>>>> b49828ae8b8d02a37b5afe11355d52b10f55217a
}

export default page