import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <>
<div className="-mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]">
        <Hero />
      </div>
     
     <LatestCollection/>
     <BestSeller />
     <OurPolicy />
     <NewsletterBox />
    </>
  )
}

export default Home
