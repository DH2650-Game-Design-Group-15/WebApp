import React from 'react';
import './Gameplay.css';

function Gameplay() {
  return (
    <div className='gameplay'>
      <p className='gameplay-header'>
        Gameplay
      </p>
      <div className='gameplay-text-container'>
        <p className='gameplay-text'>
            The goal of the game is to get the necessary resources to rebuild the ship and
            make it back to the alien’s home planet. This can be done in multiple ways; either 
            you choose to cooperate with one or more human factions on Earth to get the resources,
            or you try to obtain the resources by stealing and possibly killing the humans. 
            But remember that all of your actions will have their consequences! Killing a human will 
            result in a reputation loss with the faction that the human was connected to and they might 
            become hostile. 
        </p>
        <p className='gameplay-text'>
            In the demo version of Alien Odyssey you as a player are able to gather or steal resources, 
            complete quest, and also kill the humans if you so choose. The resources that you can gather 
            are wood, stone, metal plates, and more which then can be used for turning in quests, repairing 
            the ship, or crafting health potions. 
        </p>
      </div>
      
    </div>
  );
};

export default Gameplay
