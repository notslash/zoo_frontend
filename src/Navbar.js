import { useState } from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    const [size,setSize]=useState(2)
    const profile_button = () => {
        if (localStorage.getItem("user")) {
            return (
                <div className="login_sign">
                    <a id="profile" href="/profile">Profile</a>
                    <button id="profile" onClick={() => localStorage.removeItem("user")}>Logout</button>

                </div>
            )
        } else {
            return <div className="login_sign">
                

                <button id="login" onClick={() => navigate("/login")}>Login</button>
                <button id="signup" onClick={() => navigate("/signup")}>Signup</button>
            </div>
        }
    }
    return (
        <div>
            <div className="navbar">
                <div className="nav_text">
                    <a className="title" href="/">Riget Zoo Adventures</a>

                    <button id="button_nav" onClick={() => navigate("/aboutus")}>About us</button>
                    <button id="button_nav" onClick={() => navigate("/articles")}>Articles</button>
                    <button id="button_nav" onClick={() => navigate("/events")}>Events</button>
                    <button id="button_nav" onClick={() => navigate("/privacy")}>Privacy</button>
                    <button id="button_nav" onClick={() => navigate("/Terms")}>Terms and conditions</button>


                </div>


                {profile_button()}
            </div>

        </div>


    )
}

export default Navbar;