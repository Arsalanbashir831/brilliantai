import CtaSection from '@/components/news/CtaSection'
import NewsArticle from '@/components/news/NewsArticle'
import NewsItem from '@/components/news/NewsItem'
import Newsletter from '@/components/news/Newsletter'
import React from 'react'

const page = () => {
    return (
        <div>
            <NewsArticle />
            <CtaSection />
            <NewsItem />
            <Newsletter />
        </div>
    )
}

export default page