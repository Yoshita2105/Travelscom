import React, { useState } from 'react'




import './navbar.css'

import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
   const [active,setActive] = useState('navBar')
   //Function to toggle navBar
   const showNav = () =>{
     setActive('navBar activeNavbar')
   }
   //Function to remove navBar
   const removeNavbar = () =>{
     setActive('navBar')
   }
  return (
    <div>
      <section className='navBarSection'>
       <header className='header flex'>
        <div className='logoDiv'>
         <a href='#' className='logo flex'>
          <h1><MdOutlineTravelExplore
          className='icon'/> Travel.</h1>
         </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
           <li className='navItem'>
            <a href='/' className='navLink'>Home</a>
           </li>
           <li className='navItem'>
            <a href='/main' className='navLink' >Packages</a>
           </li>
          
           <li className='navItem'>
            <a href='/about' className='navLink'>About</a>
           </li>
           
         
           <li className='navItem'>
            <a href='/footer' className='navLink'>Contact</a>
           </li>

           <button className='btn'>
            <a href='/book'>BOOK NOW</a>
           </button>
          </ul>
          <div onClick={removeNavbar} className='closeNavbar'>
           <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
         <TbGridDots className='icon' />
        </div>
       </header>
      </section>
    </div>
  )
}

export default Navbar;
