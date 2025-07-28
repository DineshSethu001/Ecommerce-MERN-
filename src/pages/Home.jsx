  import React from 'react'
  import {Hero, LatestCollection,BestSeller, NewsLetterBox} from '../components'
import OurPolicy from '../components/OurPolicy'


  const Home = () => {
    return (
      <div>
      
      <Hero/>
      <LatestCollection/> 
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      </div>
    )
  }

  export default Home