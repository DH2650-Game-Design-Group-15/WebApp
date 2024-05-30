import React from 'react'
import "../Home.css"
import Footer from '../Footer'
import Card from '../Card'
import Team from '../Team'
import GameInfo from '../GameInfo'

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
          text='A Adventure That Takes Place on Planet Earth'
        />
        <Card
          reverse={true} 
          img='/images/NightImage.webp' 
          text='Day and Night Cycle'
        />
        <Card
          reverse={false} 
          img='/images/MainCharacter.webp' 
          text='The Alien Main Character'
        />
        <Card
          reverse={true}
          img='/images/NPC.webp'
          text='A NPC and the Base Around Which It Patrols'
        />
      </div>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
