import { useNavigate } from "react-router-dom";
import "./Event_tickets.css"




const Event_tickets=()=>{
    const navigate=useNavigate()
    return(
        <div>
            
        <div className="background_bookings">
        <div className="event_box">

            <div className="ticket_title">Event Tickets

     <form className="ticket_inputs"> 
        <input id="input_box" required type="number" min="1" placeholder="Tickets"/>

        <button id="submit_button" onClick={()=>navigate("/")}>Purchase</button>
        </form>
        </div>
        </div>
       

        </div>
        </div>
    )
}

export default Event_tickets;