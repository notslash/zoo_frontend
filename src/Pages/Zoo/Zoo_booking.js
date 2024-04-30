import { useNavigate } from "react-router-dom";
import "./Zoo_booking.css"

const Zoo_booking=()=>{
    const navigate=useNavigate()
    return(
<div>
            
        <div className="background_bookings">
        <div className="event_box">

            <div className="event_booking_title">Zoo booking

     <form className="event_inputs" onSubmit={()=>navigate("/Zoo_tickets")}> 
        <input id="input_box" maxLength="20" minLength="3" required type="text" placeholder="Username"/>
        <input id="input_box" maxLength="20" minLength="3" required type="text" placeholder="First name"/>
        <input id="input_box" maxLength="20" minLength="3" required type="text" placeholder="Last name"/>
        <input id="input_box" required min="1924-01-01" max="2024-01-01" type="date" placeholder="DOB"/>
        <button id="submit_button" color="primary" type="submit">Submit</button>
        </form>
        </div>
        </div>
       

        </div>
        </div>

    )
}


export default Zoo_booking;

