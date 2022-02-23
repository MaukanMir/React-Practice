import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = ()=>{
        setCount(count+1) 
    }

    const reset = ()=>{
        setCount(0)
    }

    const decrease = ()=>{
        
        setCount(count -1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick ={()=> increase()}>increase me bitch</button>
        <button onClick ={()=> reset()}>reset me bitch</button>
        <button onClick = {()=> decrease()} >Decrease me bitch</button>

    </div>
  )
}

export default Counter