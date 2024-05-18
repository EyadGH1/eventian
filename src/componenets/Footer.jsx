import React from 'react'

import '../style.css';
import { Link } from "react-router-dom";
//import logo from "../assets/Screenshot (24).png"
//import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
  return (
    <footer>
        <div className="social"> <h2 className='social-head'> Our Social</h2>
        <ul className='footer-links'>
           <li className='footer-link'> <Link to={"https://www.instagram.com/a_hypocrite105/0"} target='_blank'> <FontAwesomeIcon icon={faInstagram} /> </Link></li> 
        </ul>
        </div>
        <hr className='footer-line'/>
        <hr />
        <div className="footer-phara"><p>we in eventia aim to find a way foy jordan youth to find events because it might seem hard top find events in jordan or find places to go to in jordan like runing events cars events in jordan etc </p></div>
            <p>  copyrights &copy; for <Link to= {"https://www.instagram.com/eyadthegh/"}> eyadthegh</Link> </p>
    </footer>
  )
}
