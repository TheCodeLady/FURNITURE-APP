import React from 'react'
import './IndividualFurniture.css'

const IndividualFurniture = (props) => {
  return (
    <div className='indItem'>
      <img src={props.imgSrc} alt=''></img>
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>

    </div>
  )
}

export default IndividualFurniture