import BlogList from '@/components/news/BlogList'
// import FutureTechSection from '@/components/news/FutureTechSection'
import Hero from '@/components/news/hero'
import NewsItem from '@/components/news/NewsItem'
// import Newsletter from '@/components/news/Newsletter'
import { Welcome } from '@/components/news/welcome'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <NewsItem />
            <Welcome />
            <BlogList />
            {/* <FutureTechSection/>
            <Newsletter /> */}
        </div>
    )
}

export default page