import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Aboutus from './Pages/Nav_pages/Aboutus';
import Privacy from './Pages/Nav_pages/Privacy';
import Terms from './Pages/Nav_pages/Terms';
import Events from './Pages/Nav_pages/Events';
import Articles from './Pages/Nav_pages/Articles';
import Event_book from './Pages/Event_book';
import Event_tickets from './Event_tickets';
import Navbar from './Navbar';
import Sitemap from './Sitemap';
import Hotels from './Pages/Hotel/Hotels';
import Hotel_tickets from './Pages/Hotel/Hotel_tickets';
import Zoo_booking from './Pages/Zoo/Zoo_booking';
import Zoo_tickets from './Pages/Zoo/Zoo_tickets';
import Profile from './Pages/User_pages/Profile';
import Main_bookings from './Pages/User_pages/Main_bookings';
import Login from './Pages/User_pages/Login';
import Signup from './Pages/User_pages/Signup';
import Contactus from './Pages/Contactus';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path="/Privacy" element={<Privacy/>}/>
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/Articles" element={<Articles/>}/>
      <Route path="/Event_booking" element={<Event_book/>}/>
      <Route path="/Event_tickets" element={<Event_tickets/>}/>
      <Route path="/Hotel" element={<Hotels/>}/>
      <Route path="/Hotel_tickets"element={<Hotel_tickets/>}/>
      <Route path="/Zoo_booking" element={<Zoo_booking/>}/>
      <Route path="/Zoo_tickets" element={<Zoo_tickets/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/bookings" element={<Main_bookings/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="contact" element={<Contactus/>}/>
      
    </Routes>
    <Sitemap/>
    </BrowserRouter>
  );
}

export default App;
