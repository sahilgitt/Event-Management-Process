import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventDetails from "./components/EventDetails/EventDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (

   <Router>
      <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
