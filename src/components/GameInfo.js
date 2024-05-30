import React from 'react';
import './GameInfo.css';

function GameInfo() {
  return (
    <div className='game-info'>
        <div className='game-info-container'>
            <p className='game-info-header'>
                About the Game
            </p>
            <p className='game-info-text'>
                Alien Odyssey unfolds against the backdrop of a distant galaxy, where an intrepid alien 
                explorer finds themselves marooned on the enigmatic planet known to its inhabitants as Earth. 
                Stranded amidst the verdant expanse of a dense forest, the protagonist must navigate the 
                treacherous terrain and unforgiving elements in a bid to survive.
            </p>
            <p className='game-info-text'>
                As players embark on their journey, they uncover fragments of the protagonist's past, 
                piecing together the events that led to their ill-fated crash landing. From the wreckage of 
                their spaceship, players salvage crucial materials essential for repairing their vessel and 
                charting a course back to their home planet. However, their quest for salvation is fraught with 
                peril, as they must contend with not only the myriad dangers of the wilderness but also 
                the ever-present threat of discovery by the planet's dominant species: humanity.
            </p>
            <p className='game-info-text'>
                Guided by an insatiable curiosity and an indomitable will to survive, the protagonist delves 
                deeper into the heart of the forest, forging alliances with unlikely allies and confronting 
                adversaries in equal measure. Along the way, they uncover ancient mysteries and unearth long-forgotten 
                relics, each offering tantalizing clues to unlocking the secrets of Earth and the true purpose of their mission.
            </p>
            <p className='game-info-text'>
                As tensions escalate and alliances are tested, players must navigate a complex web of relationships, 
                each decision shaping the course of their journey and determining the fate of both the protagonist 
                and their newfound home. 
            </p>
        </div>
    </div>
  );
};

export default GameInfo
