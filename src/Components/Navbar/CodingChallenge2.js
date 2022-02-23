import React from 'react'
import { useState } from 'react'

const CodingChallenge2 = () => {
  const [list, setList] = useState([])
  const [value, setValue]= useState("")

  const changeHandler = (e) =>{
    setValue(e.target.value)
  }

  const submitHandler = ()=>{
    setList([...list,value])
    setValue("");
  }

  const removeMe = (item)=> {
  
    const newList = list.filter(ele => ele!== item)
    setList([...newList])

  }

  return (
  <div className = 'App' >
  
  <input type ='text' value = {value} onChange = {changeHandler} />{" "}
  <button onClick = {submitHandler}> Add To List</button>
  <hr />
  <ul>
    {list.length > 0 && list.map((item)=>{
      return (
        <div> 
        <li>{item}</li> 
        <button onClick = {()=> removeMe(item)}>remove me</button>
        </div>
      
      )
    })}
  </ul>
  </div>
  );
}

export default CodingChallenge2