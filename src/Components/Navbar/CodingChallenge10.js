import React from 'react'
import axios from "axios"
import {useState} from 'react'

const URL = 'https://www.anapioficeandfire.com/api/books?'
const CodingChallenge10 = () => {

    const[value, setValue ] = useState([])

    const fetchData = async()=>{
        const response = await axios.get(URL)
        console.log(response)
        setValue(response['data'])
    
    }
  return (
    <div>
        <button onClick = {fetchData}> Fetch data</button>
        {value && value.map(item => {
            return (
                <div key = {item.isbn}>
                <h1> Book Title: {item.name}</h1>
                <li> Author: {item.authors}</li>
                <li> Number of Pages: {item.numberOfPages}</li>
                <li> Country of Origin: {item.country}</li>
                <li> Date of release: {item.released.split("T")[0]}</li>

                </div>
            )
        })}
    </div>
  )
}

export default CodingChallenge10