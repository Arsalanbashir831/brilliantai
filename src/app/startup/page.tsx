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
}

export default page