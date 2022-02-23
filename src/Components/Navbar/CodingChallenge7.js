import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./pali.css"
const URL = "https://api.coingecko.com/api/v3/coins/bitcoin"

const CodingChallenge7 = () => {
    const [currentPrice, setPrice] = useState("")
    const [market24Change, setMarket24Change] = useState("")
    const [market7Change, setMarket7Change] = useState("")
    const [market14Change, setMarket14Change] = useState("")
    const [market30Change, setMarket30Change] = useState("")
    const [market60Change, setMarket60Change] = useState("")

    const fetchData = async()=>{

        const response = await axios.get(URL)

        setPrice(response['data']['market_data']['current_price']['usd'])
        setMarket24Change(response['data']['market_data']['price_change_24h'])
        setMarket7Change(response['data']['market_data']['price_change_percentage_7d'])
        setMarket14Change(response['data']['market_data']['price_change_percentage_14d'])
        setMarket30Change(response['data']['market_data']['price_change_percentage_30d'])
        setMarket60Change(response['data']['market_data']['price_change_percentage_60d'])
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className = 'app'>
        <h1>Bitcoin Price Tracker</h1>
        <h1>The Current Price of Bitcoin is: {currentPrice}</h1>
        <h1>The 24 Hour Change is: {market24Change}</h1>
        <h1>The 7 day Change is: {market7Change}</h1>
        <h1>The 14 day Change is: {market14Change}</h1>
        <h1>The 30 day Change is: {market30Change}</h1>
        <h1>The 60 day Change is: {market60Change}</h1>
    </div>
  )
}

export default CodingChallenge7