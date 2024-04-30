import { useNavigate } from "react-router-dom";
import "./Sitemap.css"

const Sitemap=()=>{
    const navigate = useNavigate()
    return(
        <div>
            <div className="sitemap_box">

                    
                <div className="sitemap_text">
                    Riget Zoo Adventures
                    </div>
                <div className="site_buttons">
                
                
            <div className="sitemap_button1">
            <button id="button_site" onClick={()=>navigate("/aboutus")}>About us</button>
            <button id="button_site"  onClick={()=>navigate("/articles")}>Articles</button>
            <button id="button_site" onClick={()=>navigate("/events")}>Events</button>
            </div>
            <div className="sitemap_button2">
            <button id="button_site" onClick={()=>navigate("/privacy")}>Privacy</button>
            <button id="button_site" onClick={()=>navigate("/Terms")}>Terms and conditions</button>
            <button id="button_site" onClick={()=>navigate("/")}>Home</button>
            </div>
            <div className="sitemap_button3">
            <button id="button_site" onClick={()=>navigate("/contact")}>Contact us</button>
            <button id="button_site" onClick={()=>navigate("/zoo_booking")}>Book a zoo visit</button>
            <button id="button_site" onClick={()=>navigate("/hotel")}>Book a hotel visit</button>
    
            </div>
            </div>
            </div>
        
            <div>
            
            

            </div>
        </div>
    )
}

export default Sitemap;