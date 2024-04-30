import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import axios from "axios";
const Login=()=>{
    const navigate=useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState()
    const [userdata,setUserdata]=useState()
    return(
        <div>
            
        <div className="background_bookings">
        <div className="login_box">

            <div className="event_booking_title">Login


     <form className="event_inputs" onSubmit={async(e)=>{
        try{
            e.preventDefault()
            setError(false)
            setUserdata(null)
            const res=await axios.get(`https://zoo-app-back.onrender.com/login?username=${username}&password=${password}`)

            console.log(res.data)
            setUserdata({...res.data})
            localStorage.setItem("user",JSON.stringify(res.data.user))
            navigate("/profile")
        }catch(error){
            setError(true)
        }
    }}> 

    <input type="text" minLength="3" maxLength="20" id="input_box" required onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username"/>
    <input type="password" minLength="8" id="input_box" required onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"/>

        {/* <input id="input_box" required type="text" placeholder="Username"/>
        <input id="input_box" required type="password" placeholder="Password"/> */}
        <button type="submit" id="submit_button" >Submit</button>
        </form>
        <p className="signup_login">Dont have an account? <a href="signup">Signup</a></p>

       <div className="error_handle">
        {error&&<div>
            Incorrect password or username
            </div>}
        </div>
        </div>
      
       </div>
        </div>
        </div>
    )
}

export default Login;
