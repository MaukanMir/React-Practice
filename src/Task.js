import React from 'react'

const Task = ({taskName,time}) => {
  return (

    <div className = "task">
        <h1>TaskName : {taskName} </h1>
        <h1>Time To Complete: {time}</h1>
    </div>
  )
}

export default Task