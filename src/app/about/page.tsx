import AiFeaturesCarousel from '@/components/about-us/AiFeaturesCarousel'
import ApproachSection from '@/components/about-us/ApproachSection'
import ContactCta from '@/components/about-us/ContactCta'
import Hero from '@/components/about-us/Hero'
import MissionSection from '@/components/about-us/MissionSection'
import OurPeopleSection from '@/components/about-us/OurPeopleSection'
import StorySection from '@/components/about-us/StorySection'
import TrustedSection from '@/components/about-us/TrustedSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <AiFeaturesCarousel />
            <StorySection />
            <MissionSection />
            <TrustedSection />
            <ApproachSection />
            <OurPeopleSection />
            <ContactCta/>
        </div>
    )
}

export default page