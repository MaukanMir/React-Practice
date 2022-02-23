import React from 'react'
import { useState, useEffect } from 'react'
const URL = "https://api.coingecko.com/api/v3/coins/"
const Home = () => {

    const [coin, setCoin] = useState("")
    const [price, setPrice] = useState("")
    const [trend, setTrend] = useState("")
    const [top10, setTop10] = useState([])

    const fetchData = async()=>{
        const response = await fetch(URL + coin.toLowerCase())
        const cryptoData = await response.json()
        setTop10(cryptoData.slice(0,10).map((item) => item))
    }

    useEffect (()=>{
        fetchData()
    },[coin])

    const handleClick =(e)=>{
        console.log(e.target.value)
        setCoin(e.target.value)
        
    }
  return (

    <div>
    <div>
    <h1>Top 10 Crypto Currencies</h1>
        {top10.map((item, idx) => {
            return (
                <div key ={item.id}> 
            
                    <h1>{item.id}</h1>
                    <h3> Current Price: ${item['market_data']['current_price']['usd']}</h3>
                </div>  
                
            )
        })}
    </div>
    <button onClick ={(e)=>handleClick(e)}>Bitcoin</button>
    <button onClick ={(e)=>handleClick(e)} >Ethereum</button>
    <button onClick ={(e)=>handleClick(e)} >Cardano</button>

    </div>
  )
}

export default Home