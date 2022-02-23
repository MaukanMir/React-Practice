
import React,{useEffect, useState} from 'react'
import axios from 'axios'

const API_KEY = "a7521c00427b8271aea6201bdc7a12ec"




const WeatherData = () => {
    const [value, setValue] = useState("")
    const [cityData, setCityData] = useState([])
    const [check, setDescription] = useState({
      description:0,
      temp: 0,
      temp_min: 0,
      humidity:0,
      sunrise: 0,
      sunset:0,
      country: ""
    })
    const fetchData = async()=>{
        const geo = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`
        const response = await axios.get(geo)
        console.log(response['data'])
  
        setDescription(
          { description:response.data.weather[0].description, 
          temp:response.data.main.temp,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country
          })
    }

    const handleClick =()=>{
          fetchData()
    }
    useEffect(()=>{
      
    }, [value])


  return (
    <div>
    <h1>Weather app</h1>
    <label htmlFor="">Weather Finder</label>
        <input placeholder='Type city name here' type="text" onChange ={(e)=> setValue(e.target.value)} />
        <button onClick = {handleClick}>Submit</button>

    
            <div>
            <h1>City: {value}</h1>
            <h2>description is {check.description}</h2>
            <h2>The temp  is: {check.temp}</h2>
            <h2> The temp-min is: {check.temp_min}</h2>
            <h2> The Humidity is: {check.humidity}</h2>
            <h2> The sunrise is: {check.sunrise}</h2>
            <h2> The sunset is: {check.sunset}</h2>
            <h2> The country is: {check.country}</h2>
            </div>
    </div>
  )
}

export default WeatherData