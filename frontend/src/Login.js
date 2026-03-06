import axios from "axios"
import {useState} from "react"

export default function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const login = async ()=>{

 const res = await axios.post(
 "http://localhost:5000/api/v1/auth/login",
 {email,password}
 )

 localStorage.setItem("token",res.data.token)
}

return(
<div>
<h3>Login</h3>
<input onChange={e=>setEmail(e.target.value)} />
<input onChange={e=>setPassword(e.target.value)} />
<button onClick={login}>Login</button>
</div>
)
}