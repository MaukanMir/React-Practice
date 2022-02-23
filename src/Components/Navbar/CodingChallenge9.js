import React from 'react'
import { useState, useEffect } from 'react'
import "./pali.css"
const CodingChallenge9 = () => {
    const [value, setValue] = useState(300)

    const moveUp = ()=>{
        setValue(value - 50)
    }

    const moveDown = ()=>{
        setValue(value +50)
    }

    useEffect(()=>{

    },[value])

  return (
      <div> 
       <button onClick = {moveUp}>Move me </button>
    <div className = 'box' 
    style ={{transform: `translateY(${value}px)`}}> 
     </div>

     <button onClick = {moveDown}>Move Down </button>
     </div>
  )
}

export default CodingChallenge9