import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
const url = "https://jsonplaceholder.typicode.com/"
const CodingChallenge5 = () => {
    const [main, setMain] = useState([])


    const handleUsers = async() =>{
        const response = await axios.get(url +"users")
        setMain(response['data'])
    }
    const handlePosts = async() =>{
        const response = await axios.get(url +"posts")
        setMain(response['data'])
        
    }

    const handleComments = async() =>{
        const response = await axios.get(url +"comments")
        setMain(response['data'])
    }

    const handleShit =(e) =>{
        const input = e.target.value
        console.log(input === "")
    }


    


return (
    <div className = 'app'>
        <button onClick = {handleUsers}>users</button>
        <button onClick = {handlePosts}>Posts</button>
        <button onClick = {handleComments}>Comments</button>
        
        

        <div>
            { main && main.map(item=>{
                return (
                    <li key = {item['id']}>{JSON.stringify(item)}</li>
                )
            })}
        </div>
    </div>
)
}

export default CodingChallenge5