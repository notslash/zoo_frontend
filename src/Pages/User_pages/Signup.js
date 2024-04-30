import { useNavigate } from "react-router-dom";
import "./Signup.css"
import { useState } from "react";
import axios from "axios";

const Signup=()=>{
    const navigate=useNavigate()
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [password2,setPassword2]=useState()
    const [userdata,setUserdata]=useState()
    const [error,setError]=useState()
    return(
<div>
            
            <div className="background_bookings">
            <div className="event_box">
    
                <div className="event_booking_title">Signup
    
         <form className="event_inputs" on onSubmit={async(e)=>{
            try{
                e.preventDefault()
                setError(false)
                setUserdata(null)
                const res= await axios.post(`https://zoo-app-back.onrender.com/signup`,{username,password,password2})

                console.log(res.data)
                setUserdata({...res.data})
                localStorage.setItem("user", JSON.stringify(res.data.user))
                navigate("/login")
            }catch(error){
                setError(true)
            }

         }}> 
             <input type="text" minLength="3" maxLength="20" id="input_box" required onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username"/>
            <input type="password" minLength="8" maxLength="25" id="input_box" required onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"/>
            <input type="password" id="input_box" required onChange={(e)=>setPassword2(e.target.value)} value={password2} placeholder="Confirm Password"/>
            <div className="termscheck"><p>I agree to the</p> <a id="terms_link" href="terms">Terms and conditions</a><input type="checkbox" required placeholder="heheh"/></div>
            
            <button type="submit" id="submit_button" >Submit</button>
            </form>
            <p className="signup_login">Already have an account? <a href="login">Login</a></p>

            <div className="error_handle">
                
                {error &&<div>Email or password is incorrect</div>}
                </div>
            </div>
            </div>
            </div>
           
            </div>
    )
}

export default Signup;
