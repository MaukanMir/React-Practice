import React from 'react'

import CardComponent from './CardComponent'

export const CardList = (props) => {

  return (
    <div>
        {props.monsters.map(monster=>(
                <CardComponent key = {monster.id} monster ={monster} />
                ))}
    </div>
  )
}

export default CardList