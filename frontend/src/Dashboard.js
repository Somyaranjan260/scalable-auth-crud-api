import axios from "axios"
import {useState} from "react"

export default function Dashboard(){

const [title,setTitle]=useState("")

const addTask = async ()=>{

const token = localStorage.getItem("token")

await axios.post(
"http://localhost:5000/api/v1/tasks",
{title},
{
 headers:{
  Authorization:`Bearer ${token}`
 }
}
)

alert("Task added")
}

return(
<div>
<h3>Dashboard</h3>
<input onChange={e=>setTitle(e.target.value)} />
<button onClick={addTask}>Add Task</button>
</div>
)
}