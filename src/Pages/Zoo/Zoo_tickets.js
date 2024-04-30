
import { useNavigate } from "react-router-dom";
import "./Zoo_tickets.css"

const Zoo_tickets=()=>{
    const navigate=useNavigate()
    
    return(
        <div>
            
        <div className="background_bookings">
        <div className="event_box">

            <div className="ticket_title">Zoo Tickets

     <form className="ticket_inputs"> 
        <input id="input_box" required type="number" min="1" placeholder="Tickets"/>

        <button type="submit" id="submit_button" onClick={()=>navigate("/")}>Purchase</button>
        </form>
        </div>
        </div>
       

        </div>
        </div>
    )
}

export default Zoo_tickets;