import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 // Import Router components
import Navbar from './Components/Navbar/navbar.jsx'; // Import Navbar component
import About from './Components/About/About.jsx'; // Import About component
import Home from './Components/Home/Home.jsx'; 
import Main from './Components/Main/Main.jsx'; 


import Book from './Components/Book/Book.jsx';
import Footer from './Components/Footer/Footer.jsx';


import './App.css'; // Import any global CSS if needed


const App = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <Navbar />

      {/* Define routes for different components */}
      <Routes>
        {/* Home page route */}
        
        <Route path='/' element={<Home/>} />

        {/* Main page route */}
        <Route path="/main" element={<Main />} />

        {/* About page route */}
        <Route path="/about" element={<About />} />
     

        {/* Book page route */}
        <Route path="/book" element={<Book />} />

        {/* Add more routes for other pages if needed */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* Footer will always be visible */}
      <Footer />
    </Router>
  );
};

export default App;
