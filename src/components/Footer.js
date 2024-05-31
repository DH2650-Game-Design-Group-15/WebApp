import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <>
        <div className='footer-container'>
            <div className='footer-content'>
                <p className='footer-download-text'>
                    Press download below to try out the demo
                </p>
                <a
                    href='https://github.com/DH2650-Game-Design-Group-15/Project/releases'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button>
                        Download <i className='fa-solid fa-cloud-arrow-down'/>
                    </Button>
                </a>
                
            </div>
            
        </div>
    </>
  )
}

export default Footer
