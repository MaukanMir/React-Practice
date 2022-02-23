import React, {useState, useEffect} from 'react'


const Modal = () => {

    const [show, setShow ]= useState(false)

   const handleClick =() =>{
        setShow(true)
    }

    const removeModal =()=>{
        setShow(false)
    }

    useEffect(() =>{
        console.log("Page had rerendered")
    },[show])


  return (
    <div className = "modal">

    <button onClick = {handleClick}>Show Modal</button>

    <button onClick = {removeModal}> Remove modal </button>

    <div  style ={ show?  {display: "flex"} : {display: "none"}} className ='here'>
    <h1  className ="present">I am modal, Hello!</h1>
     </div>

    </div>
  )
}

export default Modal