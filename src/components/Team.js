import React from 'react';
import './Team.css';
import Member from './Member';

function Team() {
  return (
    <div className='team'>
        <p className='team-header'>
            TEAM
        </p>
        <div className='team-members'>
            <Member
                src='/images/Linus.webp'
                name='Linus Wallin'
                email='linuswallin@live.se'
                contributions='
                    Linus worked on creating the movement, behavior and combat of the AI, world design, the questing system and creating the website for the demo.
                '
            />
            <Member
                src='/images/example.jpg'
                name='Jürgen Wetzel'
                email='example@email.com'
                contributions='
                    Jürgen worked on creating the inventory and the reputation system, adding the animation to the player and rewriting the movement.
                '
            />
        </div>
        <div className='team-members'>
            <Member
                src='/images/example.jpg'
                name='Ilse Westra'
                email='example@email.com'
                contributions='
                    Ilse worked on 3D modeling, main Character design and animation, and sound design.
                '
            />
            <Member
                src='/images/example.jpg'
                name='Laicaiwei Wang'
                email='example@email.com'
                contributions='
                    Laicaiwei worked on functional integration, designing and implementing UI, implementing shooting function and dialogue system.
                '
            />
        </div>
        <div className='team-members'>
            <Member
                src='/images/example.jpg'
                name='Benhou Li'
                email='example@email.com'
                contributions='
                    
                '
            />
        </div>
    </div>
  );
};

export default Team
