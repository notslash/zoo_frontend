import "./Hotels.css"
import { useNavigate } from "react-router-dom";

const Hotels=()=>{
    const navigate=useNavigate()
    return(
        <div>
            
        <div className="background_bookings">
        <div className="event_box">

            <div className="event_booking_title">Hotel booking

     <form className="event_inputs" onSubmit={()=>navigate("/Hotel_tickets")}> 

        <input id="input_box" maxLength="20" minLength="3" required type="text" placeholder="Username"/>
        <input id="input_box" required maxLength="20" minLength="3" type="text" placeholder="First name"/>
        <input id="input_box" required maxLength="20" minLength="3" type="text" placeholder="Last name"/>
        <input id="input_box" required type="date"  min="1924-01-01" max="2024-01-01" placeholder="DOB"/>
        <button id="submit_button" type="submit">Submit</button>
        </form>
        </div>
        </div>
       

        </div>
        </div>
    )
}

export default Hotels;