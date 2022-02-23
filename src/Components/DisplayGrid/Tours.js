import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './Loading'
const URL = "https://api.coingecko.com/api/v3/coins/bitcoin"
// const url = "https://api.github.com/users"
const Tours = () => {
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState(0)
    const [coin, setCoin] = useState("nothing")

    const fetchTours = async() =>{
        setLoading(true)
        const response = await fetch(URL);
        const users = await response.json()
        setPrice(users['market_data']['current_price']['usd'])
        setLoading(false)
    }
    useEffect(()=>{
        fetchTours()
    }, [])


    const handleChange = (e) =>{

        setCoin(e.target.value)

    }
    const submit= ()=>{
    }
    if(loading){
    
        return (
            <main>
                <Loading />
            </main>
        )
        
    }
  return (
    <div>
        <form onSubmit={() => submit()}> 
        <input value = {coin} onChange = {(e) => handleChange(e)} type="text" />
        <input type="submit" />
        </form>

    </div>
  )
}

export default Tours