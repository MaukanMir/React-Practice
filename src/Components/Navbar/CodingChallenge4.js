import React from 'react'
import "./react.css"
import { useState } from 'react'

const CodingChallenge4 = () => {

    const [color, setColor] = useState("red")

    const handleChange = (e) =>{
        setColor(e.target.value)
    }
  return (
    <div className ='app'>
    <div className ="holder" style ={{backgroundColor: color}}>
        <p className ="p-tag"> {color} </p>
    </div>
    <label className ="useless" htmlFor="">Type Your Color Below</label>
    <input style ={{backgroundColor: color}} className = "input" type="text"  onChange= {handleChange} />
    </div>
  )
}

export default CodingChallenge4