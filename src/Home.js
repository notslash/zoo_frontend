import { useNavigate } from "react-router-dom";
import "./Home.css"
import Navbar from "./Navbar";
import Sitemap from "./Sitemap";

const Home=()=>{
    const navigate=useNavigate()
    return(
        <div className="background_home">
            
            <div className="img_ratio">
                <img className="home_img" src="https://images.pexels.com/photos/39627/flamingo-valentine-heart-valentine-s-day-39627.jpeg"></img>
            </div>
            
            <div className="booking_home">
            <button className="booking_hotel" onClick={()=>navigate("/hotel")}>book hotel</button>
            <button className="booking_visit" onClick={()=>{navigate("/zoo_booking")}}>book a visit</button>
            </div>
           
            

        </div>
    )
}

export default Home;