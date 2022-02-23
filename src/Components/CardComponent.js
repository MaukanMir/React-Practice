import React from 'react'

export const CardComponent = (props) => {
  return (
    <div>
    <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="" />
        <h1>{props.monster.name}</h1>
    </div>
  )
}

export default CardComponent