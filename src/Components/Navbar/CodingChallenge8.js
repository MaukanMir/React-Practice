import React from 'react'
import { useState, useEffect } from 'react'
import "./pali.css"
const CodingChallenge8 = () => {
    const [leftValue, setLeftValue] = useState(0)
    const [rightValue, setRightValue] = useState(0)
    const [final, setFinal] = useState(leftValue + rightValue)

    const handleClick = (e)=>{
        e.preventDefault()
        setFinal(parseInt(leftValue) + parseInt(rightValue))
    }

    useEffect(()=>{

    }, [leftValue,rightValue, final])

  return (
    <div className = "app">Bullshit Calculator App
    <form  > 
    <input type="text" onChange={(e)=> setLeftValue(e.target.value)} />
    <input type="text" onChange={(e)=> setRightValue(e.target.value)} />

    <button onClick = {(e) => handleClick(e)}> Submit </button>
    </form>

    <h1>{final}</h1>
    </div>
  )
}

export default CodingChallenge8