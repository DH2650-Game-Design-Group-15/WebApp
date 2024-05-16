import React from 'react'
import "../Home.css"
import Footer from '../Footer'

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
      <div className='info-container'>
        Info about the game
      </div>
      <Footer/>
    </>
    
  )
}

export default Home
