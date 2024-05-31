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
                <Button>
                    Download <i className='fa-solid fa-cloud-arrow-down'/>
                </Button>
            </div>
            
        </div>
    </>
  )
}

export default Footer
