import React from 'react'
import { useState } from 'react'
import { data } from './Data'
const Practice = () => {
    
    const [people, setData] = useState(data)

    const removeItem = (idx) =>{
        let filteredPeople = people.filter((item, id)=> id !== idx )
        setData(filteredPeople)

        console.log(filteredPeople)
    }


return (
<div>
{
    people.map((person, idx)=>{
        return (
            <div key = {idx}>
            <h1>{person}</h1>
            <button onClick = {()=> removeItem(idx)}> remove me bitch</button>
            </div>
        )
        })
};
<button onClick = {()=>setData([])}>clear items</button>
</div>
  )
}


export default Practice