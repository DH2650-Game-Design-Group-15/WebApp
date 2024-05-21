import React from 'react'
import "../Home.css"
import Footer from '../Footer'
import Card from '../Card'

function Home() {
  return (
    <>
      <div className='video-container'>
        <video src='/videos/environmentvideo.webm' autoPlay muted loop/>
        <div className='video-text-container'>
          <p className='video-title'>
            ALIEN ODYSSEY
          </p>
          <p className='video-sub-title'>
            EXPLORE, CRAFT, SURVIVE
          </p>
          <p className='video-sub-title'>
            BUT MOST IMPORTANTLY: MAKE IT BACK TO YOUR PLANET
          </p>
        </div>  
      </div>
      <div className='card-container'>
        <Card 
          reverse={false} 
          img='/images/EnvironmentImage.jpg' 
          text='A showcase of the environment in the game'
        />
        <Card
          reverse={true} 
          img='/images/EnvironmentImage.jpg' 
          text='Showcase of reverse card'
        />
        <Card
          reverse={false} 
          img='/images/EnvironmentImage.jpg' 
          text='Another example card'
        />
      </div>
      <Footer/>
    </>
    
  )
}

export default Home
