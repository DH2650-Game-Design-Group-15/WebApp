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
                src='/images/Linus.jpg'
                name='Linus'
                email='linuswallin@live.se'
                contributions='
                    Linus worked on creating the movement and combat of the AI, building the world, and creating the website for the demo.
                '
            />
            <Member
                src='/images/example.jpg'
                name='Example'
                email='example@email.com'
                contributions='
                    Work done on project.
                '
            />
        </div>
        <div className='team-members'>
            <Member
                src='/images/example.jpg'
                name='Example'
                email='example@email.com'
                contributions='
                    Work done on project.
                '
            />
            <Member
                src='/images/example.jpg'
                name='Example'
                email='example@email.com'
                contributions='
                    Work done on project.
                '
            />
        </div>
        <div className='team-members'>
            <Member
                src='/images/example.jpg'
                name='Example'
                email='example@email.com'
                contributions='
                    Work done on project.
                '
            />
        </div>
    </div>
  );
};

export default Team
