import React from 'react'
import { useState } from 'react';
import Task from './Task';

function App() {
  const [taskName, setTaskName] = useState("")
  const [time, setTime] = useState("")
  const [taskList, setTaskList] = useState([])

  const addTasks =()=>{
    setTaskName("")
    setTaskList([...taskList, {task:taskName, time: time}])
    setTime("")
  }

  return (
  <div className = 'App' >
    <label >Task Name: </label>
    <input type="text" id = "time" onChange ={(e) =>{setTaskName(e.target.value)}} />
    <label> Time:  </label>
    <input type="text" id = "time" onChange={(e) => setTime(e.target.value)} />

    <button onClick ={addTasks}>Add</button>

    {
      taskList.map((item) =>{

        return(
          <Task taskName = {item.task} time = {item.time} />
        )
      })
    }

  </div>
  );
}

export default App;
