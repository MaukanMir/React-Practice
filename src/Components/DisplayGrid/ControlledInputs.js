import React from 'react'
import { useState } from 'react'
import './Controlled.css'

const ControlledInputs = () => {
const [person, setPerson] = useState({
    firstName: "", email:"", age: "", thugStatus:""
})

const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setPerson({...person,[name]:value})
}
const handleSubmit =(e)=>{
e.preventDefault()



console.log(person)
}

  return (

    <div className ="check">
    <form className='check' >
    <label  htmlFor ='firstName'> Name : </label>
    <input type="text"
         name="firstName" 
         id="firstName"
         value ={person.firstName}
         onChange = {handleChange}
          />

    <label  htmlFor ='email'> Email : </label>
        <input type="text"
         name="email" 
         id="email"
         value ={person.email}
         onChange = {handleChange}
          />

    <label  htmlFor ='age'> Age : </label>
        <input 
        type="text"
        name="age" 
         id="age"
         value ={person.age}
         onChange = {handleChange}
         />

    <label  htmlFor ='thugStatus'> G-Certified : </label>
    <input 
        type="text"
        name="thugStatus" 
         id="thugStatus"
         value ={person.thugStatus}
         onChange = {handleChange}
         />
        <button onClick = {handleSubmit} > Submit   </button>

    </form>

    </div>
  )

}

export default ControlledInputs