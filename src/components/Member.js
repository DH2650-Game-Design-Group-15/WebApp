import React from 'react'
import './Member.css'

function Member(props) {
  return (
    <div className='member'>
        <div className='member-detail'>
            <img className='member-img' src={props.src} alt={props.src}/>
            <p className='member-name'>{props.name}</p>
            <p className='member-email'>{props.email}</p>
        </div>
        <div className='contribution-container'>
            <p className='member-contribution'>{props.contributions}</p>
        </div>
    </div>
  )
}

export default Member
