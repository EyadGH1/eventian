import React from 'react'
import '../style.css';
//import { Link } from "react-router-dom";
import logo from "../assets/Screenshot (24).png"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe } from  '@fortawesome/free-solid-svg-icons'


export default function Nav() {

  const [language, setLanguage] = useState('English');

  const changeLanguage = () =>{
    setLanguage(prevLanguage => prevLanguage === 'English' ? 'عربي':"English");
  }



 return (
   
               <div className='nav'>
                <figure className="logo-container">
                    <img src={logo} alt='logo'  className='logo'/>
                </figure>
                <div className="menu">
                <ul className='nav-links'>
                    <li className="nav-link">Events</li>
                    <li className="nav-link">Contact us</li>
                    <li className="nav-link">About</li>
                </ul>
                <div className="prefrences">
                  <button className='adding'> Add your event</button>
                  <button className='language-button' onClick={changeLanguage}><p className='language-text'>{language}</p> <div className=""><FontAwesomeIcon icon={faGlobe} /></div></button>
                </div>
                </div>
                <input type="checkbox"  className='toggle-menu'></input>
                <div className="ham-menu">
               
               
            </div>
            </div>
  )
}
