import "./Hotel_tickets.css"

import { useNavigate } from "react-router-dom";

const Hotel_tickets=()=>{
    const navigate=useNavigate()
    return(
        <div>
            
        <div className="background_bookings">
        <div className="event_box">

            <div className="ticket_title">Hotel Tickets

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

export default Hotel_tickets;