import React from 'react'
import "../Home.css"
import Footer from '../Footer'
import Card from '../Card'
import Team from '../Team'
import GameInfo from '../GameInfo'
import Gameplay from '../Gameplay'

function Home() {
  return (
    <div className='home'>
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
      <GameInfo/>
      <div className='card-container'>
        <Card 
          reverse={false} 
          img='/images/EnvironmentImage.webp' 
          text='Explore Planet Earth as a Stranded Alien'
        />
        <Card
          reverse={true} 
          img='/images/MainCharacter.webp' 
          text='Collect Resources and Rebuild Your Ship to Make it Back to Your Home Planet'
        />
        <Card
          reverse={false}
          img='/images/NPC.webp'
          text='Choose How You Want to be Perceived by the Humans'
        />
      </div>
      <Gameplay/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
