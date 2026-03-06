import axios from "axios"
import {useState} from "react"

export default function Register(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const register = async ()=>{
 await axios.post(
 "http://localhost:5000/api/v1/auth/register",
 {email,password}
 )
 alert("Registered")
}

return(
<div>
<h3>Register</h3>
<input onChange={e=>setEmail(e.target.value)} placeholder="email"/>
<input onChange={e=>setPassword(e.target.value)} placeholder="password"/>
<button onClick={register}>Register</button>
</div>
)
}