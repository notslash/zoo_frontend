import "./Event_book.css"

import { useNavigate } from "react-router-dom";

const Event_book=()=>{
    const navigate=useNavigate()
    return(

        <div>
            
        <div className="background_bookings">
        <div className="event_box">

            <div className="event_booking_title" onSubmit={()=>navigate("/Zoo_tickets")}>Event

     <form className="event_inputs"> 
        <input id="input_box" required type="text" placeholder="Event name"/>
        <input id="input_box" required type="text" placeholder="Username"/>
        <input id="input_box" required type="text" placeholder="First name"/>
        <input id="input_box" required type="text" placeholder="Last name"/>
        <input id="input_box" required type="date" placeholder="DOB"/>
        <button type="submit" id="submit_button" >Submit</button>
        </form>
        </div>
        </div>
       

        </div>
        </div>
    )
}

export default Event_book;