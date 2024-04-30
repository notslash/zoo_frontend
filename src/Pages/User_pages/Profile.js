import "./Profile.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Profile=()=>{



 

    return(
        <div className="background_profile">

            <div className="profile_container">

            <p className="profile_title">Profile</p>

            <div className="profile_recent_container">
            <a className="profile_recent" href="/bookings">
                <div className="recent_title">Hotel visits</div>

                <div className="main_data">

                <div className="first_column">
                <div>Date</div>
                <div>12 december</div>
                </div>

                <div className="second_column">
                <div>Duration</div>
                <div>2 nights</div>
                </div>

                <div className="third_column">
                <div>Amount of guests</div>
                <div>4</div>
                </div>

            </div>
            </a>

            <a className="profile_recent" href="/bookings">
                <div className="recent_title">Zoo tickets</div>

                <div className="main_data">

                <div className="first_column">
                <div>Date</div>
                <div>12 december</div>
                </div>

                <div className="second_column">
                <div>Duration</div>
                <div>2 nights</div>
                </div>

                <div className="third_column">
                <div>Amount of guests</div>
                <div>4</div>
                </div>
                </div>
                
                
            
            </a>
            
            </div>
          <div className="profile_recent_container">
            <a className="profile_zoo_book" href="/zoo_booking">
                <div className="profile_zoo_font">Book a zoo trip</div>
            </a>
                <a className="profile_hotel_book" href="/hotel">
                <div className="profile_hotel_font">Book a Hotel</div>
                </a>
            
            </div>
          </div>

            
        </div>
    )
}

export default Profile;