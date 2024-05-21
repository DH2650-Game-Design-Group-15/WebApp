import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='container'>
        <div className={props.reverse ? 'card-reverse' : 'card'}>
            <div className='card-img'>
                <img src={props.img} alt='MissingImage'/>
            </div>
            <div className='card-text-container'>
                <p className='card-text-info'>
                    {props.text}
                </p>
            </div>
        </div>
    </div>
    
  );
};

export default Card
