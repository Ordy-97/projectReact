import React from 'react'
import CareScale from './CareScale';
import '../styles/plantItem.css'

const quantity = {
  1 : 'peu',
  2 : 'modèrement',
  3 : 'beaucoup'
}

function PlantItem({name, cover, id, light, water}) {
  
  return (
          
          <li className='lmj-plant-item' >
                  {name}
                  <img className='lmj-plant-item-cover' src={cover} alt="cool"/>

                  <div onClick={() =>handleClick(name )}>
                    <CareScale careType="light" scaleValue={light} />
                    <CareScale careType="water" scaleValue={water} />
                  </div> 
          </li>
  )
  function handleClick(e){
    //  alert(`🌟Voulez-vous acheter 1 ${e} ? Très bon choix 🌟`)
    // console.log(e)
    if(light > water){
      alert(`Il s'agit d'un composant CareScale de type Light qui requiert ${quantity[light]} de lumière et ${quantity[water]} d'arrosage!`)
    } else {
      alert(`Il s'agit d'un composant CareScale de type Water qui requiert ${quantity[light]} de lumière et ${quantity[water]} d'arrosage!`)
    }
  }
}


export default PlantItem
