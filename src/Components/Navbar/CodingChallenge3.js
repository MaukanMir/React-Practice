import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const CodingChallenge3 = () => {

    const [data, setData] = useState([])

    const getDate = async() =>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
        setData(data)
    }

    useEffect( ()=>{
        getDate()
    }, [])


  return (
    <div>
        <ui>
            { data.length >0  && data.map((item)=>{
                return (
                    <>
                        <li> id: {item.id}</li>
                        <li> name: {item.name}</li>
                        <li> email: {item.email}</li>
                    </>
                )
            })}
        </ui>

    </div>
  )
}

export default CodingChallenge3