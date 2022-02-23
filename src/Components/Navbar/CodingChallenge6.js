import React from 'react'
import { useState } from 'react'
import './pali.css'

const CodingChallenge6 = () => {
    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    const checkPali = (value)=>{
        setResult(value === value.split("").reverse().join(""))
    }

  return (
    <div className = "app">
    <h1>Palindrome Checker</h1>
        <input placeholder ="Type here bitch" onChange ={(e)=> setValue(e.target.value)} type="text" />
        <button onClick = {() => checkPali(value)}>Submit</button>
        <h1>{result ? "This is a Palindrome": "This is not a Palindrome"}</h1>
    </div>
  )
}

export default CodingChallenge6